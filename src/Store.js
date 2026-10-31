import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './pages/couter/counter.slice'



export const  store = configureStore({

    reducer:{
        
        counter : counterReducer,
        
    }

})







    