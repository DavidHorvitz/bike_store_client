import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const addCustomer = createAsyncThunk(
    'customers/addCustomer',
    async (newCustomer) => {
        
        const response = await axios.post('http://localhost:8090/customers/add-customer', newCustomer);
        alert("Customer added successfully")
        console.log("Customer added successfully", response.data);
        return response.data;
    }
);