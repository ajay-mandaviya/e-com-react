import React from "react";
import { useAuth } from "../context";
import { Navigate, Route, useLocation } from "react-router-dom";

export function ProtectedRoutes({ children }) {
  const {
    authUser: { token },
  } = useAuth();
  let location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}
