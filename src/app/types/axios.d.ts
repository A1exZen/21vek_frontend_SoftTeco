import 'axios';

declare module 'axios' {
  export interface AxiosRequestConfig {
    _isRetry?: boolean;
    _isRefreshRequest?: boolean;
  }
  export interface InternalAxiosRequestConfig {
    _isRetry?: boolean;
    _isRefreshRequest?: boolean;
  }
}
