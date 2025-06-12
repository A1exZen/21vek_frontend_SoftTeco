export const API_CONFIG = {
  BASE_URL: import.meta.env.PROD
    ? import.meta.env.VITE_API_PROD_BASE_URL
    : import.meta.env.VITE_API_DEV_BASE_URL,
  ENDPOINTS: {
    AUTH: {
      LOGIN: 'auth/login',
      REGISTER: 'auth/register',
      CHECK: 'auth/check-token',
      REFRESH: 'auth/refresh',
      LOGOUT: 'auth/logout',
      ME: 'auth/me',
    },
    CATEGORY: {
      GET_HEADER_CAT: 'categories/header-categories',
      GET_ALL: 'categories/all-cat',
    },
    USER: {
      UPDATE: 'user/profile/update',
      ADD_ADDRESS: 'user/profile/address/add',
      DELETE_ADDRESS: 'user/address/delete-address/',
      CHANGE_ADDRESS: 'user/profile/address/change-address/',
      GET_ADDRESSES: '',
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

console.log(
  `%cТекущий App Mode: ${import.meta.env.MODE}`,
  'color: white; font-weight: 900;',
);
console.info(
  `%cAPI Base URL: ${API_CONFIG.BASE_URL}`,
  'color: white; font-weight: 900;',
);
