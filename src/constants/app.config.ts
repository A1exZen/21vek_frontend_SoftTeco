export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000/',
  ENDPOINTS: {
    AUTH: {
      LOGIN: 'auth/login',
      REGISTER: 'auth/register',
      CHECK: 'auth/me',
      REFRESH: 'auth/refresh',
      LOGOUT: 'auth/logout',
    },
    CATEGORY:{
      GET_HEADER_CAT: 'categories/header-categories',
      GET_ALL: 'categories/all-cat',
      GET_BY_URL: 'categories/one-cat',
    },
    PRODUCTS: {
      GET_ALL: 'products/all-product',
      GET_BY_ID: 'products/one-product',
      GET_BRANDS: 'brand/all-brand',
      GET_PRICE_RANGE: 'products/price-range',
      SEARCH: 'products/search',
      FILTER: 'products/filter-product',
    },
  },
};
