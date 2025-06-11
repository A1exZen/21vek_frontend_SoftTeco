import { $api } from '@/app/config/axios/api';
import { API_CONFIG } from '@/constants';

import {
  AddressesResponse,
  AddressRequest,
  AddressResponse,
  UserUpdateRequest,
  UserUpdateResponse,
} from '@/models/user/api';
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

export const getAddresses = async (): Promise<AddressesResponse> => {
  try {
    return await $api.get<AddressesResponse, AddressesResponse, void>(
      API_CONFIG.ENDPOINTS.USER.GET_ADDRESSES,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('get addresses  failed', { cause: err });
  }
};

export const addAddress = async (data: AddressRequest): Promise<void> => {
  try {
    await $api.put<void, void, AddressRequest>(
      API_CONFIG.ENDPOINTS.USER.ADD_ADDRESS,
      data,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('update user info failed', { cause: err });
  }
};

export const deleteAddress = async (idAddress: number): Promise<void> => {
  try {
    await $api.put<void, void, void>(
      `${API_CONFIG.ENDPOINTS.USER.DELETE_ADDRESS}/${idAddress}`,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('update user info failed', { cause: err });
  }
};

export const changeAddress = async (
  data: AddressRequest,
): Promise<AddressResponse> => {
  try {
    return await $api.put<AddressResponse, AddressResponse, AddressRequest>(
      API_CONFIG.ENDPOINTS.USER.CHANGE_ADDRESS,
      data,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('update user info failed', { cause: err });
  }
};
