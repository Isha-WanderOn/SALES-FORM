import { Button } from "antd";
import React, { useContext } from "react";
import { Form } from "../../context/FormContext";
import Parse from "../../../pages/db";
import { useRouter } from "next/router";

const Logout = () => {
  const { setCurrentUser, setLogin, setSignup } = useContext(Form);
  const router = useRouter();
  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert("Success! No user is logged in anymore!");
        setLogin(false);
        setSignup(false);
        router.push("/");
      }
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
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
    <div className="form_buttons">
      <div
        onClick={() => doUserLogOut()}
        type="primary"
        style={{
          textDecoration: "none",
          fontSize: "1.6rem",
          fontWeight: "400",
          color: "#ffffff",
        }}
      >
        Log Out
      </div>
    </div>
  );
};

export default Logout;
