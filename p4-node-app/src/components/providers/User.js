import { createContext, useState } from "react";

export const UserContext = createContext();

// Provider for admin user status
export const UserProvider = (props) => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={[isLoggedIn, setLoggedIn]}>
      {props.children}
    </UserContext.Provider>
  );
};

const userExport = { UserContext, UserProvider }

export default userExport;
