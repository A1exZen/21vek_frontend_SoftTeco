export const API_CONFIG = {
  BASE_URL: 'http://178.120.81.153:8000/',
  ENDPOINTS: {
    AUTH: {
      LOGIN: 'auth/login',
      REGISTER: 'auth/register',
      CHECK: 'auth/check',
      REFRESH: 'auth/refresh',
      LOGOUT: 'auth/logout',
    },
    CATEGORY: {
      GET_HEADER_CAT: 'categories/headercategories',
      GET_ALL: 'categories/all-cat',
    },
    USER: {
      UPDATE: 'user/profile/update',
      ADD_ADDRESS: 'user/add-address',
      DELETE_ADDRESS: 'user/delete-address',
      CHANGE_ADDRESS: 'user/change-address',
      GET_ADDRESSES: '',
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
