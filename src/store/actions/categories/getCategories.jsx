import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    const response = await axios.get('http://localhost:8090/categories/');
    console.log("getCategories", response);
    return response.data;
});