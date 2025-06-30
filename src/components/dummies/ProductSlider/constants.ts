import { PATHS } from '@/constants/path.config';
import sliderImg1 from '@/assets/images/sliderimg1.jpg';
import sliderImg2 from '@/assets/images/sliderimg2.png';
import sliderImg3 from '@/assets/images/sliderimg3.png';
import sliderImg4 from '@/assets/images/sliderimg4.png';

interface ISlide {
  id: number;
  path: string;
  img: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  target?: '_blank' | '_self';
}

export const SLIDES: ISlide[] = [
  { 
    id: 1, 
    path: PATHS.PRODUCTS,
    img: sliderImg1,
    alt: 'Скидки' 
  },
  { 
    id: 2, 
    path: PATHS.PRODUCTS, 
    img: sliderImg2,
    alt: 'Новинки' 
  },
  { 
    id: 3, 
    path: PATHS.PRODUCTS,
    img: sliderImg3,
    alt: 'Скидки' 
  },
  { 
    id: 4, 
    path: PATHS.PROFILE,
    img: sliderImg4,
    alt: 'Продукты' 
  },
];