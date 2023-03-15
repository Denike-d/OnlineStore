import React from "react";
import Deals from "./deals/Deals";
import Electronics from "./electronics/Electronics";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import Data from "./Product/Data";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Deals />
      <Electronics />
      <Data />
    </div>
  );
}
