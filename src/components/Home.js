import React from "react";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import Data from "./Product/Data";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Data />
    </div>
  );
}
