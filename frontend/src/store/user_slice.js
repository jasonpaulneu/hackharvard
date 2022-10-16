import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
    name: "user",
    initialState: { loggedInUser: null },
    reducers: {
      login(state, action) {
        state.loggedInUser = action.payload;
      },
      logout(state){
        state.loggedInUser=null
      },
      signup(state,action){
        state.loggedInUser = action.payload
      }
    },
  });

  export const userActions = userSlice.actions;

  export default userSlice.reducer;

