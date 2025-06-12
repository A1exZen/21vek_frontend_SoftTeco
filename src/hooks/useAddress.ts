import { addAddress, changeAddress, deleteAddress } from '@/api/user';
import queryClient from '@/app/constants/queryClient';
import { QueryKeys } from '@/constants';
import { AddressRequest } from '@/models/user/api';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';

export const useAddress = () => {
  const addAddressMutation = useMutation({
    mutationFn: (data: AddressRequest) => addAddress(data),
    onSuccess: () => toast.success('Адрес добавлен'),
    onError: () => toast.error('Адрес не удалось добавить'),
  });

  const changeAddressMutation = useMutation({
    mutationFn: async (data: AddressRequest) => {
      console.log('data in mut', data);
      await changeAddress(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_ADDRESSES] });
      toast.success('Адрес изменен');
    },
    onError: () => toast.error('Адрес не удалось изменить'),
  });

  const deleteAddressMutation = useMutation({
    mutationFn: (id: number) => deleteAddress(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.GET_ADDRESSES] });
      toast.success('Адрес удален');
    },
    onError: () => toast.error('Адрес не удалось удалить'),
  });

  return { addAddressMutation, changeAddressMutation, deleteAddressMutation };
};
