import { configureStore } from '@reduxjs/toolkit';
import ContactsSlice from './ContactsSlice';
import filterSlice from './FilterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice,
    filter: filterSlice,
  },
});
