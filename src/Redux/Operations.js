import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../Api';

// First, create the thunk
export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchAllContacts',
  async (_, thunkAPI) => {
    try {
      const response = await fetchContacts();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContact',
  async (values, thunkAPI) => {
    try {
      const response = await addContact(values);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContact(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.mesaage);
    }
  }
);
