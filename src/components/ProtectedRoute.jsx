import React from "react";
import { Link } from "react-router-dom";
import { HOME_ROUTE } from "./Routes";
const ProtectedRoute = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  }
  return (
    <div className="bgtemplate main grid  grid-center nav-user">
      <p>not allaow to see this page, need to login</p>
      <Link className="marvel-button" to={HOME_ROUTE}>
        Back to home
      </Link>
    </div>
  );
};

export default ProtectedRoute;
