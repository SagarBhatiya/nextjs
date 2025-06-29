import React from "react";
import { Bebas_Neue } from "next/font/google";
const bebasFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p className={`${bebasFont.className}`}>Random shit</p>
    </div>
  );
};

export default Home;
