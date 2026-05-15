import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "./api-thunk";



export const productSlice = createSlice(
    {
        name: "product-app",
        initialState: {
            loading: false,
            error: null,
            products: null
        },
        reducers: {},
        extraReducers: (builder) => {
            builder
                .addCase(productsList.pending, (state) => {
                    state.loading = true
                })
                .addCase(productsList.fulfilled, (state, action) => {
                    state.loading = false
                    state.products = action.payload
                })
                .addCase(productsList.rejected, (state) => {
                    state.loading = false
                    state.error = "Something went wrong"
                })
        }
    }
)

export default productSlice.reducer;