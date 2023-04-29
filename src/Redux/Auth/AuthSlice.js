import { createSlice } from '@reduxjs/toolkit';
import { logInUser, logOutUser, signupUser } from './AuthOperations';

const initialState = {
  user: { name: '', email: '' },
  isLoggedIn: false,
  error: null,
  isRefreshing: false,
  token: null,
};

const authSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signupUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logInUser.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(logOutUser.fulfilled, state => {
        state.token = null;
        state.user = { name: '', email: '' };
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
