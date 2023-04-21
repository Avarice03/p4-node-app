import React, { useContext } from "react";
import { UserContext } from "../providers/User";

function RouteGuard({ children }) {
  const [isLoggedIn, ] = useContext(UserContext);
  
  return <div>RouteGuard</div>;
}

export default RouteGuard;
