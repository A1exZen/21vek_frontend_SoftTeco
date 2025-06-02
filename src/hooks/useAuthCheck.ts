import { API_CONFIG, QueryKeys } from '@/constants';
import { $api } from '@/app/config/axios/api';
import { useQuery } from '@tanstack/react-query';
import { ensureError, BaseError } from '@/utils/ErrorHandler';

export const useAuthCheck = () => {
  useQuery({
    queryKey: [QueryKeys.CHECK_AUTH],
    queryFn: async (): Promise<void> => {
      try {
        await $api.get(API_CONFIG.ENDPOINTS.AUTH.CHECK);
      } catch (error) {
        const err = ensureError(error);
        throw new BaseError('Error with check auth', {
          cause: err,
          context: { endpoint: API_CONFIG.ENDPOINTS.AUTH.CHECK },
        });
      }
    },
    retry: false,
  });
};
