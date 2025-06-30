import { IProduct } from './types';
import Img1 from '@assets/images/phones/apple-black.jpg';

export const products: IProduct[] = [
  {
    idProduct: 1,
    nameProduct: 'Смартфон Samsung Galaxy A06 4GB/128GB (черный)',
    brand: 'Samsung',
    price: 16990,
    quantityInStock: 0,
    rating: 4.5,
    numberOfReviews: 56,
    status: 'в наличии',
    img: Img1,
    inCart: false,
    category: {
      idCategories: 1,
      nameCategories: 'смартфоны',
      url: 'smartphones',
    },
    characteristics: [
      {
        name: 'Основные характеристики',
        characteristics: [
          {
            name: 'тип',
            description: 'смартфон',
          },
          {
            name: 'год релиза',
            description: '2024',
          },
          {
            name: 'состояние',
            description: 'новый',
          },
          {
            name: 'диагональ экрана',
            description: '6.7',
          },
          {
            name: 'Кол-во SIM-карт',
            description: '2',
          },
          {
            name: 'Формат SIM-карты',
            description: 'Nano-SIM',
          },
        ],
      },
      {
        name: 'Операционная система',
        characteristics: [
          {
            name: 'Операционная система',
            description: 'Android',
          },
          {
            name: 'Версия',
            description: 'Android 14',
          },
        ],
      },
      {
        name: 'Экран',
        characteristics: [
          {
            name: 'Разрешение',
            description: '1600×720',
          },
          {
            name: 'Плотность пикселей',
            description: '262',
          },
          {
            name: 'Количество цветов',
            description: '16 миллионов',
          },
          {
            name: 'Защита от царапин',
            description: '-',
          },
        ],
      },
      {
        name: 'Процессор',
        characteristics: [
          {
            name: 'Платформа',
            description: 'MediaTek',
          },
          {
            name: 'Количество ядер',
            description: '8 (2+6)',
          },
          {
            name: 'Тактовая частота процессора',
            description: '2000 МГц',
          },
        ],
      },
      {
        name: 'Память',
        characteristics: [
          {
            name: 'Оперативная память',
            description: '4 Гб',
          },
          {
            name: 'Постоянная память',
            description: '128 Гб',
          },
        ],
      },
    ],
  },

  {
    idProduct: 2,
    nameProduct: 'Смартфон Apple iPhone 13 128GB (темная ночь)',
    brand: 'Apple',
    price: 15990,
    quantityInStock: 0,
    rating: 4.5,
    numberOfReviews: 56,
    img: Img1,
    inCart: false,
    category: {
      idCategories: 1,
      nameCategories: 'смартфоны',
      url: 'smartphones',
    },
    characteristics: [
      {
        name: 'Основные характеристики',
        characteristics: [
          {
            name: 'тип',
            description: 'смартфон',
          },
          {
            name: 'год релиза',
            description: '2021',
          },
          {
            name: 'состояние',
            description: '-',
          },
          {
            name: 'диагональ экрана',
            description: '6.1',
          },
          {
            name: 'Кол-во SIM-карт',
            description: '1',
          },
          {
            name: 'Формат SIM-карты',
            description: 'Nano-SIM, eSIM',
          },
        ],
      },
      {
        name: 'Операционная система',
        characteristics: [
          {
            name: 'Операционная система',
            description: 'Apple iOS',
          },
          {
            name: 'Версия',
            description: 'iOS 15',
          },
        ],
      },
      {
        name: 'Экран',
        characteristics: [
          {
            name: 'Разрешение',
            description: '2532×1170',
          },
          {
            name: 'Плотность пикселей',
            description: '460',
          },
          {
            name: 'Количество цветов',
            description: '16 миллионов',
          },
          {
            name: 'Защита от царапин',
            description: 'есть',
          },
        ],
      },
      {
        name: 'Процессор',
        characteristics: [
          {
            name: 'Платформа',
            description: 'Apple',
          },
          {
            name: 'Количество ядер',
            description: '6 (2+4)',
          },
          {
            name: 'Тактовая частота процессора',
            description: '3220 МГц',
          },
        ],
      },
      {
        name: 'Память',
        characteristics: [
          {
            name: 'Оперативная память',
            description: '4 Гб',
          },
          {
            name: 'Постоянная память',
            description: '128 Гб',
          },
        ],
      },
    ],
  },
  {
    idProduct: 3,
    nameProduct: 'Смартфон Samsung Galaxy A06 4GB/128GB (черный)',
    brand: 'Samsung',
    price: 15990,
    quantityInStock: 0,
    rating: 4.5,
    numberOfReviews: 56,
    img: Img1,
    inCart: false,
    category: {
      idCategories: 2,
      nameCategories: 'холодильники',
      url: 'fridge',
    },
    characteristics: [
      {
        name: 'Основные характеристики',
        characteristics: [
          {
            name: 'тип',
            description: 'смартфон',
          },
          {
            name: 'год релиза',
            description: '2024',
          },
          {
            name: 'состояние',
            description: 'новый',
          },
          {
            name: 'диагональ экрана',
            description: '6.56',
          },
          {
            name: 'Кол-во SIM-карт',
            description: '2',
          },
          {
            name: 'Формат SIM-карты',
            description: 'Nano-SIM',
          },
        ],
      },
      {
        name: 'Операционная система',
        characteristics: [
          {
            name: 'Операционная система',
            description: 'Android',
          },
          {
            name: 'Версия',
            description: 'Android 14',
          },
        ],
      },
      {
        name: 'Экран',
        characteristics: [
          {
            name: 'Разрешение',
            description: '1612×720',
          },
          {
            name: 'Плотность пикселей',
            description: '-',
          },
          {
            name: 'Количество цветов',
            description: '16,7 миллионов',
          },
          {
            name: 'Защита от царапин',
            description: '-',
          },
        ],
      },
      {
        name: 'Процессор',
        characteristics: [
          {
            name: 'Платформа',
            description: 'MediaTek',
          },
          {
            name: 'Тактовая частота процессора',
            description: '3220 МГц',
          },
          {
            name: 'Количество ядер',
            description: '8',
          },
        ],
      },
      {
        name: 'Память',
        characteristics: [
          {
            name: 'Оперативная память',
            description: '4 Гб',
          },
          {
            name: 'Постоянная память',
            description: '64 Гб',
          },
        ],
      },
    ],
  },
];
