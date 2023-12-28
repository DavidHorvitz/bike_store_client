import { createSlice } from '@reduxjs/toolkit';
import { get_product_by_id } from '../actions/products/get_products_by_id';
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [], // An array to store all products along with their courses
    shopping_cart_items: [], // An array to store the products adding to the shopping cart
    product: null, // Store the student object directly here
    loading: false,
    error: null,
  },
  reducers: {
    add_product_to_cart: (state, action) => {
      state.shopping_cart_items.push(action.payload);
    },
    remove_product_from_cart: (state, action) => {
      // Filter out the product from shopping_cart_items
      state.shopping_cart_items = state.shopping_cart_items.filter(
        (product) => product.product_id !== action.payload.product_id
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(get_product_by_id.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload; // Store the received student object directly
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
export const { add_product_to_cart,remove_product_from_cart } = productsSlice.actions
export default productsSlice.reducer;