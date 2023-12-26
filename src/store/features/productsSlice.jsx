import { createSlice } from '@reduxjs/toolkit';
import { get_product_by_id } from '../actions/products/get_products_by_id';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [], // An array to store all products along with their courses
    product: null, // Store the student object directly here
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(get_product_by_id.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload; // Store the received student object directly
      })
      .addCase(get_product_by_id.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addMatcher(
        (action) =>
          action.type.endsWith('/pending') || action.type.endsWith('/rejected'),
        (state) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        }
      );
  },
});

export default productsSlice.reducer;