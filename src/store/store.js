import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './features/categoriesSlice';
import productsReducer from './features/productsSlice';
import customersReducer from './features/customersSlice';
// import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer,
    customers: customersReducer,
    // middleware: [thunk]
  },
})