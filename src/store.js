import { configureStore } from "@reduxjs/toolkit";
import productReducer from './pages/products/product.slice'


export const store = configureStore({
     // save all component states.
    reducer :{
        products : productReducer
    }

})