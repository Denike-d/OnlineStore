import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./Cart.scss";
import { cartActions } from "../../store/cart-slice";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const table = ["Products", "Quantity", "Total"];

export default function CartItem(props) {
  const dispatch = useDispatch();

  const { name, price, id, image, quantity, totalPrice, cart_quantity } = props;

  // Create a reference to the carts collection
  const cartRef = collection(db, "carts");
  // const cartsRef = firebase.firestore().collection("carts");

  // Add a new cart item document to the carts collection
  // const cartItem = {
  //   id: id,
  //   price: price,
  //   name: name,
  //   image: image,
  // };

  // cartRef
  //   .doc(id)
  //   .collection("carts")
  //   .add(cartItem)
  //   .then((docRef) => {
  //     console.log("Cart item added with ID:", docRef.id);
  //   })
  //   .catch((error) => {
  //     console.error("Error adding cart item:", error);
  //   });

  function handleRemoveItem() {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function addToCartHandler() {
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
        name: name,
        image: image,
        cart_quantity: cart_quantity,
      })
    );
  }
  return (
    <Fragment>
      <div className="cart__page">
        <div className="cart__item">
          <div className="cart__details">
            <img src={image} width={100} />

            <div className="cart__np">
              <p>{name}</p>
              <div className="cart__buttons">
                <button className="cart__btn-a" onClick={addToCartHandler}>
                  <strong>Add</strong>
                </button>
                <button className="cart__btn-r" onClick={handleRemoveItem}>
                  <strong>Remove</strong>
                </button>
              </div>
            </div>

            <div className="cart__quantity">
              <p style={{ fontWeight: "500" }}>${totalPrice}</p>
              <p
                style={{
                  border: "1px solid grey",
                  padding: "2px 20px",
                  borderRadius: "5px",
                }}
              >
                Qty: {cart_quantity}
              </p>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* <div>
          <div className="cart__quantity">
            <p>{quantity}</p>
          </div>
        </div> */}
        {/* <div className="cart__total">
          <div>
            <p>${totalPrice}</p>
          </div>
        </div> */}
        {/* <div className="cart__buttons">
          <button className="cart__btn-a" onClick={addToCartHandler}>
            Add
          </button>
          <button className="cart__btn-r" onClick={handleRemoveItem}>
            Remove
          </button>
        </div> */}
      </div>
    </Fragment>
  );
}
