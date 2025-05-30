export const API_CONFIG = {
  BASE_URL: 'http://localhost:8000/',
  ENDPOINTS: {
    AUTH: {
      LOGIN: 'auth/login',
      REGISTER: 'auth/register',
      CHECK: 'auth/check',
      REFRESH: 'auth/refresh',
    },
    CATEGORY:{
      GET_HEADER_CAT: 'categories/headercategories',
      GET_ALL: 'categories/all-cat',
    }
  },
};
