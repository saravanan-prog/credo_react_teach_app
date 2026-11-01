import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosCall } from "../../Service/api-Service";

export const getProduct = createAsyncThunk(

    "api/Products",
    async () => {
        //api-logic
        const response = await axiosCall('/products','get')
        console.log("response ===>",response)
        return response
    }
)

export const getUserlist = createAsyncThunk(
    
    "api/userList",
    async () => {
        //api-logic
        const response = await axiosCall('/user','get')
        return response
    }
)