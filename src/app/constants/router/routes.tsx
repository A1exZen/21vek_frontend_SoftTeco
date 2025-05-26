import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import MainLayout from '@/components/layouts/MainLayout';
import Home from '@components/pages/Home/Home';
import { CategoryPage } from '@pages/CaterogyPage';
import { ProductPage } from '@pages/ProductPage/ProductPage.tsx';

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: '/category/:categoryId', element: <CategoryPage /> },
      { path: '/category/:categoryId/product/:productId', element: <ProductPage /> },
    ],
  },
];
