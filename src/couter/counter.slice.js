import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice(
    {
        name : "counter-app",
        initialState : {
            count : 0
        },
        reducers : {
            add : (state,action) =>{
                state.count += 1
            },
            sub : (state,action) =>{
                state.count -= 1
            }
        }
    }
)

// Export the all actions
export const {add,sub} = counterSlice.actions
//Export the reducer
export default counterSlice.reducer