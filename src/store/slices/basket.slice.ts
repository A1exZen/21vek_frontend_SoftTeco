import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketItemType } from '@/types/BasketItemType.ts';
import { basketItems } from '@pages/Basket/constants.ts';

interface InitialState {
  basketItems: BasketItemType[];
  isModalOpen: boolean;
  isDrawerOpen: boolean;
}

const initialState: InitialState = {
  basketItems: basketItems,
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
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },
    setDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { setBasketItems, setModalOpen, setDrawerOpen } =
  basketSlice.actions;
export default basketSlice.reducer;
