import React, { Fragment } from "react";
import Jewery from "./Jewery.png";
import "./HeroSection.scss";

export default function HeroSection() {
  return (
    <Fragment>
      <div className="about" id="about">
        <div className="about__image">
          <img src={Jewery} width={600} className="about__img" />
        </div>
        <div className="about__bio">
          <div className="about__text">
            <h4>
              Homeware that puts quality and style at the heart of its brand
            </h4>
            <p>
              With our new collection, view over 400 bespoke pieces from
              homeware through to furniture today
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
