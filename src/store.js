import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./features/user/userSliceTest.js"


const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export default store;
