import { configureStore } from '@reduxjs/toolkit'
import cart from "./cartSlice";

export const store = configureStore({
    reducer: {
        cart
    },
})