import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaystackButton } from "react-paystack";
import "./Payment.scss";

export default function Payment() {
  const subTotalPrice = useSelector((state) => state.cart.subTotalPrice);

  const publicKey = "pk_test_245e225bc62b0fecde88e7fadf20e657310c6db9";
  const amount = Math.trunc(subTotalPrice);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: `Pay Now`,
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <>
      <div className="payment">
        <div className="checkout-form">
          <p
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              fontWeight: "medium",
            }}
          >
            Checkout
          </p>
          <div className="checkout-field">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="checkout-field">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <PaystackButton className="paystack-button" {...componentProps} />
        </div>
      </div>
    </>
  );
}
