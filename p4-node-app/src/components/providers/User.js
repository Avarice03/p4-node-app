import { createContext, useCallback, useState } from "react";

export const UserContext = createContext();

// Provider for admin user status
export const UserProvider = (props) => {
  const token = localStorage.getItem("token-auth");
  const [isLoggedIn, setLoggedIn] = useState(false);

  useCallback(() => {
    if (token){
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [token])

  return (
    <UserContext.Provider value={[isLoggedIn, setLoggedIn]}>
      {props.children}
    </UserContext.Provider>
  );
};

const userExport = { UserContext, UserProvider }

export default userExport;
