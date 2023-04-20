import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import chef from "../images/chef.png";
import { UserContext } from "../providers/User";

// Login page for RecipeEZ
function Login() {
  const [, setAdmin] = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userErrMessage, setUserErrMessage] = useState("");
  const [passErrMessage, setPassErrMessage] = useState("");
  const navigate = useNavigate();

  // Function for signing in
  const handleSignIn = () => {
    if (userName === "admin") {
      setUserErrMessage("");
      if (password === "admin") {
        setPassErrMessage("");
        navigate("/recipes");
        setAdmin(true);
      } else {
        setPassErrMessage("Incorrect password");
      }
    } else {
      setUserErrMessage("Invalid username.");
    }
  };

  return (
    <div className="signin-container">
      <img src={chef} alt="chef avatar"></img>
      <h2>Sign in to RecipeEZ</h2>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <p>Username:</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: "100%", marginBottom: "0.5em" }}
            />
            <small style={{ color: "red", marginBottom: "0.5em" }}>
              {userErrMessage}
            </small>
            <p>Password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", marginBottom: "0.5em" }}
            />
            <small style={{ color: "red", marginBottom: "0.5em" }}>
              {passErrMessage}
            </small>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleSignIn}
              style={{ marginBottom: "0.5em", width: "100%" }}
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="create-container">
        <span>New to RecipeEZ?</span>
        <NavLink to="/signup">Create an account.</NavLink>
      </div>
    </div>
  );
}

export default Login;
