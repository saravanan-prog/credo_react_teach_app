import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './couter/counter.slice'

export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})