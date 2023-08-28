import React from 'react'
import Navbar from '../components/Navbar'
import { CiUnread, CiUser, CiAt } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import './SignUp.css';

const SignUp = () => {
  
  return (
    <>
      <Navbar/>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Fill all field for create an account.</p>
        <form>
        <div className="inputs">
          <div className="input">
            <input type="text" placeholder='Username' required/>
            <CiUser className='icon'/>
          </div>
          <div className="input">
            <input type="email" placeholder='Email Address'/>
            <CiAt className='icon'/>
          </div>
        </div>
        <div className="inputs">
          <div className="input pass">
            <input type="password" placeholder='Password'/>
            <CiUnread className='icon'/>
          </div>
          <div className="input pass">
            <Link to="/"><button>Sign Up</button></Link>
          </div>
        </div>
        </form>
        <h1>Or</h1>
        <p>Sign Up with...</p>
        <div className="otherSignUp">
          <div className="signUp">
            <img src="assets/images/facebook.png" alt="" />
            Sign Up with Facebook
          </div>
          <div className="signUp">
            <img src="assets/images/google.png" alt="" />
            Sign Up with Google
          </div>
          <div className="signUp">
            <img src="assets/images/apple.png" alt="" />
            Sign Up with Apple
          </div>
        </div>
        <div className="goto">
        <Link to="/login">Already have an account? Please Log In</Link>
        </div>
      </div> 
    </>
  )
}

export default SignUp
