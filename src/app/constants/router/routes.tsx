import { RouteObject } from 'react-router-dom';

import { PATHS } from '@constants/path.config';

import { lazy } from 'react';

import MainLayout from '@/components/layouts/MainLayout';

import Home from '@components/pages/Home/Home';
// import { ProductComparison } from '@/components/pages/ProductComparison';
import { ProductComparisonData } from '@/components/pages/ProductComparison/ProductComparisonData/ProductComparisonData';

import FavoritesPage from '@/components/pages/FavoritesPage/FavoritesPage';
import { CategoryPage } from '@pages/CaterogyPage';
import { ProductPage } from '@pages/ProductPage/ProductPage.tsx';
import { AllProductsPage } from '@pages/AllProductsPage';
import { ViewHistory } from '@pages/ViewHistory';
import { AccountLayout } from '@layouts/AccountLayout';
import { ProductComparison } from '@pages/ProductComparison';
import BusinessPage from '@pages/BusinessPage';
import { OrderHistory } from '@pages/OrderHistory/OrderHistory.tsx';

const ErrorPage = lazy(() => import('@pages/Error'));
const Profile = lazy(() => import('@pages/Profile'));
const Basket = lazy(() => import('@pages/Basket'));

export const routes: RouteObject[] = [
  {
    path: PATHS.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: PATHS.PRODUCTS, element: <AllProductsPage /> },
      { path: PATHS.BUSINESS, element: <BusinessPage /> },
      { path: PATHS.BASKET, element: <Basket /> },
      {
        element: <AccountLayout />,
        children: [
          { path: PATHS.ORDER_HISTORY, element: <OrderHistory /> },
          { path: PATHS.VIEW_HISTORY, element: <ViewHistory /> },
          { path: PATHS.PROFILE, element: <Profile /> },
          { path: PATHS.COMPARE, element: <ProductComparison />},
          { path: PATHS.PRODUCT_COMPARISON_DATA, element: <ProductComparisonData/>},
          { path: PATHS.FAVORITES, element: <FavoritesPage /> },
        ],
      },
      { path: PATHS.NOT_FOUND, element: <ErrorPage /> },
      { path: PATHS.ALL, element: <ErrorPage /> },
      {
        path: '/:categoryUrl',
        element: <CategoryPage />,
        children: [{ path: ':productId', element: <ProductPage /> }],
      },
      {
        path: '/product/:idProduct',
        element: <ProductPage />,
      },
      { path: PATHS.NOT_FOUND, element: <ErrorPage /> },
      { path: PATHS.ALL, element: <ErrorPage /> },
    ],
  },
];
