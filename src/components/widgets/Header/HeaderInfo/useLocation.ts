import { useQuery } from '@tanstack/react-query';

interface ICityData {
  city: string;
}

export const useLocation = () => {
  return useQuery<ICityData>({
    queryKey: ['userCity'],
    queryFn: async () => {
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) throw new Error('Ошибка определения города');
      return response.json();
    },
    staleTime: 1000 * 60 * 60,
    retry: 2,
  });
};