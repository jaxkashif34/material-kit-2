import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 10,
};

export const presentation = createSlice({
  name: 'presentation',
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = presentation.actions;

export default presentation.reducer;
