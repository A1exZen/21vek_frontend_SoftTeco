import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import { lazy } from 'react';

import MainLayout from '@/components/layouts/MainLayout';

import Home from '@pages/Home/Home';
const ErrorPage = lazy(() => import('@pages/Error'));
const Basket = lazy(() => import('@pages/Basket'));

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.BASKET, element: <Basket /> },
      { path: PATHS.NOT_FOUND, element: <ErrorPage /> },
      { path: PATHS.ALL, element: <ErrorPage /> },
    ],
  },
];
