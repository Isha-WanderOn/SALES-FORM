import React, { useContext, useState } from "react";
// import Parse from 'parse/dist/parse.min.js';
import Parse from "../../../pages/db";
import { Button, Divider, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { Form } from "../../context/FormContext";

export default function UserRegistration() {
  // State variables
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");
  const { setSignup } = useContext(Form);
  // Functions used by the screen components
  const doUserRegistration = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const useremailValue = useremail;
    const passwordValue = password;
    try {
      // Since the signUp method returns a Promise, we need to call it using await
      const userToLogin = new Parse.User;
      userToLogin.set('username', usernameValue);
      userToLogin.set('email', useremailValue);
      userToLogin.set('password', passwordValue);
      const createdUser = await userToLogin.signUp(usernameValue,useremailValue, passwordValue);
      setSignup(true);
      alert(
        `Success! User ${createdUser.getUsername()} was successfully created!`
      );
      return true;
    } catch (error) {
      // signUp can fail if any parameter is blank or failed an uniqueness check on the server
      alert(`Error! ${error}`);
      return false;
    }
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',height: '100vh'}}>
      <div className="container">
        <h2 className="heading">{"User Signup"}</h2>
        <Divider />
        <div className="form_wrapper">
        <Input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter Username"
            size="large"
            className="form_input"
          />
          <Input
            value={useremail}
            onChange={(event) => setUseremail(event.target.value)}
            placeholder="Enter User Email"
            size="large"
            className="form_input"
            type='email'
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
            onClick={() => doUserRegistration()}
            type="primary"
            className="form_button"
            color={'#0A9E88'}
            size="large"
          >
            Sign Up
          </Button>
        </div>
        <Divider />
        <div className="form__hint">
          Already a member ? <Link className='Link_class' href="/Login">Login</Link>
        </div>
      </div>
    </div>
  );
}
