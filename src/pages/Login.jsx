import React from "react";
import Navbar from "../components/Navbar.js";
import "./Login.css";
import { CiUser, CiUnread } from "react-icons/ci";
import { Link} from "react-router-dom";

const Login = () => {
  
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Log in</h1>
        <p>Login into existing account.</p>
        <form>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="Username" />
              <CiUser className="icon" />
            </div>
            <div className="input">
              <input type="password" placeholder="Password"/>
              <CiUnread className="icon" />
            </div>
          </div>
          <Link to="/"><button>Log In</button></Link>
        </form>
        <h1>Or</h1>
        <p>Log in with...</p>
        <div className="otherLogin">
          <div className="login">
            <img src="assets/images/facebook.png" alt="" />
            Log in with Facebook
          </div>
          <div className="login">
            <img src="assets/images/google.png" alt="" />
            Log in with Google
          </div>
          <div className="login">
            <img src="assets/images/apple.png" alt="" />
            Log in with Apple
          </div>
        </div>
        <div className="goto">
          <Link to="/signUp">Don't have an account create one</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
