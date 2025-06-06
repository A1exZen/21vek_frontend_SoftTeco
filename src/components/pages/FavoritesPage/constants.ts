import favoriteImg1 from '@/assets/images/sliderimg1.jpg';
import favoriteImg2 from '@/assets/images/sliderimg2.png';
import favoriteImg3 from '@/assets/images/sliderimg3.png';

export interface IFavoriteItem {
  id: number;
  name: string;
  code: string;
  price: number;
  rating: number;
  image: string;
  inCart: boolean;
}

export const FAVORITES_MOCK: IFavoriteItem[] = [
  {
    id: 1,
    name: 'Холодильник с морозильником ATLANT X 2401-100',
    code: '487.087',
    price: 540,
    rating: 4.2,
    image: favoriteImg1,
    inCart: false
  },
  {
    id: 2,
    name: 'Холодильник с морозильником ATLANT X 2401-100',
    code: '487.087',
    price: 540,
    rating: 4.2,
    image: favoriteImg2,
    inCart: false
  },
  {
    id: 3,
    name: 'Холодильник с морозильником ATLANT X 2401-100',
    code: '487.087',
    price: 540,
    rating: 4.2,
    image: favoriteImg3,
    inCart: false
  },
];