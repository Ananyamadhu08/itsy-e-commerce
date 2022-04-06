import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/providers/AuthProvider";

function PrivateRoutes() {
  const {
    authState: { user, encodedToken },
  } = useAuth();

  return encodedToken ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
