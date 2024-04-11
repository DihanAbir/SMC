import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const slice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setRestaurant } = slice.actions;

export default slice.reducer;
