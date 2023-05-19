import React, { useContext } from "react";
import { AuthContext } from "../../Pages/Provider/AuthProvider";
import Loading from "../../Pages/Shared/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  console.log(location);
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location?.pathname }} />;
  }
  return children;
};

export default PrivateRoute;
