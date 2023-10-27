import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Hotel", icon: "icon-bed" },
    { id: 7, name: "Vuelos", icon: "icon-tickets" },
    { id: 5, name: "Autos", icon: "icon-car" },
    // { id: 2, name: "Excursión", icon: "icon-destination" },
    // { id: 3, name: "Actividades", icon: "icon-ski" },
    // { id: 4, name: "Alquiler de vacaciones", icon: "icon-home" },
    // { id: 6, name: "Cruceros", icon: "icon-yatch" },
  ],
  currentTab: "Hotel",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
