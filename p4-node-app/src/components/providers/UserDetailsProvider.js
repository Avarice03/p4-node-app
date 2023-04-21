import { createContext, useState, useEffect, useContext } from "react";
import { getUserDetails } from "../services/RecipesService";
import { UserContext } from "./User";

export const UserDetailsContext = createContext();

// Provider for admin user status
export const UserDetailsProvider = (props) => {
  const [userDetails, setUserDetails] = useState();
  const [isLoggedIn,] = useContext(UserContext);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (isLoggedIn) {
        const data = await getUserDetails();
        console.log(data);
        setUserDetails(data);
      } else {
        setUserDetails([]);
      }
    };
    fetchUserDetails();
  }, [isLoggedIn]);
  console.log(userDetails);
  return (
    <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
      {props.children}
    </UserDetailsContext.Provider>
  );
};

const userDetailsExport = { UserDetailsContext, UserDetailsProvider };

export default userDetailsExport;
