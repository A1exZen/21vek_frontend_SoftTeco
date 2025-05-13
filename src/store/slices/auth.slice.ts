import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/models/user/api';
import Cookies from 'js-cookie';

type AuthState = {
  user: User | null;
  loading: boolean;
  error: boolean;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    remove: (state) => {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      state.user = null;
    },
  },
});

export const { set, remove } = authSlice.actions;
export default authSlice.reducer;
