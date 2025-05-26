import React from 'react';

export interface Category {
  id: string;
  name: string;
  icon?: React.ReactNode;
  image?: string;
  subcategories?: Category[];
}

export const productCategories: Category[] = [
  {
    id: '1',
    name: 'Бытовая техника',
    icon: '',
    subcategories: [
      {
        id: '2',
        name: 'Крупная техника для кухни',
        subcategories: [
          { id: '3', name: 'Холодильники' },
          { id: '4', name: 'Витрины' },
          { id: '5', name: 'Кухонные плиты' },
          { id: '6', name: 'Морозильные лари' },
          { id: '7', name: 'Посудомоечные машины' },
          { id: '8', name: 'Винные шкафы' },
        ],
      },
      {
        id: '9',
        name: 'Техника для ухода за одеждой',
        subcategories: [
          { id: '10', name: 'Стиральные машины' },
          { id: '11', name: 'Утюги' },
          { id: '12', name: 'Отпариватели' },
          { id: '13', name: 'Швейные, вышивальные машины' },
          { id: '14', name: 'Промышленные швейные машины' },
          { id: '15', name: 'Оверлоки' },
        ],
      },
      {
        id: '16',
        name: 'Встраиваемая техника, оборудование',
        subcategories: [
          { id: '17', name: 'Варочные панели' },
          { id: '18', name: 'Духовые шкафы' },
          { id: '19', name: 'Комплекты встраиваемой техники' },
          { id: '20', name: 'Микроволновые печи встраиваемые' },
          { id: '21', name: 'Комплекты встраиваемой техники' },
        ],
      },
      {
        id: '22',
        name: 'Климатическая техника',
        subcategories: [
          { id: '23', name: 'Кондиционеры, сплит-системы' },
          { id: '24', name: 'Очистители воздуха' },
          { id: '25', name: 'Водоочистители' },
          { id: '26', name: 'Увлажнители, очистители воздуха' },
          { id: '27', name: 'Камины, печи' },
          { id: '28', name: 'Обогреватели' },
        ],
      },
      {
        id: '29',
        name: 'Техника для дома',
        subcategories: [
          { id: '30', name: 'Пылесосы', icon: '' },
          { id: '31', name: 'Вентиляторы, очистители воздуха' },
          { id: '32', name: 'Камины, печи' },
          { id: '33', name: 'Обогреватели' },
        ],
      },
    ],
  },
  {
    id: '34',
    name: 'Смартфоны, ТВ и электроника',
    icon: '',
    subcategories: [
      {
        id: '35',
        name: 'Смартфоны',
        subcategories: [
          { id: '36', name: 'Apple' },
          { id: '37', name: 'Samsung' },
          { id: '38', name: 'Xiaomi' },
        ],
      },
      {
        id: '39',
        name: 'Телевизоры',
        subcategories: [
          { id: '40', name: 'LED-телевизоры' },
          { id: '41', name: 'QLED-телевизоры' },
        ],
      },
    ],
  },
  {
    id: '42',
    name: 'Компьютеры и периферия',
    icon: '',
    subcategories: [
      {
        id: '43',
        name: 'Комплекты встраиваемой техники',
        subcategories: [
          { id: '44', name: 'Комплекты встраиваемой техники' },
          { id: '45', name: 'Посмотреть всё' },
        ],
      },
    ],
  },
  {
    id: '46',
    name: 'Товары для дома',
    icon: '',
    subcategories: [
      {
        id: '47',
        name: 'Пылесосы',
        subcategories: [{ id: '48', name: 'Пылесосы' }],
      },
    ],
  },
  {
    id: '49',
    name: 'Сантехника и ванная',
    icon: '',
    subcategories: [],
  },
  {
    id: '50',
    name: 'Строительство',
    icon: '',
    subcategories: [],
  },
  {
    id: '51',
    name: 'Ремонт и инструменты',
    icon: '',
    subcategories: [],
  },
  {
    id: '52',
    name: 'Дом и сад',
    icon: '',
    subcategories: [],
  },
  {
    id: '53',
    name: 'Авто и мото',
    icon: '',
    subcategories: [],
  },
  {
    id: '54',
    name: 'Игрушки, товары для детей',
    icon: '',
    subcategories: [],
  },
  {
    id: '55',
    name: 'Красота и стиль',
    icon: '',
    subcategories: [],
  },
  {
    id: '56',
    name: 'Здоровье',
    icon: '',
    subcategories: [],
  },
  {
    id: '57',
    name: 'Спорт',
    icon: '',
    subcategories: [],
  },
  {
    id: '58',
    name: 'Туризм, активный отдых',
    icon: '',
    subcategories: [],
  },
  {
    id: '59',
    name: 'Товары для бизнеса, HoReCa',
    icon: '',
    subcategories: [],
  },
  {
    id: '60',
    name: 'Дача и хозтовары',
    icon: '',
    subcategories: [],
  },
  {
    id: '61',
    name: 'Одежда и обувь',
    icon: '',
    subcategories: [],
  },
  {
    id: '62',
    name: 'Обувные украшения',
    icon: '',
    subcategories: [],
  },
  {
    id: '63',
    name: 'Товары для взрослых',
    icon: '',
    subcategories: [],
  },
];