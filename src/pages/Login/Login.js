import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const register = () => {
    logInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div>
      <div className="payment">
        <div className="checkout-form">
          <div className="checkout-field">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="checkout-field">
            <label>Password</label>
            <input
              type="password"
              id="phone"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={register}>Register</button>
        </div>
      </div>
    </div>
  );
}
