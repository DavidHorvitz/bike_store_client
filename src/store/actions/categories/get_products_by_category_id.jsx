import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";


export const get_products_by_category_id = createAsyncThunk('categories/get_products_by_category_id', async (id) => {
    const response = await axios.get(`http://localhost:8090/categories/${id}/products`);
    console.log("get_products_by_category_id i try to do it :",response.data);
    return response.data;
});