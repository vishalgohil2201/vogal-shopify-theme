import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    nav: false,
}

export const mobileNavSlice = createSlice({
    name: 'MobileNav',
    initialState,
    reducers: {
        showNavOffset: (state) => {
            state.nav = true;
        },
        hideNavOffset: (state) => {
            state.nav = false;
        },
    },
})

export const {showNavOffset, hideNavOffset} = mobileNavSlice.actions

export default mobileNavSlice.reducer