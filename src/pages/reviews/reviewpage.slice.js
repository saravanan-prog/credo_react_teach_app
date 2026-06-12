import { createSlice } from "@reduxjs/toolkit";


export const reviewPageslice = createSlice(
    {
        name:"review page app",
        initialState : {
            comments:[]
        },
        reducers:{
            addcomments:(state,action) => {
                state.comments.push(action.payload.comments)
            }
        }
    }
)


export const {addcomments} = reviewPageslice.actions
export default reviewPageslice.reducer