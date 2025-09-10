import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import api from "../../Axios/axios"


const initialState = ({
    users: null,
    loading: false,
    error: null,
   
})


export const register = createAsyncThunk('registration', async (registerData, thunkAPI) => {

    try {
        const response = await api.post('/register', registerData)
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
        if(error?.response && error?.response?.data?.message) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }

        return thunkAPI.rejectWithValue('Something went wrong')
    }
})



export const login = createAsyncThunk('login', async (loginData, thunkAPI) => {

    try {
        const response = await api.post('/login', loginData)
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
        if(error?.response && error?.response?.data?.message) {
            return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }

        return thunkAPI.rejectWithValue('Something went wrong')
    }
})

export const logout = createAsyncThunk('logout', async(_, thunkAPI) => {

    try {
        const response = await api.post('/logout')
        return response.data
    } catch (error) {
        if(error?.message && error?.response?.data?.message) {

              return thunkAPI.rejectWithValue(error?.response?.data?.message)
        }

        return thunkAPI.rejectWithValue('Something went wrong') 
        }
    
})





const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(register.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(register.rejected, (state, action) => {
            state.loading = false
            state.users = null
            state.error = action.payload
        })

        //login
        builder.addCase(login.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
        })
        builder.addCase(login.rejected, (state, action) => {
            state.loading = false
            state.users = null
            state.error = action.payload
        })

        //logout
        builder.addCase(logout.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            state.loading = false
            state.users = null
        })
        builder.addCase(logout.rejected, (state, action) => {
            state.loading = false
            state.users = null
            state.error = action.payload
        })
    }

})




export default authSlice.reducer