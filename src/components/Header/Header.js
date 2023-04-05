import React, { Fragment } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Vector from "./Vector.png";
import UserAvatar from "./UserAvatar.svg";

export default function Header() {
  return (
    <Fragment>
      <nav className="header">
        <h4 style={{ color: "#09758", fontSize: "1.1rem" }}>Shopty</h4>
        {/* <ul>
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
        </ul> */}
        <div className="icons">
          {/* <a href="#">
            <img src={UserAvatar} width={26} />
          </a> */}
          <Link to="/cart">
            <img src={Vector} width={26} style={{ textColor: "white" }} />
          </Link>
          {/* <Link to="/">
            <p>Logout</p>
          </Link> */}
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
