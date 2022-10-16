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
  return children;
};

export default ProtectedRoute;