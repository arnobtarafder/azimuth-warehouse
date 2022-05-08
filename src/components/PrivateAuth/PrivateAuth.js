import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";

const PrivateAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <div>
        <Loading></Loading>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signIn" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateAuth;
