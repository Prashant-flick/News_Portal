import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";

const store = configureStore({
    reducer: {
        favouriteReducer
    }
})

export default store