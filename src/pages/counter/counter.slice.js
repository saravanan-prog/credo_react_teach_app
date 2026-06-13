//createSlice

import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice(
    {
        name:"counter-page",

        initialState :{
            count : 0,
            applicationName:"Simple calculator"
        },

        reducers:{
            add : (state,action)=>{
                state.count += 1
            },
            sub : (state,action) => {
                state.count -= 1
            }
        }
    }
)

export  const {add,sub}  = counterSlice.actions
export default counterSlice.reducer