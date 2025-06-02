import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@/models/user/api';
import Cookies from 'js-cookie';

type AuthState = {
  user: User | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    remove: (state) => {
      Cookies.remove('accessToken');
      Cookies.remove('refreshToken');
      state.user = null;
    },
  },
});

export const { setUser, remove, setLoading, setError } = authSlice.actions;
export default authSlice.reducer;
