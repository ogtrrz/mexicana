import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: {},
  date: {},
  guest: {},
};

export const addSearch = createSlice({
  name: "hotel-serch-detail",
  initialState,
  reducers: {
    addSearchDetail: (state, { payload }) => {
      if("location" in payload) {
        state.location = payload;  
      }
      if("date" in payload) {
        state.date = payload;  
      }
      if("guest" in payload) {
        state.guest = payload;  
      }
    },
  },
});

export const { addSearchDetail } = addSearch.actions;
export default addSearch.reducer;
