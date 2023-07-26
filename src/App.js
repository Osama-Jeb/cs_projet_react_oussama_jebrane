import React from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/navigation/Navigation";
import { Contact } from "./pages/contact/Contact";
import { Fav } from "./pages/fav/Fav";
import { Basket } from "./pages/basket/Basket";
import { Product } from "./pages/product/Product";

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};
