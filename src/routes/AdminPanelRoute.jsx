import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function AdminPanelRoute({ children }) {
  if (localStorage.getItem("adminPanel")) return <>{children}</>;
  else return <Navigate to="/dashboard/dashboardLogin" />;
}
