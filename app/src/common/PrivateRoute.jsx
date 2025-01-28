import { Outlet, Navigate } from "react-router";

const PrivateWrapper = ({ auth: { isAuthenticated } }) => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />;
  };

export default PrivateWrapper;