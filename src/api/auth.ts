import { $api } from '@/app/config/axios/api';
import { API_CONFIG } from '@/constants';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from '@/models/auth/api';
import { BaseError, ensureError, handleHttpError } from '@utils/ErrorHandler';
import { HttpStatusCode } from '@/models/common';
import Cookies from 'js-cookie';

export const login = async (data: LoginRequest): Promise<LoginResponse> =>
  await $api.post<LoginResponse, LoginResponse, LoginRequest>(
    API_CONFIG.ENDPOINTS.AUTH.LOGIN,
    data,
    {
      headers: {
        Accept: 'application/json',
      },
    },
  );

export const register = async (data: RegisterRequest): Promise<void> => {
  await $api.post<void, void, RegisterRequest>(
    API_CONFIG.ENDPOINTS.AUTH.REGISTER,
    data,
  );
};

export const refreshToken = async (): Promise<void> => {
  try {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      console.info('Нету токенов');
      handleHttpError(HttpStatusCode.UNAUTHORIZED);
      return;
    }
    await $api.get(API_CONFIG.ENDPOINTS.AUTH.REFRESH, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
    return;
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('Error with refresh token', {
      cause: err,
      context: {
        endpoint: API_CONFIG.ENDPOINTS.AUTH.REFRESH,
      },
    });
  }
};

export const checkToken = async (): Promise<void> =>
  await $api.get(API_CONFIG.ENDPOINTS.AUTH.CHECK);
