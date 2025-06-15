import { useMutation } from '@tanstack/react-query';
import { updateUser } from '@/api/user';
import type { UserUpdateResponse, UserUpdateRequest } from '@/models/user/api';
import { useAppDispatch } from './reduxHooks';
import { setUser } from '@/store/slices/auth.slice';
import { toast } from 'react-hot-toast';

export const useUpdateUser = () => {
  const dispatch = useAppDispatch();
  const update = useMutation({
    mutationFn: async (data: UserUpdateRequest) => await updateUser(data),
    onSuccess: (response: UserUpdateResponse) => dispatch(setUser(response)),
    onError: () => toast.error('Не удалось обновить данные'),
  });

  return { update };
};
