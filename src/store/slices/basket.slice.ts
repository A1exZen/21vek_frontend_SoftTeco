import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketItemType } from '@models/basket/api';

interface InitialState {
  basketItems: BasketItemType[];
  isModalOpen: boolean;
  isDrawerOpen: boolean;
}

const initialState: InitialState = {
  basketItems: [],
  isModalOpen: false,
  isDrawerOpen: false,
};

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    setBasketItems: (state, action: PayloadAction<BasketItemType[]>) => {
      state.basketItems = action.payload;
    },
    setBasketItem: (state, action: PayloadAction<BasketItemType>) => {
      state.basketItems.push(action.payload);
    },
    removeBasketItem: (state, action: PayloadAction<BasketItemType>) => {
      state.basketItems.splice(state.basketItems.indexOf(action.payload), 1);
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const {
  setBasketItems,
  setBasketItem,
  removeBasketItem,
  setModalOpen,
  setDrawerOpen,
} = basketSlice.actions;
export default basketSlice.reducer;
