import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupUsers,
  setToken,
  logInUsers,
  logOutUsers,
  unSetToken,
} from '../../Api';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (values, thunkAPI) => {
    try {
      const { data } = await signupUsers(values);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/logInUser',
  async (values, thunkAPI) => {
    try {
      const { data } = await logInUsers(values);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async thunkAPI => {
    try {
      const { data } = await logOutUsers();
      unSetToken();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);
