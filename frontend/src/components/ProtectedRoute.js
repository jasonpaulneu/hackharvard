import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import { userActions } from "../store/user_slice";
import {useDispatch} from 'react-redux';
import axios from 'axios';

const ProtectedRoute =  ({ children }) => {
  const { user } = useUserAuth();
  const dispatch = useDispatch();

  console.log("Check user in Private: ", user);
  if (!user) {
    return <Navigate to="/" />;
  }

  // const fetchUser = async () => {
  //   await axios
  //     .get(`http://localhost:9000/api/v1/user?email=${user.email}`)
  //     .then(async (res) => {
  //       dispatch(userActions.login(user));
  //     });
  // };
  // fetchUser();
  return children;
};

export default ProtectedRoute;