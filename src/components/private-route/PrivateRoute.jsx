import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context";

export function PrivateRoute() {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/auth" state={{ from: location }} replace />
  );
}
