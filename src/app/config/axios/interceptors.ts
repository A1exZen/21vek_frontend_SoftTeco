import {
  AxiosError,
  AxiosResponse,
  isAxiosError,
  InternalAxiosRequestConfig,
} from 'axios';
import { camelizeKeys } from 'humps';
import { BaseError, ResponseError, ensureError } from '@utils/ErrorHandler';
import { $api } from './api';
import { HttpStatusCode } from '@models/common';
import { refreshToken as callRefreshTokenApi } from '@/api/auth';
import { toast } from 'react-hot-toast';

interface Interceptors {
  onSuccess: (response: AxiosResponse) => AxiosResponse;
  onError: (error: AxiosError) => Promise<never>;
}

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value: AxiosResponse | PromiseLike<AxiosResponse>) => void;
  reject: (reason?: AxiosError | Error) => void;
  config: InternalAxiosRequestConfig;
}> = [];

const processQueue = (error: AxiosError | null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve($api.request(prom.config));
    }
  });
  failedQueue = [];
};

export const interceptors: Interceptors = {
  onSuccess: (response: AxiosResponse) => {
    if (
      response.data &&
      response.headers['content-type']?.includes('application/json')
    ) {
      response.data = camelizeKeys(response.data);
    }
    return response.data !== undefined ? response.data : response;
  },
  onError: async (error: AxiosError): Promise<never> => {
    const err = ensureError(error);

    if (!isAxiosError(err)) {
      throw new BaseError('Non axios error', { cause: err });
    }

    const originalRequest = err.config;
    const statusCode = err.response?.status;

    if (statusCode === HttpStatusCode.UNAUTHORIZED) {
      if (originalRequest && originalRequest._isRefreshRequest) {
        isRefreshing = false;
        processQueue(err);
        toast.error('Сессия истекла. Пожалуйста, войдите снова.');
        throw new ResponseError(
          'Refresh token is invalid or expired. Session ended.',
          statusCode,
          err.message,
          { cause: err, context: { endpoint: originalRequest.url } },
        );
      }

      if (originalRequest && !originalRequest._isRetry) {
        originalRequest._isRetry = true;

        if (isRefreshing) {
          return new Promise<AxiosResponse>((resolve, reject) => {
            failedQueue.push({ resolve, reject, config: originalRequest });
          });
        }

        isRefreshing = true;
        console.log('Initiating token refresh process...');

        try {
          await callRefreshTokenApi();
          processQueue(null);
          return $api.request(originalRequest);
        } catch (refreshError) {
          console.error('Error refreshing token:', refreshError);
          isRefreshing = false;
          processQueue(ensureError(refreshError) as AxiosError);
          toast.error('Сессия истекла. Пожалуйста, войдите снова.');
          throw new ResponseError(
            'Failed to refresh token. Session ended.',
            statusCode,
            ensureError(refreshError).message,
            {
              cause: ensureError(refreshError),
              context: { endpoint: originalRequest.url },
            },
          );
        } finally {
          isRefreshing = false;
        }
      }
    }

    console.error('API request failed with status:', statusCode, error.message);
    throw new ResponseError('API request failed', statusCode!, err.message, {
      cause: err,
      context: {
        endpoint: originalRequest?.url,
        method: originalRequest?.method,
      },
    });
  },
};
