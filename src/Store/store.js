import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice";
import CurrentArticleReducer from "./CurrentArticleSlice";
import ColorModeReducer from "./ColorModeSlice";

import {
    persistReducer,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const reducer = combineReducers({
    favouriteReducer,
    CurrentArticleReducer,
    ColorModeReducer
})

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
})

export default store