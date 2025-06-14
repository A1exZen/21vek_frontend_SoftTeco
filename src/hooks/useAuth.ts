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

export const useRegister = () => {
  return useMutation({
    mutationFn: async (data: RegisterRequest): Promise<void> =>
      await register(data),
    onSuccess: () => {
      toast.success("Регистрация прошла успешно! Пожалуйста, войдите.");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (data: LoginRequest): Promise<LoginResponse> => await login(data),
    onSuccess: (data) => {
      toast.success(`Добро пожаловать!`);
      dispatch(setUser(data));
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// export const useAuthCheck = () => {
//   useQuery({
//     queryKey: [QueryKeys.CHECK_AUTH],
//     queryFn: async (): Promise<void> => {
//       try {
//         await $api.get(API_CONFIG.ENDPOINTS.AUTH.CHECK);
//       } catch (error: AxiosError) {
//         toast.error("Вы не авторизированы!");
//       }
//     },
//     retry: false,
//   });
// };


export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (): Promise<void> => await logout(),
    onSuccess: () => {
      dispatch(remove());
      toast.success("Вы успешно вышли из системы.");
      navigate("/");
    },
    onError: (error: Error) => {
      toast.error("Ошибка при выходе: " + error.message);
    },
  });
};
