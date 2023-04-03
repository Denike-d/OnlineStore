import React, { Fragment } from "react";
import photo from "./photo.png";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <Fragment>
      <div className="about" id="about">
        <div className="about__image">
          <img src={photo} width={700} className="about__img" />
        </div>
        <div className="about__bio">
          <div className="about__text">
            <h4 style={{ color: "#599efe", fontWeight: "bold" }}>
              Welcome to our online store!
            </h4>
            <p>
              We are your one-stop-shop for all your online shopping needs. We
              offer a wide range of home, fashion products and much more.
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
