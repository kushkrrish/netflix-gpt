import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGpt:false,
        movieName:null,
        movieResult:null
    },
    reducers:{
        gptPage:(state)=>{
            state.showGpt=!state.showGpt
        },
        addMovieName:(state,action)=>{
            state.movieName=action.payload
        },
        addMovieResult:(state,action)=>{
            state.movieResult=action.payload
        }
    }
})
export const {gptPage,addMovieName,addMovieResult}=gptSlice.actions

export default gptSlice.reducer