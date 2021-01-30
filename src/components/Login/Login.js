import React, { useState } from "react";
import { auth, provider } from "../../firebase.js";
import { Button } from "@material-ui/core";
import "./Login.css";
import Loader from "../Loader/Loader.js";
import { Redirect, useLocation } from "react-router-dom";

// HERE axios is not not axios module but the file which i have made with base adress

function Login({ setUser }) {
  
  const [loading , setLoading] = useState(false);
  const [routeName,setRouteName] = useState(false);
  
  const signIn = () => {
    // const location =useLocation();
    // let history = useHistory()
    setLoading(true);
    auth
      .signInWithPopup(provider)
      .then((res) => {
        // take name,email,image from google login response
        
        setLoading(false);
            // set user {state setter for user from ../App.js file   (come as prop) }
            // console.log(res.user.displayName)
            setUser(res.user.displayName);
            setRouteName(true)
      })
      .catch((err) => {   setLoading(false);  alert(err.message)});
  };

  if(routeName) return <Redirect to="/" /> 
  
  return (
    <div className="login">
      {loading ? <Loader /> :
      <div >
        <img
          className="login__image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/235px-Google_%22G%22_Logo.svg.png"
        />
        <Button varient="contained" onClick={signIn} className="login__button">
          Login with google
        </Button>
      </div>
}
    </div>
  );
}

export default Login;
