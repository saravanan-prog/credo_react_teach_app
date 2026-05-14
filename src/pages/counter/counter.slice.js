import { createSlice } from "@reduxjs/toolkit";





export const counterSlice =  createSlice({
    name:"counter-app",
    initialState : {
        count : 0
    },
    reducers :{
        addition : (state,action) => {
            state.count += 1
        },
        subracton : (state,action) => {
            state.count -= 1
        },
        multiplication : (state,action) => {
            state.count *= 2
        }
    }
})

export const {

    addition,
    subracton,
    multiplication

} = counterSlice.actions


export default counterSlice.reducer;