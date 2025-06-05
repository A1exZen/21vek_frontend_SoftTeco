// hooks/useAuthModal.ts
import { useSearchParams } from 'react-router-dom';
import { useCallback } from 'react';

export const useAuthModal = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const authType = searchParams.get('auth');
  const isVisible = authType === 'login' || authType === 'register';
  const isLogin = authType === 'login';
  const isRegister = authType === 'register';

  const openLogin = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('auth', 'login');
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);

  const openRegister = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('auth', 'register');
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);

  const closeAuth = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('auth');
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams]);

  const toggleMode = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('auth', isLogin ? 'register' : 'login');
    setSearchParams(newSearchParams);
  }, [searchParams, setSearchParams, isLogin]);

  return {
    authType,
    isVisible,
    isLogin,
    isRegister,
    openLogin,
    openRegister,
    closeAuth,
    toggleMode,
  };
};