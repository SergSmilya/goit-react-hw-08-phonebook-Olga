import { configureStore } from '@reduxjs/toolkit';
import ContactsSlice from './Contacts/ContactsSlice';
import filterSlice from './FilterSlice';
import AuthSlice from './Auth/AuthSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice,
    filter: filterSlice,
    user: AuthSlice,
  },
});
