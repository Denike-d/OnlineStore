import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.scss";
import { cartActions } from "../../store/cart-slice";
import CartItem from "./CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const subTotalPrice = useSelector((state) => state.cart.subTotalPrice);

  console.log(cartItems.id);

  return (
    <div className="cart">
      <h3>Your Shopping Cart</h3>
      <div>
        {cartItems.map((item) => (
          <CartItem
            name={item.name}
            price={item.price}
            id={item.id}
            image={item.image}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
          />
        ))}
      </div>
      <p>{subTotalPrice}</p>
    </div>
  );
}
