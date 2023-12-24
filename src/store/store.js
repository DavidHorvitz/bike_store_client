import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './features/categoriesSlice';
// import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    // middleware: [thunk]
  },
})