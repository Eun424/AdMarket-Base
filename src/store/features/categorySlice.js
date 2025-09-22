import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../Axios/axios'


const initialState = {
    categories: [],
    subCategories: [],
    loading: false,
    error: null
}

export const getCategories = createAsyncThunk('categories', async(_, thunkAPI) => {
    try {
        const res = await api.get('/product/categories') 
    console.log(res.data.categories)
    return res.data.categories
    } catch (error) {
         if(error?.message && error?.response?.data?.message) {

            return thunkAPI.rejectWithValue(error?.response?.data?.message) 
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


const categorySlice = createSlice({
    name: 'category',
    initialState,
      extraReducers: (builder) => {
            builder.addCase(getCategories.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(getCategories.fulfilled, (state, action) => {
                state.loading = false
                state.categories = action.payload
                
            })
            builder.addCase(getCategories.rejected, (state, action) => {
                state.loading = false
                state.categories = null
                state.error = action.payload
            })

            //sub
            builder.addCase(getSubCategories.pending, (state, action) => {
                state.loading = true
            })
            builder.addCase(getSubCategories.fulfilled, (state, action) => {
                state.loading = false
                state.subCategories = action.payload
                
            })
            builder.addCase(getSubCategories.rejected, (state, action) => {
                state.loading = false
                state.subCategories = null
                state.error = action.payload
            })
        }

})

export default categorySlice.reducer;