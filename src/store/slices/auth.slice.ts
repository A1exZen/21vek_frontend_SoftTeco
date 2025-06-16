import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserType } from '@/models/user/api';
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
      console.log('Redux', state.user);
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    remove: (state) => {
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
      state.user = null;
    },
    setTypeUser: (state, action: PayloadAction<UserType>) => {
      state.user!.typeUser = action.payload;
    },
  },
});

export const { setUser, remove, setLoading, setError, setTypeUser } =
  authSlice.actions;
export default authSlice.reducer;
