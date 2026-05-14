import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from './pages/counter/counter.slice'
import loanpageReducer from './pages/loan-calc/loanpage.slice'


export const store = configureStore({
     // save all component states.
    reducer :{
       counter : counterReducer,
       loanData : loanpageReducer
       
    }
})