import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import { lazy } from 'react';

import MainLayout from '@/components/layouts/MainLayout';

import Home from '@components/pages/Home/Home';
import { ProductComparison } from '@pages/ProductComparison';
const ErrorPage = lazy(() => import('@pages/Error'));

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.PRODUCT_COMPARISON, element: <ProductComparison /> },
      { path: PATHS.NOT_FOUND, element: <ErrorPage /> },
      { path: PATHS.ALL, element: <ErrorPage /> },
    ],
  },
];
