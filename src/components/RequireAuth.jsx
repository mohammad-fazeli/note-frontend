import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const RequireAuth = ({ children }) => {
  const isLogin = useSelector(
    (state) => state.user.user.name && state.user.user.token
  );

  return isLogin ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;
