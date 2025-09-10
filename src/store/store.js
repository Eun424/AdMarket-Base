import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from '../store/features/categorySlice'
import productReducer from '../store/features/productsSlice'
import authReducer from '../store/features/authSlice'


export const store = configureStore({
    reducer: {
        category: categoryReducer,
        products: productReducer,
        auth: authReducer

    }
})