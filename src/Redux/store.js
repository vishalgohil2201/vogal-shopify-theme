import { configureStore } from "@reduxjs/toolkit";
import mobileNavSlice from "./Slices/mobileNavSlice";

export const store = configureStore ({
    reducer:{
        navSlice: mobileNavSlice,
    },
})