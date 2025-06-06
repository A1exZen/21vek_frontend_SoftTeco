export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000/',
  ENDPOINTS: {
    AUTH: {
      LOGIN: 'auth/login',
      REGISTER: 'auth/register',
      CHECK: 'auth/check',
      REFRESH: 'auth/refresh',
      LOGOUT: 'auth/logout',
    },
    CATEGORY:{
      GET_HEADER_CAT: 'categories/headercategories',
      GET_ALL: 'categories/all-cat',
    },
    PRODUCTS: {
      GET_ALL: '/products',
      GET_BY_ID: '/products',
      GET_BRANDS: '/products/brands',
      GET_PRICE_RANGE: '/products/price-range',
      SEARCH: '/products/search'
    },
  },
};
