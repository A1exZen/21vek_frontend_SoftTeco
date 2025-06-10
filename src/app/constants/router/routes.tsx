import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import { lazy } from 'react';

import MainLayout from '@/components/layouts/MainLayout';

import Home from '@components/pages/Home/Home';
import { CategoryPage } from '@pages/CaterogyPage';
import { ProductPage } from '@pages/ProductPage/ProductPage.tsx';

const ErrorPage = lazy(() => import('@pages/Error'));
const Profile = lazy(() => import('@pages/Profile'));

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/:categoryUrl',
        element: <CategoryPage />,
        children: [{ path: ':productId', element: <ProductPage /> }],
      },
      {
        path: PATHS.PROFILE,
        element: <Profile />,
      },
      { path: PATHS.NOT_FOUND, element: <ErrorPage /> },
      { path: PATHS.ALL, element: <ErrorPage /> },
    ],
  },
];
