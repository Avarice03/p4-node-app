import {
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";
import { getUserDetails } from "../services/RecipesService";
import { UserContext } from "./User";
import axios from "axios";

export const UserDetailsContext = createContext();

// Provider for admin user status
export const UserDetailsProvider = (props) => {
  const [userDetails, setUserDetails] = useState();
  const [isLoggedIn] = useContext(UserContext);
  const tokenExists = localStorage.getItem("token-auth");

  useEffect(() => {
    const fetch = async () => {
      try {
        if (isLoggedIn) {
          if (!userDetails && tokenExists) {
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${tokenExists}`;
            const data = await getUserDetails();
            setUserDetails(data);
          }
        }
        //  else {
        //   console.log("DITO SA ELSE PUMAPASOK");
        //   setUserDetails();
        // }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [isLoggedIn, userDetails, tokenExists]);

  return (
    <UserDetailsContext.Provider value={[userDetails, setUserDetails]}>
      {props.children}
    </UserDetailsContext.Provider>
  );
};

const userDetailsExport = { UserDetailsContext, UserDetailsProvider };

export default userDetailsExport;
