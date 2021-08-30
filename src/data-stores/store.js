import { configureStore } from '@reduxjs/toolkit';
import  productReducer from 'data-stores/slices/productSlice';
import categoryReducer from 'data-stores/slices/categorySlice';
const store = configureStore({ reducer: {
    product: productReducer,
    category: categoryReducer,
} })
export default store;