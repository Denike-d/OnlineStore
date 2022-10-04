import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import "./ProductPage.scss";
import { useNavigate } from "react-router-dom";

export default function ProductPage(props) {
  const { id, title, key, price, image } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function addToCartHandler() {
    navigate("/cart");
    dispatch(
      cartActions.addItemToCart({
        id: id,
        price: price,
        title: title,
        image: image,
      })
    );
  }

  return (
    <div key={key}>
      <div className="listing__item">
        <img src={image} width={60} className="listing__image" />
        <div className="listing__content">
          <p>{title}</p>
          <p>{price}</p>
        </div>
        <div className="listing__info">
          <div className="listing__btn" onClick={addToCartHandler}>
            Add to cart
            <img src="" />
          </div>
        </div>
      </div>
    </div>
  );
}
