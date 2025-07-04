import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from './slices/auth.slice';
import basketReducer from './slices/basket.slice';
import checkoutReducer from './slices/checkout.slice';

const rootReducer = combineReducers({
  auth: authReducer,
  basket: basketReducer,
  checkout: checkoutReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
