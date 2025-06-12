import { AxiosError, AxiosResponse, isAxiosError } from 'axios';
import { camelizeKeys } from 'humps';
import { BaseError, ResponseError, ensureError } from '@utils/ErrorHandler';
import { $api } from './api';
import { HttpStatusCode } from '@models/common';
import { refreshToken } from '@/api/auth';
import { toast } from 'react-hot-toast';

interface Interceptors {
  onSuccess: (response: AxiosResponse) => AxiosResponse;
  onError: (error: AxiosError) => Promise<never>;
}

export const interceptors: Interceptors = {
  onSuccess: (response: AxiosResponse) => {
    if (
      response.data &&
      response.headers['content-type']?.includes('application/json')
    ) {
      response.data = camelizeKeys(response.data);
    }
    return response.data ? response.data : response;
  },
  onError: async (error: AxiosError) => {
    const err = ensureError(error);

    if (!isAxiosError(err)) {
      throw new BaseError('Non axios error', {
        cause: err,
      });
    }

    const originalRequest = err.config;
    const statusCode = err.response?.status;

    if (
      error.response?.status === HttpStatusCode.UNAUTHORIZED &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        await refreshToken();
        return $api.request(originalRequest);
      } catch (refreshError) {
        toast.error('Сессия истекла');
        const err = ensureError(refreshError);
        console.error('токенов нету');
        throw new ResponseError(
          'Error with refetch token',
          statusCode!,
          err.message,
          {
            cause: err,
            context: {
              endpoint: originalRequest?.url,
            },
          },
        );
      }
    }

    throw new ResponseError('API request failed', statusCode!, err.message, {
      cause: err,
      context: {
        endpoint: originalRequest?.url,
        method: originalRequest?.method,
      },
    });
  },
};
