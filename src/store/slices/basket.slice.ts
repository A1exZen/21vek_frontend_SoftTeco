import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketItemType } from '@/types/BasketItemType.ts';
import { basketItems } from '@pages/Basket/constants.ts';

interface InitialState {
  basketItems: BasketItemType[];
}

const initialState: InitialState = {
  basketItems: basketItems,
};

const basketSlice = createSlice({
  name: 'basketSlice',
  initialState,
  reducers: {
    setBasketItems: (state, action: PayloadAction<BasketItemType[]>) => {
      state.basketItems = action.payload;
    },
  },
});

export const { setBasketItems } = basketSlice.actions;
export default basketSlice.reducer;
