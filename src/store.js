import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from './pages/counter/counter.slice'
import loanpageReducer from './pages/loan-calc/loanpage.slice'
import productReducer from './pages/products/products.slice'


export const store = configureStore({
     // save all component states.
    reducer :{
       counter : counterReducer,
       loanData : loanpageReducer,
       products : productReducer
       
    }
})