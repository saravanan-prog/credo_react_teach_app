import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from './pages/counter/counter.slice'


export const store = configureStore({
     // save all component states.
    reducer :{
       counter : counterReducer,
       
    }
})