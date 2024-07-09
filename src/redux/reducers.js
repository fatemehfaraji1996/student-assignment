import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Selection: [],
};

export const addCountry = createSlice({
  name: "countryReducer",
  initialState,
  reducers: {
    addCount: (state, action) => {
      state.Selection.push(action.payload);
    },clearCount: (state) => {
      state.Selection = [];
    },toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    }
  },
});

export const { addCount,clearCount,toggleTheme } = addCountry.actions;

export default addCountry.reducer;
