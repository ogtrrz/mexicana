import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import addSearch from "../features/hero/hotelSearchSlice";

export const store = configureStore({
    reducer: {
        hero: findPlaceSlice,
        hotel: addSearch
    },
});

//features/hero/findPlaceSlice.js aqui estan los datos
