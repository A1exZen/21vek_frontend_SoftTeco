export const API_CONFIG = {
  BASE_URL: import.meta.env.PROD
    ? import.meta.env.VITE_API_PROD_BASE_URL
    : import.meta.env.VITE_API_DEV_BASE_URL,
  ENDPOINTS: {
    AUTH: {
      LOGIN: 'auth/login',
      REGISTER: 'auth/register',
      CHECK: 'auth/check',
      REFRESH: 'auth/refresh',
      LOGOUT: 'auth/logout',
    },
    CATEGORY: {
      GET_HEADER_CAT: 'categories/header-categories',
      GET_ALL: 'categories/all-cat',
    },
    PRODUCTS: {
      GET_ALL: '/products',
      GET_BY_ID: '/products',
      GET_BRANDS: '/products/brands',
      GET_PRICE_RANGE: '/products/price-range',
      SEARCH: '/products/search',
    },
  },
};

if (!import.meta.env.PROD) {
  console.log('Текущий App Mode:', import.meta.env.MODE);
  console.log('API Base URL:', API_CONFIG.BASE_URL);
}
