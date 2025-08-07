import userReducer from "./userSlice";
import movieReducer from "./movieSlicee";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store=configureStore({
    reducer:{
        user:userReducer,
        movie:movieReducer,
        gpt:gptReducer,
        config:configReducer
    },
})

export default store;