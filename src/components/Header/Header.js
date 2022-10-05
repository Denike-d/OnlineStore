import React, { Fragment } from "react";
import "./Header.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ShoppingCart from "./ShoppingCart.svg";
import UserAvatar from "./UserAvatar.svg";

export default function Header() {
  return (
    <Fragment>
      <nav className="header">
        <h4 style={{ color: "rgb(252, 182, 96)" }}>Avion</h4>
        <ul>
          <li>
            <AnchorLink href="#">Jewelry</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#about">Dress</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#project">Shirt</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#project">Cap</AnchorLink>
          </li>
          <li>
            <AnchorLink href="#project">Glasses</AnchorLink>
          </li>
        </ul>
        <div>
          {/* <a href="/cart">
            <img src={ShoppingCart} width={26} />
          </a> */}
          <a href="#">
            <img src={UserAvatar} width={26} />
          </a>
        </div>
      </nav>
      <div>
        {/* <div className="header__text">
          <p>
            A brand built on the love of craftmanship, quality and outstanding
            customer service
          </p>
        </div> */}
      </div>
    </Fragment>
  );
}
