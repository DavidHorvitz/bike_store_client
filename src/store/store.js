import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './features/categoriesSlice';
import productsReducer from './features/productsSlice';
// import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    products: productsReducer
    // middleware: [thunk]
  },
})