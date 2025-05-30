import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import { lazy } from 'react';

import MainLayout from '@/components/layouts/MainLayout';

import Home from '@components/pages/Home/Home';
const ErrorPage = lazy(() => import('@pages/Error/Error'));
import { CategoryPage } from '@pages/CaterogyPage';
import { ProductPage } from '@pages/ProductPage/ProductPage.tsx';

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/category/:categoryUrl', element: <CategoryPage /> },
      { path: '/category/:categoryId/product/:productId', element: <ProductPage /> },
    ],
  },
];
