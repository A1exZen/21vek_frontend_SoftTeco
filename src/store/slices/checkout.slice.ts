import { deliveryAddresses } from '@pages/CheckoutPage/DeliveryPointDrawer/constants.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  basketItems: number[];
  comment: string;
  address: string;
}

const initialState: InitialState = {
  basketItems: [],
  comment: '',
  address: deliveryAddresses[0].value,
};

const checkoutSlice = createSlice({
  name: 'checkoutSlice',
  initialState,
  reducers: {
    setBasketItems: (state, action: PayloadAction<number[]>) => {
      state.basketItems = action.payload;
      console.log(state.basketItems);
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setBasketItems, setComment, setAddress } = checkoutSlice.actions;
export default checkoutSlice.reducer;
