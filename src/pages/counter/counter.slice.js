import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice(
    {
        name:"counter-app",

        initialState : {
            count : 0,
            
        },
        reducers:{
            add : (state,action) => {
                 state.count += 1
            },
            sub : (state,action) => {
                state.count -= 1
            }
        }
    }
)

export const { add,sub } = counterSlice.actions
export default counterSlice.reducer