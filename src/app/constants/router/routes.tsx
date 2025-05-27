import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import { lazy } from 'react';

import MainLayout from '@/components/layouts/MainLayout';

import Home from '@components/pages/Home/Home';
const ErrorPage = lazy(() => import('@pages/Error/Error'));

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Home /> }],
  },
];
