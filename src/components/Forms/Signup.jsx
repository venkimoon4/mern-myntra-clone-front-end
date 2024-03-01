import React, { useRef, useState } from "react";
import "./Form.css";
import { createUser } from "../../controllers/userController";
import Alert from "../Alert/Alert";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../../store/userSlice.js";
import { useNavigate } from "react-router-dom";
const Signup = () => {

  const name=useRef();
  const emailElement=useRef();
  const password=useRef();
  const mobileno=useRef();

  const [error,setError]=useState(null);

  const email=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSignup=async(e)=>{
    e.preventDefault();
    try{
    const data=await createUser(name.current.value,emailElement.current.value,password.current.value,mobileno.current.value)
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
      <h3 style={{color:"#ea4c88",textAlign:"center",margin:"20px 0px",marginRight:"20px"}}>Register</h3>
        <form className="form login" onSubmit={handleSignup}>
          <div className="form__field">
            <label htmlFor="login__name">
              <i className="fa-solid fa-user-pen"></i>
            </label>
            <input
              id="login__name"
              type="text"
              name="text"
              className="form__input"
              placeholder="Name"
              ref={name}              
            />
          </div>

          <div className="form__field">
            <label htmlFor="login__email">
              <i className="fa-regular fa-user"></i>
            </label>
            <input
              id="login__email"
              type="text"
              name="email"
              className="form__input"
              placeholder="Email Address"
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
            <label htmlFor="login__mobileno">
            <i class="fa-solid fa-mobile"></i>
            </label>
            <input
              id="login__mobileno"
              type="text"
              name="text"
              className="form__input"
              placeholder="Mobileno."
              ref={mobileno}
            />
          </div>

          <div className="form__field">
            <input type="submit" value="Sign Up" />
          </div>
        </form>

        {error && <Alert msg={error}/>}
      </div>
    </div>
  );
};

export default Signup;
