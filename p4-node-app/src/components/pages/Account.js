import React, { useContext, useState } from "react";
import { UserDetailsContext } from "../providers/UserDetailsProvider";
import { useNavigate } from "react-router-dom";
import { updateUserDetails } from "../services/RecipesService";

function Account() {
  const [userDetails, setUserDetails] = useContext(UserDetailsContext);
  const [userName, setUserName] = useState(userDetails.userName);
  const [firstName, setFirstName] = useState(userDetails.firstName);
  const [lastName, setLastName] = useState(userDetails.lastName);
  const [password, setPassword] = useState("");
  const [confirm, confirmPass] = useState("");
  const [userErrMessage, setUserErrMessage] = useState("");
  const [passErrMessage, setPassErrMessage] = useState([]);
  const [confirmErrMessage, setConfirmErrMessage] = useState("");
  const [responseMessage, setResponseMessage] = useState("");
  const pass = document.querySelectorAll(".pass");
  const togglePassword = document.querySelector("#togglePassword");
  const navigate = useNavigate();

  const passwordValidation = () => {
    const validations = [
      {
        condition: password.length < 8,
        message: "*Your password must be at least 8 characters.",
      },
      {
        condition: !password.match(/[a-z]/),
        message: "*Your password should contain at least one lowercase letter.",
      },
      {
        condition: !password.match(/[A-Z]/),
        message: "*Your password should contain at least one uppercase letter.",
      },
      {
        condition: !password.match(/\d/),
        message: "*Your password should contain at least one digit.",
      },
      {
        //eslint-disable-next-line
        condition: !password.match(/[!@#$%^&*()_+\-=\]\[{};':"\\|,.<>\/?]/),
        message:
          "*Your password should contain at least one special character.",
      },
    ];

    let errorArray = [];
    validations.map((validation) => {
      if (validation.condition) {
        errorArray.push(validation.message);
      }
      return validation;
    });

    if (errorArray.length) {
      setPassErrMessage([...errorArray]);
      return false;
    } else {
      return true;
    }
  };
  const handleUpdateUser = async () => {
    try {
      if (userName) {
        setUserErrMessage("");
        if (passwordValidation()) {
          setPassErrMessage([]);
          if (confirm === password) {
            const userDetails = {
              firstName: firstName,
              lastName: lastName,
              userName: userName,
              password: password,
            };
            const response = await updateUserDetails(userDetails);
            setResponseMessage(response.data.message);
            alert(
              `Welcome ${firstName} ${lastName}! You have successfully updated your account`
            );
            setUserDetails(userDetails);
            setUserName("");
            setFirstName("");
            setLastName("");
            setPassword("");
            confirmPass("");
            setConfirmErrMessage("");
            navigate("/recipes");
          } else {
            setConfirmErrMessage("Your password did not match.");
          }
        }
      } else {
        setUserErrMessage("This field is required.");
      }
    } catch (error) {
      setResponseMessage(error.response.data.message);
    }
  };

  const handleDeleteUser = () => {};

    //Function for hiding and showing password
    const showPassword = () => {
        togglePassword.classList.toggle("bi-eye");
        pass.forEach((pass) => {
          if (pass.type === "password") {
            pass.type = "text";
          } else {
            pass.type = "password";
          }
        });
      };

  return (
    <div className="signin-container">
      <h1>
        Hi, {userDetails.firstName} {userDetails.lastName} 👋
      </h1>
      <div className="login-container">
        <div className="form-container">
          <form onSubmit={(e) => e.preventDefault()}>
            <p>Username:</p>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              style={{ width: "100%", marginBottom: "0.5em" }}
              required
            />
            <small style={{ color: "red", marginBottom: "0.5em" }}>
              {userErrMessage}
            </small>
            <p>First Name:</p>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ width: "100%", marginBottom: "0.5em" }}
              required
            />
            <p>Last Name:</p>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ width: "100%", marginBottom: "0.5em" }}
              required
            />
            <p>Password:</p>
            <input
              type="password"
              className="pass"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "100%", marginBottom: "0.5em" }}
              required
            />
            <i
              className="bi bi-eye-slash"
              id="togglePassword"
              style={{ marginLeft: "-30px", cursor: "pointer" }}
              onClick={showPassword}
            ></i>
            {passErrMessage.map((error) => (
              <p
                key={error}
                style={{
                  color: "red",
                  marginBottom: "0.5em",
                  fontSize: "small",
                }}
              >
                {error}
              </p>
            ))}
            <p>Confirm Password:</p>
            <input
              type="password"
              className="pass"
              value={confirm}
              onChange={(e) => confirmPass(e.target.value)}
              style={{ width: "100%", marginBottom: "0.5em" }}
              required
            />
            <p>
              <small style={{ color: "red", marginBottom: "0.5em" }}>
                {confirmErrMessage}
              </small>
            </p>
            <center>
              <p>
                <strong
                  style={{
                    color: "red",
                    marginBottom: "0.5em",
                  }}
                >
                  {responseMessage}
                </strong>
              </p>
            </center>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={handleUpdateUser}
              style={{ marginBottom: "0.5em", width: "100%" }}
              required
            >
              Update Details
            </button>
            <button
              type="submit"
              className="btn btn-outline-danger"
              onClick={handleDeleteUser}
              style={{ marginBottom: "0.5em", width: "100%" }}
              required
            >
              Delete my Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Account;
