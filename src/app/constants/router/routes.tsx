import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import MainLayout from '@/components/layouts/MainLayout';
import Home from '@pages/Home/Home';
import { Basket } from '@pages/Basket';

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.BASKET, element: <Basket /> },
    ],
  },
];
