import { createSlice } from "@reduxjs/toolkit";

export const toysSlice = createSlice({
    name: "toys",
    initialState: {
        toysArray: [],
        stuffedToys: [],
        woodenToys: []
    },
    reducers: {
        filterCategory: (state, action) => {
            state.toysArray = action.payload;
            state.stuffedToys = action.payload.filter(
                toy => toy.category === "STUFFED"
            );
            state.woodenToys = action.payload.filter(
                toy => toy.category === "WOODEN"
            )
        }
    }
})

export const selectStuffedToys = state => state.toys.stuffedToys;
export const selectWoodenToys = state => state.toys.woodenToys;
export const { filterCategory } = toysSlice.actions;
export default toysSlice.reducer;