import { configureStore } from "@reduxjs/toolkit";
import productReducer from './pages/products/products.slice'


export const store = configureStore({
     // save all component states.
    reducer :{
        productReducer : productReducer
       
    }
})