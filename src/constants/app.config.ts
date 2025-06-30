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
      ME: 'auth/me'
    },
    CATEGORY: {
      GET_HEADER_CAT: 'categories/header-categories',
      GET_ALL: 'categories/all-cat',
      GET_BY_URL: 'categories/one-cat',
    },
    COMPARISON: {
      USER_CAT_COMPARISON: 'categories/user-cat-comparison',
      USER_CAT_PRODS_COMPARISON: 'categories/user-cat-prods-comparison',
      CAT_COMPARISON: 'categories/cat-comparison',
      DEL_PROD_COMPARISON: 'categories/del-prod-comparison',
      DEL_CAT_COMPARISON: 'categories/del-cat-comparison',
    },
    USER: {
      UPDATE: 'user/profile/update',
      ADD_ADDRESS: 'user/profile/address/add',
      DELETE_ADDRESS: 'user/profile/address',
      CHANGE_ADDRESS: '/user/profile/address',
      GET_ADDRESSES: 'user/profile/addresses',
      ACTIONS: 'user/actions'
    },
    PRODUCTS: {
      GET_ALL: 'products/all-product',
      GET_BY_ID: 'products/one-product',
      GET_BRANDS: 'brand/all-brand',
      GET_PRICE_RANGE: 'products/price-range',
      SEARCH: 'products/serch',
      FILTER: 'products/filter-product'
    },
    USER_ACTIONS: {
      ACTIONS: '/user/actions'
    },
    BASKET: {
      GET_ALL: 'basket/all-product-bask',
      ADD_ITEM: 'basket/basket-prod',
      DELETE_ITEM: 'basket/del-basket-prod',
      EDIT_QUANTITY: 'basket/redact-product-bask'
    },
    CHECKOUT: {
      PLACE_ORDER: 'checkout',
      GET_ORDERS: 'orders'
    }
  }
};

console.log(
  `%cТекущий App Mode: ${import.meta.env.MODE}`,
  'color: white; font-weight: 900;'
);
console.info(
  `%cAPI Base URL: ${API_CONFIG.BASE_URL}`,
  'color: white; font-weight: 900;'
);
