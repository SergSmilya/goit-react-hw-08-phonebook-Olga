import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signupUsers,
  setToken,
  logInUsers,
  logOutUsers,
  unSetToken,
  refreshUsers,
} from '../../Api';

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async (values, thunkAPI) => {
    try {
      const { data } = await signupUsers(values);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.user.token;

      if (token === null) {
        return thunkAPI.rejectWithValue();
      }
      setToken(token);
      const { data } = await refreshUsers();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
