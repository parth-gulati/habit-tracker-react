import { Outlet, Navigate } from "react-router";

const PrivateWrapper = ({ auth: { token } }) => {
    console.log(token)
    return token ? <Outlet /> : <Navigate to="/signin" />;
  };

export default PrivateWrapper;