import { useState, useCallback } from 'react';

type AuthMode = 'login' | 'register';

export const useAuthModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mode, setMode] = useState<AuthMode>('login');

  const openLogin = useCallback(() => {
    setMode('login');
    setIsVisible(true);
  }, []);

  const openRegister = useCallback(() => {
    setMode('register');
    setIsVisible(true);
  }, []);

  const closeAuth = useCallback(() => {
    setIsVisible(false);
  }, []);

  const toggleMode = useCallback(() => {
    setMode(prev => prev === 'login' ? 'register' : 'login');
  }, []);

  return {
    isVisible,
    isLogin: mode === 'login',
    isRegister: mode === 'register',
    openLogin,
    openRegister,
    closeAuth,
    toggleMode,
  };
};