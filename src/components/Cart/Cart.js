import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import { cartActions } from "../../store/cart-slice";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const subTotalPrice = useSelector((state) => state.cart.subTotalPrice);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  // window.localStorage.setItem("cartItems", cartItems);

  // const getNewCartData = () => {
  //   let localCartData = localStorage.getItem("avionCartItems");
  //   if (localCartData === []) {
  //     return [];
  //   } else {
  //     return JSON.parse(localCartData);
  //   }
  // };

  // const cartItem = getNewCartData(cartItems);

  // console.log(cartItems.id);

  // useEffect(() => {
  //   localStorage.setItem("avionCartItems", JSON.stringify(cartItems));

  // }, [cartItems]);

  return (
    <>
      <h3 style={{ marginLeft: "3rem", color: "#599efe" }}>
        My Cart Items ({totalQuantity})
      </h3>
      <div className="cart">
        <div className="cart-items">
          {cartItems.map((item) => (
            <CartItem
              name={item.name}
              price={Math.floor(item.price)}
              id={item.id}
              image={item.image}
              quantity={item.quantity}
              totalPrice={Math.floor(item.totalPrice)}
              cart_quantity={Math.floor(item.cart_quantity)}
            />
          ))}
        </div>

        <div className="checkout">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // padding: "1rem",
            }}
          >
            <p className="subtotal">SubTotal: </p>
            <p>${Math.floor(subTotalPrice)}</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // padding: "1rem",
            }}
          >
            <p className="subtotal">Discount: </p>
            <p>$0</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              // padding: "1rem",
            }}
          >
            <p className="subtotal">Tax: </p>
            <p>$0</p>
          </div>
          <hr></hr>
          <Link to="/payment">
            <p
              style={{
                backgroundColor: "#8CB7F5",
                display: "inline-block",
                padding: "0.5rem 1rem",
                color: "black",
                borderRadius: "5px",
                justifyContent: "center",
                margin: "0.5rem 4rem",
              }}
            >
              Checkout
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}
