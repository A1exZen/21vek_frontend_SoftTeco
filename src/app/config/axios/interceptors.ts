import { AxiosResponse, isAxiosError } from 'axios';
import { camelizeKeys } from 'humps';
import { BaseError } from '@utils/ErrorHandler/BaseError';

interface IInterceptors {
  onSuccess: (response: AxiosResponse) => AxiosResponse;
  onError: (error: Error) => void;
}

export const interceptors: IInterceptors = {
  onSuccess: (response: AxiosResponse) => {
    if (
      response.data &&
      response.headers['content-type'].includes('application/json')
    ) {
      response.data = camelizeKeys(response.data);
    }
    return response.data ? response.data : response;
  },
  onError: (error: Error) => {
    if (isAxiosError(error)) {
      const statusCode = error.response?.status;
      const requestUrl = error.config?.url;

      if (statusCode && requestUrl) {
        throw new BaseError('Error with axios respone', {
          cause: error,
          context: {
            statusCode: statusCode,
            endpoint: requestUrl,
          },
        });
      }
    }
    Promise.reject(error);
  },
};
