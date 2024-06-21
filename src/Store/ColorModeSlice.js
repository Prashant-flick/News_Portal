import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    colorMode : "light"
}

const colorModeSlice = createSlice({
    name : "colorMode",
    initialState,
    reducers: {
        toggleMode: (state, action) => {
            state.colorMode = state.colorMode == "light" ? "dark" : "light";
        }
    }
})

export const { toggleMode } = colorModeSlice.actions
export default colorModeSlice.reducer