import Cart from "./components/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login/Login";

function App() {
  const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
