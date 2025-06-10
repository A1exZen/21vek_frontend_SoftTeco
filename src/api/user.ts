import { $api } from '@/app/config/axios/api';
import { API_CONFIG } from '@/constants';

import { UserUpdateRequest, UserUpdateResponse } from '@/models/user/api';
import { BaseError, ensureError } from '@/utils/ErrorHandler';

export const updateUser = async (
  data: UserUpdateRequest,
): Promise<UserUpdateResponse> => {
  try {
    return await $api.put<
      UserUpdateResponse,
      UserUpdateResponse,
      UserUpdateRequest
    >(API_CONFIG.ENDPOINTS.USER.UPDATE, data);
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('update user info failed', { cause: err });
  }
};
