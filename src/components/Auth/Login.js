import { Button } from "@mui/material";
import React from "react";
import { auth, provider, signInWithPopup } from "../../firebase";
import { actionTypes } from "../../store/reducer";
import { useStateValue } from "../../store/StateProvider";
import "./login.scss";

function Login() {
  // eslint-disable-next-line
  const [_, dispatch] = useStateValue();

  const onSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    dispatch({ type: actionTypes.SET_USER, user: result.user });
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/1200px-2021_Facebook_icon.svg.png"
          alt="Facebook logo"
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt="facebook logo name"
        />
      </div>
      <Button onClick={onSignIn}>Sign In</Button>
    </div>
  );
}

export default Login;