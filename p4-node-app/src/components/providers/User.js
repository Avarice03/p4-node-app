import { createContext, useState } from "react";

export const UserContext = createContext();

// Provider for admin user status
export const UserProvider = (props) => {
  const [admin, setAdmin] = useState(false);

  return (
    <UserContext.Provider value={[admin, setAdmin]}>
      {props.children}
    </UserContext.Provider>
  );
};

const userExport = { UserContext, UserProvider }

export default userExport;
