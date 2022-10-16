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

  export const postUser = (user) => {
    return async (dispatch) => {

        const addAOrganization = async () => {
            const response = await axios({
              method: "POST",
              url: "http://localhost:9000/organizations",
              data: org,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                accept: "*/*",
              },
              validateStatus: (status) => {
                return true;
              },
            }).catch((err) => console.log(err.data));
      
            return response.data;
          };
        const postUser = async () => {
            const response = await fetch(
                `${endPoint}/bids`,
                {
                    method : 'POST',
                    body: JSON.stringify(bid),
                    headers: {
                        "Content-type": "application/json"
                      }
                }
            );
            if (!response.ok) {
                throw new Error('Posting bid data failed.');
            }
            return await response.json();

        };

        try {
            const bid = await postBid();

            dispatch(
                curatorBidsActions.postCuratorBid({
                    bid
                })
            );
        } catch (error) {
            console.log("There was an error posting a new bid");
        }
    };
};

  export default userSlice.reducer;

