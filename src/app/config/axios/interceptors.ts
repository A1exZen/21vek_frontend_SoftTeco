import { AxiosResponse, isAxiosError } from 'axios';
import { camelizeKeys } from 'humps';
import {
  BaseError,
  ResponseError,
  ensureError,
  handleHttpError,
} from '@utils/ErrorHandler';
import { $api } from './api';
import { HttpStatusCode } from '@models/common';
import { refreshToken } from '@/api/auth';

interface Interceptors {
  onSuccess: (response: AxiosResponse) => AxiosResponse;
  onError: (error: Error) => Promise<never>;
}

export const interceptors: Interceptors = {
  onSuccess: (response: AxiosResponse) => {
    if (
      response.data &&
      response.headers['content-type'].includes('application/json')
    ) {
      response.data = camelizeKeys(response.data);
    }
    return response.data ? response.data : response;
  },
  onError: async (error) => {
    const err = ensureError(error);

    if (!isAxiosError(err)) {
      throw new BaseError('Non axios error', {
        cause: err,
        context: {
          errorStack: err.stack,
        },
      });
    }

    const originalRequest = err.config;
    const statusCode = err.response?.status;

    if (statusCode === HttpStatusCode.UNAUTHORIZED && originalRequest) {
      try {
        await refreshToken();
        return $api.request(originalRequest);
      } catch (refreshError) {
        handleHttpError(HttpStatusCode.UNAUTHORIZED);
        const err = ensureError(refreshError);
        throw new ResponseError(
          'Error with refetch token',
          statusCode,
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

    handleHttpError(statusCode);
    throw new ResponseError('API request failed', statusCode!, err.message, {
      cause: err,
      context: {
        endpoint: originalRequest?.url,
        method: originalRequest?.method,
      },
    });
  },
};
