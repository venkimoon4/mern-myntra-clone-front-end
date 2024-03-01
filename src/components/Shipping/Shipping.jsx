import React, { useRef, useState } from "react";
import "./Shipping.css";
import { createUserShipping } from "../../controllers/userController";
import Alert from "../Alert/Alert";
import { shippingActions } from "../../store/shippingSlice";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";

const Shipping = () => {

  const navigate=useNavigate();

  const firstName=useRef();
  const lastName=useRef();
  const address=useRef();
  const country=useRef();
  const zipcode=useRef();
  const city=useRef();
  const state=useRef();

  const [error,setError]=useState(null);

  const dispatch=useDispatch()

  const handleShipping=async()=>{
  try{

    const data=await createUserShipping(firstName.current.value,lastName.current.value,address.current.value,country.current.value,zipcode.current.value,city.current.value,state.current.value);

    dispatch(shippingActions.updateShipping({firstName:data.firstName,lastName:data.lastName,address:data.address,country:data.country,zipcode:data.zipcode,city:data.city,state:data.state}));

    navigate('/checkout')
  }
  catch(error){
   setError(error.message)
  }

  }

  return (
    <div>
      <div className="shipping-container">
        <h1>Shipping</h1>
        <p>Please enter your shipping details.</p>
        <hr />
        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label" htmlFor="firstname">
                First name
              </span>
              <input className="field__input"  ref={firstName} type="text" id="firstname" />
            </label>
            <label className="field">
              <span className="field__label"  htmlFor="lastname">
                Last name
              </span>
              <input className="field__input" ref={lastName} type="text" id="lastname" />
            </label>
          </div>
          <label className="field">
            <span className="field__label" htmlFor="address">
              Address
            </span>
            <input className="field__input" ref={address} type="text" id="address" />
          </label>
          <label className="field">
            <span className="field__label" htmlFor="country">
              Country
            </span>
            <select ref={country} className="field__input" id="country">
              <option value=""></option>
              <option value="India">India</option>
            </select>
          </label>
          <div className="fields fields--3">
            <label className="field">
              <span className="field__label" htmlFor="zipcode">
                Zip code
              </span>
              <input className="field__input" ref={zipcode} type="text" id="zipcode" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="city">
                City
              </span>
              <input className="field__input" ref={city} type="text" id="city" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="state">
                State
              </span>
              <select className="field__input" ref={state} id="state">
                <option value=""></option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman and Diu">
                  Dadra and Nagar Haveli and Daman and Diu
                </option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Delhi">Delhi</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </label>
          </div>
        </div>
        <hr />
        <button className="button" onClick={handleShipping}>Continue</button>
      </div>

      {error && <Alert msg={error}/>}

    </div>
  );
};

export default Shipping;
