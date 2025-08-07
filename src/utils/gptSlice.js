import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGpt:false,
    },
    reducers:{
        gptPage:(state)=>{
            state.showGpt=!state.showGpt
        }
    }
})
export const {gptPage}=gptSlice.actions

export default gptSlice.reducer