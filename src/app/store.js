import { configureStore } from "@reduxjs/toolkit";
import userReducer  from "../slices/userSlices";
import userVegReducer from "../slices/vegeSlices";
const store=configureStore({
    reducer:{
        usersInfo:userReducer,
        vegInfo:userVegReducer,
    },
});
export default store;