import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";
import Main from "./main/Main";

export const Home = () => {
  return (
    <div className="home">
      <Header/>
      <Main />
      <Footer />
    </div>
  );
};
