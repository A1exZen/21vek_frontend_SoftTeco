import { $api } from '@/app/config/axios/api';
import { API_CONFIG } from '@/constants';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from '@/models/auth/api';
import { BaseError, ensureError } from '@utils/ErrorHandler';
import { UserResponse } from '@/models/user/api';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  try {
    return await $api.post<LoginResponse, LoginResponse, LoginRequest>(
      API_CONFIG.ENDPOINTS.AUTH.LOGIN,
      data,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('Login failed', { cause: err });
  }
};

export const register = async (data: RegisterRequest): Promise<void> => {
  try {
    await $api.post<void, void, RegisterRequest>(
      API_CONFIG.ENDPOINTS.AUTH.REGISTER,
      data,
    );
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('Registration failed', { cause: err });
  }
};

export const refreshToken = async (): Promise<void> => {
  try {
    if (!refreshToken) return;
    await $api.get(API_CONFIG.ENDPOINTS.AUTH.REFRESH, {
      _isRefreshRequest: true,
    });
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

export const checkToken = async (): Promise<void> => {
  try {
    await $api.get(API_CONFIG.ENDPOINTS.AUTH.CHECK);
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('Token check failed', { cause: err });
  }
};

export const logout = async (): Promise<void> => {
  await $api.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT);
};

export const me = async (): Promise<UserResponse> => {
  try {
    return await $api.get(API_CONFIG.ENDPOINTS.AUTH.ME);
  } catch (error) {
    const err = ensureError(error);
    throw new BaseError('me failed', { cause: err });
  }
};
