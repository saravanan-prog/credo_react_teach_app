//configure the store

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../pages/counter/counter.slice'

export const store = configureStore(
    {
        reducer:{
            counterReducer : counterReducer
        }
    }
)