import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const productList = createAsyncThunk(
    "api/productList",    // api -name
    async () => {
        let response = await axios.get("https://fakestoreapi.com/products")
        return response?.data
    }
)




