import { createSlice } from "@reduxjs/toolkit";


const movieSlice=createSlice({
    name:"movie",
    initialState:{
        NowPlaying:null,
        Trailer:null,
        Popular:null,
        Toprate:null
        
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlaying=action.payload;
        },
        addTrailer:(state,action)=>{
            state.Trailer=action.payload;
        },
        addPopular:(state,action)=>{
            state.Popular=action.payload;
        },
        addToprate:(state,action)=>{
            state.Toprate=action.payload;
        }
       
    }
})
export const {addNowPlayingMovies,addTrailer,addPopular,addToprate}=movieSlice.actions;
export default movieSlice.reducer;