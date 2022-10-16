import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user_slice";

 const store = configureStore({
    reducer:{
        user: userSlice
    }
 });

 export default store;