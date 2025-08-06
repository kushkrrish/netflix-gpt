import userReducer from "./userSlice";
import movieReducer from "./movieSlicee"

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer
    },
})

export default store;