import { createSlice } from "@reduxjs/toolkit";


export const loanpageSlice = createSlice( {
    name : "loan-app",
    initialState : {
        principalAmount : 1000,
        intrestRate : 8
    },

    reducers : {
        calcIntrest : (state,action) => {
            state.principalAmount += state.principalAmount * state.intrestRate / 100
        },
        intrestBy:(state,action) => {
            console.log("state===>",state.principalAmount,"action===>",action.payload)
            state.principalAmount += state.principalAmount * action.payload.percentage / 100
        }
    }
})

export const {calcIntrest,intrestBy} = loanpageSlice.actions

export default loanpageSlice.reducer