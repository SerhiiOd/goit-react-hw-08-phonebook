import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsAPI';
import contactsSlice from './contactsSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: contactsSlice,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
