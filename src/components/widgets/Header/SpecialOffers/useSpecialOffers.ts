import { useQuery } from '@tanstack/react-query';
import { PATHS } from '@/constants/path.config';

export type OfferType = {
  id: string;
  title: string;
  path: `${PATHS}`;
};

const fetchSpecialOffers = async (): Promise<OfferType[]> => {
  return [
    { id: '1', title: 'Уценка', path: PATHS.DISCOUNTS },
    { id: '2', title: 'Розыгрыш квартиры', path: PATHS.APARTMENT },
    { id: '3', title: 'Кофе', path: PATHS.COFFEE },
    { id: '4', title: 'Велосипеды', path: PATHS.BIKES },
    { id: '5', title: 'Сделано в РБ', path: PATHS.BELARUSIAN },
    { id: '6', title: 'Ветаптека', path: PATHS.VET },
    { id: '7', title: 'Холодильники', path: PATHS.FRIDGES },
    { id: '8', title: 'Телевизоры', path: PATHS.TV },
    { id: '9', title: 'Смартфоны', path: PATHS.SMARTPHONES },
    { id: '10', title: 'Пылесосы', path: PATHS.VACUUM },
    { id: '11', title: 'Диваны', path: PATHS.SOFAS }
  ];
};

export const useSpecialOffers = () => {
  const { data, isLoading, error } = useQuery<OfferType[]>({
    queryKey: ['specialOffers'],
    queryFn: fetchSpecialOffers,
    staleTime: 5 * 60 * 1000,
  });

  return { 
    offers: data || [], 
    isLoading, 
    error 
  };
};