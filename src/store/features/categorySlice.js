import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../Axios/axios'
import toast from 'react-hot-toast'


const initialState = {
    categories: [],
    subCategories: [],
    productBySubcategory : [],
    loadingCategories: false,
    loadingSubCategories: false,
    loadingproductBySubcategory: false,
    error: null
}

export const getCategories = createAsyncThunk('categories', async(_, thunkAPI) => {
    try {
        const res = await api.get('/product/categories') 
    console.log(res.data.categories)
    return res.data.categories
    } catch (error) {
         if(error?.message && error?.response?.data?.message) {

            return thunkAPI.rejectWithValue('Network error. Please check your internet connection') 
        }

         return thunkAPI.rejectWithValue('Something went wrong')
    }
    
})

export const getSubCategories = createAsyncThunk('subcategories', async(categoryId, thunkAPI) => {
    try {
        const res = await api.get(`/product/subCategories/${categoryId}`) 
    console.log(res.data.subcategories)
    return res.data.subcategories
    } catch (error) {
         if(error?.message && error?.response?.data?.message) {

            return thunkAPI.rejectWithValue(error?.response?.data?.message) 
        }

         return thunkAPI.rejectWithValue('Something went wrong')
    }
    
})

export const getProductsBySubcategory = createAsyncThunk('subcategoryproduct', async(subCategoryId, thunkAPI) => {
    try {
        const res = await api.get(`/product/subcategory/${subCategoryId}`) 
    console.log(res.data.productBySubcategory)
    return res.data.productBySubcategory
    } catch (error) {
         if(error?.message && error?.response?.data?.message) {

            return thunkAPI.rejectWithValue(error?.response?.data?.message) 
        }

         return thunkAPI.rejectWithValue('Something went wrong')
    }
    
})


const categorySlice = createSlice({
    name: 'category',
    initialState,
      extraReducers: (builder) => {
            builder.addCase(getCategories.pending, (state, action) => {
                state.loadingCategories = true
            })
            builder.addCase(getCategories.fulfilled, (state, action) => {
                state.loadingCategories = false
                state.categories = action.payload
                
            })
            builder.addCase(getCategories.rejected, (state, action) => {
                state.loadingCategories = false
                state.categories = null
                state.error = action.payload
                  toast.error(action.payload || "Failed to load categories");
            })

            //sub
            builder.addCase(getSubCategories.pending, (state, action) => {
                state.loadingSubCategories = true
            })
            builder.addCase(getSubCategories.fulfilled, (state, action) => {
                state.loadingSubCategories = false
                state.subCategories = action.payload
                
            })
            builder.addCase(getSubCategories.rejected, (state, action) => {
                state.loadingSubCategories = false
                state.subCategories = null
                state.error = action.payload
            })

            //get Products By Subcategory 
            builder.addCase(getProductsBySubcategory.pending, (state, action) => {
                state.loadingproductBySubcategory = true
            })
            builder.addCase(getProductsBySubcategory.fulfilled, (state, action) => {
                state.loadingproductBySubcategory = false
                state.productBySubcategory = action.payload   
            })
            builder.addCase(getProductsBySubcategory.rejected, (state, action) => {
                state.loadingproductBySubcategory = false
                state.productBySubcategory = null
                state.error = action.payload
            })
        }

})

export default categorySlice.reducer;