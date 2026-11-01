import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from './product-api-thunk'


export const productSlice =  createSlice(
    {
        name: "products",
        initialState:{
            loading: true,
            error:null,
            data:[]
        },
        reducers:{
            
        },
        extraReducers: (builder) => {
            //product
            builder.addCase(getProduct.pending,(state,action)=>{
                state.loading =  true
                state.error = null
                state.data = []
            }) 
            builder.addCase(getProduct.fulfilled,(state,action)=>{
                state.loading =  false
                state.error = null
                state.data = action?.payload?.data
            })
            builder.addCase(getProduct.rejected,(state,action)=>{
                state.loading =  false;
                state.error = "something went wrong"
                state.data = []
            })
            //user
        }
    }
)

export default productSlice.reducer;