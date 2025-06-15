import { useQuery } from '@tanstack/react-query';
import { QueryKeys } from '@/constants';
import { me } from '@/api/auth';
import { useAppDispatch } from './reduxHooks';
import { setUser } from '@/store/slices/auth.slice';
import { User } from '@/models/user/api';

export const useAuthCheck = () => {
  const dispatch = useAppDispatch();

  const { data: user, isSuccess } = useQuery<User>({
    queryKey: [QueryKeys.CHECK_AUTH],
    queryFn: async () => await me(),
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  if (isSuccess) {
    dispatch(setUser(user));
  }
};
