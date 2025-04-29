import { useState, useEffect } from 'react';

export type Offer = {
  id: string;
  title: string;
  path: string;
};

export const useSpecialOffers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  
  useEffect(() => {
    // Api
    const mockOffers: Offer[] = [
      { id: '1', title: 'Уценка', path: '/discounts' },
      { id: '2', title: 'Розыгрыш квартиры', path: '/apartment-giveaway' },
      { id: '3', title: 'Кофе', path: '/coffee-promo' },
      { id: '4', title: 'Велосипеды', path: '/bikes' },
      { id: '5', title: 'Сделано в РБ', path: '/belarusian' },
      { id: '6', title: 'Ветаптека', path: '/vet' },
      { id: '7', title: 'Холодильники', path: '/fridges' },
      { id: '8', title: 'Телевизоры', path: '/tv' },
      { id: '9', title: 'Смартфоны', path: '/smartphones' },
      { id: '10', title: 'Пылесосы', path: '/vacuum' },
      { id: '11', title: 'Диваны', path: '/sofas' }
    ];
    
    setOffers(mockOffers);
  }, []);

  return { offers };
};