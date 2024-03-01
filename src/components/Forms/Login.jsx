import React, { useRef, useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../../controllers/userController";
import Alert from "../Alert/Alert";
import { useDispatch, useSelector } from "react-redux"
import { userAction } from "../../store/userSlice.js";
const Login = () => {

  const emailElement=useRef();
  const password=useRef();

  const dispatch=useDispatch();

  const [error,setError]=useState(null);

  const email=useSelector((store)=>store.user.email);

  const navigate=useNavigate();


  const handleLogin=async(e)=>{
    e.preventDefault();
    try{
     const data=await loginUser(emailElement.current.value,password.current.value)
     dispatch(userAction.setUserState(data.email))
     navigate('/')
    }
    catch(error){
    setError(error.message)
    }

  }


  return (
    <div className="align">
                
      <div className="grid">
          <h3 style={{color:"#ea4c88",textAlign:"center",margin:"20px 0px",marginRight:"20px"}}>Login</h3>
        <form className="form login" onSubmit={handleLogin}>

          <div className="form__field">
            <label htmlFor="login__username">
              <i className="fa-regular fa-user"></i>
            </label>
            <input
              id="login__username"
              type="text"
              name="username"
              className="form__input"
              placeholder="Username"
              ref={emailElement}
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__password">
              <i className="fa-solid fa-key"></i>
            </label>
            <input
              id="login__password"
              type="password"
              name="password"
              className="form__input"
              placeholder="Password"
              ref={password}
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Sign In" />
          </div>
        </form>

        <p className="text--center">
          <Link to="/signup">Not a member? Sign up now</Link>
        </p>

        {error && <Alert msg={error}/>}
      </div>
    </div>
  );
};

export default Login;
