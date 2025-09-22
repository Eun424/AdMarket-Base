import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsData } from "../../../data/products";
import api from "../../Axios/axios";

const initialState = {
    items: [],
    products:[]
}

export const getProductsBySeller = createAsyncThunk('all', async(_, thunkAPI) => {
    try {
        const res = await api.get('/product/productbySeller') 
    console.log(res.data.productbySeller)
    return res.data.productbySeller
    } catch (error) {
         if(error?.message && error?.response?.data?.message) {

            return thunkAPI.rejectWithValue(error?.response?.data?.message) 
        }

         return thunkAPI.rejectWithValue('Something went wrong')
    }
    
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterBySubCategory: (state, action) => {
            state.items = productsData.filter((p) => p.subCategory.toLowerCase() === action.payload.toLowerCase())
        }
    },
 extraReducers: (builder) => {
            builder.addCase(getProductsBySeller.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(getProductsBySeller.fulfilled, (state, action) => {
                state.loading = false
                state.products = action.payload
                
            })
            builder.addCase(getProductsBySeller.rejected, (state, action) => {
                state.loading = false
                state.products = null
                state.error = action.payload
            })

            
        }
})

export const { filterBySubCategory } = productsSlice.actions;

export default productsSlice.reducer;