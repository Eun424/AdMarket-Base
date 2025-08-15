import { createSlice } from '@reduxjs/toolkit'
import {categoriesData} from '../../../data/category'


const initialState = {
    categories: categoriesData,
    selectedSubCategory: null
}


const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setSelectedSubCategory: (state, action) => {
            state.selectedSubCategory = action.payload
        }
    }
})

export const { setSelectedSubCategory } = categorySlice.actions
export default categorySlice.reducer;