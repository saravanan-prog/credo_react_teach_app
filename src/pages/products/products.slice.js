import { createSlice } from "@reduxjs/toolkit";
import { productList } from "./api-thunk";



export const productSlice = createSlice(
    {
        name : "prouducts",
        initialState : {
            loading : false,
            error : null,
            data : []
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(productList.pending,(state,action)=>{
                state.loading = true
            })
            builder.addCase(productList.rejected,(state,action)=> {
                state.loading = false
                state.error  = " Something Went wrong "
                state.data = []
            })
            builder.addCase(productList.fulfilled,(state,action)=>{
                state.loading = false
                state.error = null
                state.data = action.payload
            })
            
        }
        
    }
)

export default productSlice.reducer;