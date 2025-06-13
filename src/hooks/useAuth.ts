import { login, logout, register } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from '@models/auth/api.ts';
import { remove, setUser } from '@/store/slices/auth.slice';
import { useAppDispatch } from '@/hooks/reduxHooks';
import { useNavigate } from 'react-router-dom';
import { User } from '@/models/user/api';

export const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const registerMutation = useMutation({
    mutationFn: async (data: RegisterRequest): Promise<void> =>
      await register(data),
    onSuccess: () => {
      toast.success('Регистрация прошла успешно! Пожалуйста, войдите.');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginRequest): Promise<LoginResponse> =>
      await login(data),
    onSuccess: (data: User) => {
      console.log(data);

      toast.success(`Добро пожаловать!`);
      dispatch(setUser(data));
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  const logoutMutation = useMutation({
    mutationFn: async (): Promise<void> => await logout(),
    onSuccess: () => {
      dispatch(remove());
      toast.success('Вы успешно вышли из системы.');
      navigate('/');
    },
    onError: (error: Error) => {
      toast.error('Ошибка при выходе: ' + error.message);
    },
  });

  return { registerMutation, loginMutation, logoutMutation };
};
