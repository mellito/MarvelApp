import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "./Routes";
const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  }
  return (
    <div>
      <p>No tienes permisos para ver esta página</p>
      <Link to={HOME_ROUTE}>Volver a inicio</Link>
    </div>
  );
};

export default ProtectedRoute;
