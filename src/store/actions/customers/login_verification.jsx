import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const login_verification = createAsyncThunk('customers/login_verification', async (objData) => {
    const response = await axios.post(`http://localhost:8090/customers/login`, objData);
    alert("Customer verified successfully")
    console.log("Customer verified successfully", response.data);
    return response.data;
});