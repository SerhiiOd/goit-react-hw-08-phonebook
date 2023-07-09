import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const getFilter = state => state.filter;

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
