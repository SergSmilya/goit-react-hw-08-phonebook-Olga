import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  REGISTER,
  PURGE,
  PERSIST,
  PAUSE,
  REHYDRATE,
  FLUSH,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import ContactsReducer from './Contacts/ContactsSlice';
import filterReducer from './Filter/FilterSlice';
import AuthReducer from './Auth/AuthSlice';

const authPersistConfig = {
  key: 'user',
  storage: storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts: ContactsReducer,
    filter: filterReducer,
    user: persistReducer(authPersistConfig, AuthReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
