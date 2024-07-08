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
      // if (state.Selection.length>0){
      //     state.Selection.splice(0,state.Selection.length);
      // }else{state.Selection.push(action.payload)}
    },clearCount: (state) => {
      state.Selection = [];
    },
  },
});

export const { addCount,clearCount } = addCountry.actions;

export default addCountry.reducer;
