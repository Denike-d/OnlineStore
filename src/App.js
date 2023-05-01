import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Payment from "./components/Payment/Payment";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div>
      <Routes>
        {/* <Route exact path="/" element={<Register />} />
        <Route exact path="/login" element={<Login />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/payment" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
