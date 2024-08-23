import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"



const store = configureStore({
    // store objects which takes objects as parameters ans slices of the project
    // or reducers which we dont make tem up here rather in a different file and import them back here as reducers or slices  
    reducer : {
        auth: authSlice,
    }
})
// keeping it so we can use it anywhere we like from here
export default store