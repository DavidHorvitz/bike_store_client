import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const get_product_by_id = createAsyncThunk('products/get_product_by_id', async (id) => {
    const response = await axios.get(`http://localhost:8090/products/${id}/`);
    console.log("get_product_by_id i try to do it :",response.data);
    return response.data;
});