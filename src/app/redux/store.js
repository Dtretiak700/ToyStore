import { configureStore } from '@reduxjs/toolkit'
import cart from "./slices/cartSlice";
import toys from "./slices/toysSlice";

export const store = configureStore({
    reducer: {
        cart,
        toys
    },
})