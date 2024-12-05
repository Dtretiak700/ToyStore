import { configureStore } from '@reduxjs/toolkit'
import cart from "./cartSlice";
import toys from "./toysSlice";

export const store = configureStore({
    reducer: {
        cart,
        toys
    },
})