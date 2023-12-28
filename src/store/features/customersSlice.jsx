import { createSlice } from '@reduxjs/toolkit';
import { addCustomer } from '../actions/customers/add_customer';
import { login_verification } from '../actions/customers/login_verification';

const customersSlice = createSlice({
    name: 'customers',
    initialState: {
        customers: [], // An array to store all customers
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addCustomer.fulfilled, (state, action) => {
                state.loading = false;
                state.customers.push(action.payload);
            })
            .addCase(login_verification.fulfilled, (state, action) => {
                state.loading = false;
                // Depending on the structure of your response, you might update the state accordingly.
                // For example, if your response has a user object, you can add it to the state.
                state.currentUser = action.payload.user;
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

export default customersSlice.reducer;