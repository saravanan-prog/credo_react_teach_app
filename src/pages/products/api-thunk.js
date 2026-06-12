
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


export const productsList = createAsyncThunk(
    "api/get-products",
     async ()=>{
        let response = await axios.get("https://fakestoreapi.com/products")
        return response?.data
    }
)


export const userList = createAsyncThunk(
    "api/userList",
    async () => {
        let response = await axios.get("https://fakestoreapi.com/users")
        return response?.data
    }
)