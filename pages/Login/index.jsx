import React, { useContext, useState } from "react";
// import Parse from 'parse/dist/parse.min.js';
import { Button, Divider, Input } from "antd";
import Parse from "../db";
import Link from "next/link";
import MainPage from "../MainPage";
import { Form } from "../../src/context/FormContext";
import Logout from "../../src/components/Logout/Logout";

const UserLogin = () => {
  // State variables
  const {
    useremail,
    setUserEmail,
    password,
    setPassword,
    currentUser,
    setCurrentUser,
    setLogin,
  } = useContext(Form);

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const useremailValue = useremail;
    const passwordValue = password;
    console.log(useremailValue);
    try {
      const loggedInUser = await Parse.User.logIn(
        useremailValue,
        passwordValue
      );
      // logIn returns the corresponding ParseUser object
      alert(
        `Success! User ${loggedInUser.get("email")} has successfully signed in!`
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      // Clear input fields
      setUserEmail("");
      setPassword("");
      // Update state variable holding current user
      getCurrentUser();
      setLogin(true);
      return true;
    } catch (error) {
      // Error can be caused by wrong parameters or lack of Internet connection
      alert(`Error! ${error.message}`);
      return false;
    }
  };

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  return (
    <>
      <div>
        {currentUser === null && (
          <div className="container">
            <h2 className="heading">{"User Login"}</h2>
            <Divider />
            <div className="form_wrapper">
              <Input
                value={useremail}
                onChange={(event) => setUserEmail(event.target.value)}
                placeholder="Enter UserName or Email"
                size="large"
                className="form_input"
              />
              <Input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
                size="large"
                type="password"
                className="form_input"
              />
            </div>
            <div className="form_buttons">
              <Button
                onClick={() => doUserLogIn()}
                type="primary"
                className="form_button"
                color={"#0A9E88"}
                size="large"
                block
              >
                Log In
              </Button>
            </div>
            <Divider />
            <p className="form__hint">
              Dont have an account?
              <Link className="Link_class" href="/">
                Sign up
              </Link>
            </p>
          </div>
        )}
      </div>
      {currentUser !== null && (
        <div>
          <MainPage />
        </div>
      )}
    </>
  );
};

export default UserLogin;
