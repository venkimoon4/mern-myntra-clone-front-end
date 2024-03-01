import React, { useRef, useState } from "react";
import "./Checkout.css";
import { useSelector } from "react-redux";
import {
  clearAllUserCartItems,
  createMyOrderItems,
  userCheckout,
} from "../../controllers/userController";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const bag = useSelector((store) => store.bag);

  const navigate = useNavigate();

  const [error, setError] = useState(null);

  const nameOnCard = useRef();
  const cardNumber = useRef();

  let totalPrice = 0;

  bag.forEach((item) => {
    totalPrice += item.current_price * item.quantity;
  });

  const handleCheckOut = async (e) => {
    e.preventDefault();
    try {
      const data = await userCheckout(
        totalPrice,
        nameOnCard.current.value,
        cardNumber.current.value
      );
      await createMyOrderItems(bag);
      await clearAllUserCartItems();
      alert("Payment Received Successfully");
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container-checkout">
      <div id="Checkout" className="inline">
        <h1>Pay Invoice</h1>
        <div className="card-row">
          <span className="visa"></span>
          <span className="mastercard"></span>
          <span className="amex"></span>
          <span className="discover"></span>
        </div>
        <form onSubmit={handleCheckOut}>
          <div className="form-group">
            <label htmlFor="PaymentAmount">Payment amount</label>
            <div className="amount-placeholder">
              <span>$</span>
              <span>{totalPrice}</span>
            </div>
          </div>
          <div className="form-group">
            <label or="NameOnCard">Name on card</label>
            <input
              id="NameOnCard"
              ref={nameOnCard}
              className="form-control"
              type="text"
              maxLength="255"
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="CreditCardNumber">Card number</label>
            <input
              id="CreditCardNumber"
              ref={cardNumber}
              className="null card-image form-control"
              type="text"
            ></input>
          </div>
          <div className="expiry-date-group form-group">
            <label htmlFor="ExpiryDate">Expiry date</label>
            <input
              id="ExpiryDate"
              className="form-control"
              type="text"
              placeholder="MM / YY"
              maxLength="7"
            ></input>
          </div>
          <div className="security-code-group form-group">
            <label htmlFor="SecurityCode">Security code</label>
            <div className="input-container">
              <input
                id="SecurityCode"
                className="form-control"
                type="text"
              ></input>
              <i id="cvc" className="fa fa-question-circle"></i>
            </div>
            <div className="cvc-preview-container two-card hide">
              <div className="amex-cvc-preview"></div>
              <div className="visa-mc-dis-cvc-preview"></div>
            </div>
          </div>
          <div className="zip-code-group form-group">
            <label htmlFor="ZIPCode">ZIP/Postal code</label>
            <div className="input-container">
              <input
                id="ZIPCode"
                className="form-control"
                type="text"
                maxLength="10"
              ></input>
            </div>
          </div>
          <button
            id="PayButton"
            className="btn btn-checkout btn-block btn-success submit-button"
          >
            <span className="submit-button-lock"></span>
            <span className="align-middle">Pay $500.00</span>
          </button>
          {error && <Alert msg={error} />}
        </form>
      </div>
    </div>
  );
};

export default Checkout;
