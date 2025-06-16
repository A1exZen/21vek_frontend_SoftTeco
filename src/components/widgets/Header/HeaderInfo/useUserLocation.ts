import axios from 'axios';
import { QueryKeys } from '@/constants/queryKeys';
import { useQuery } from '@tanstack/react-query';

interface ICityData {
  city: string;
}

export const useUserLocation = () => {
  return useQuery<ICityData>({
    queryKey: [QueryKeys.USER_CITY],
    queryFn: async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        return response.data;
      } catch (error) {
        throw new Error(`Ошибка определения города: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    },
    staleTime: 1000 * 60 * 60,
    retry: 1,
  });
};