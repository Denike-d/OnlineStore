import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
// import "./Cart.scss";
import { cartActions } from "../../store/cart-slice";

const table = ["Products", "Quantity", "Total"];

export default function CartItem(props) {
  const dispatch = useDispatch();

  const { name, price, id, image, quantity, totalPrice } = props;

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
              <p>Item: {name}</p>

              <p>${totalPrice}</p>

              <div className="cart__buttons">
                <button className="cart__btn-a" onClick={addToCartHandler}>
                  Add
                </button>
                <button className="cart__btn-r" onClick={handleRemoveItem}>
                  Remove
                </button>
              </div>
            </div>

            <div className="cart__quantity">
              <p>({quantity})</p>
            </div>
          </div>
        </div>

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
