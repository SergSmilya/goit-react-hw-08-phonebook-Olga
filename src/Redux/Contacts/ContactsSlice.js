import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  fetchAllContacts,
  addContacts,
  deleteContacts,
} from '../Contacts/ContactsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
};
const thunkArr = [fetchAllContacts, addContacts, deleteContacts];
function thunkMapping(status) {
  return thunkArr.map(el => el[status]);
}

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.error = action.payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchAllContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addMatcher(isAnyOf(...thunkMapping(STATUS.FULFILLED)), handleFulfilled)
      .addMatcher(isAnyOf(...thunkMapping(STATUS.REJECTED)), handleRejected)
      .addMatcher(isAnyOf(...thunkMapping(STATUS.PENDING)), handlePending);
  },
});

export default contactsSlice.reducer;
