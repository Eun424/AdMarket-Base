import { createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../data/products";

const initialState = {
    items: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterBySubCategory: (state, action) => {
            state.items = productsData.filter((p) => p.subCategory.toLowerCase() === action.payload.toLowerCase())
        }
    }

})

export const { filterBySubCategory } = productsSlice.actions;

export default productsSlice.reducer;