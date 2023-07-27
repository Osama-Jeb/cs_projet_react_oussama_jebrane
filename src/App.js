import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Error } from "./Error";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Navigation } from "./layouts/navigation/Navigation";
import { Contact } from "./pages/contact/Contact";
import { Fav } from "./pages/fav/Fav";
import { Basket } from "./pages/basket/Basket";
import { Product } from "./pages/product/Product";
import { allProducts } from "./variables";
import { Footer } from "./layouts/footer/Footer";

//! REMEMBER TO CHANGE IMAGES FROM Px TO VW FOR RESPONSIVITY

export const Info = createContext();
export const App = () => {

  const [allInfo, setAllInfo] = useState(allProducts);
  const [favProd, setFavProd] = useState([]);
  const [basketProd, setBasketProd] = useState([])
  const [showFav, setShowFav] = useState(false);
  const [showBasket, setShowBasket] = useState(false);

  const changeShowDrop = (event) => {
    switch (event.target.classList[0]) {
      case "favBtn":
        if (showFav) {
          setShowFav(false)
        } else {
          setShowFav(true);
          setShowBasket(false)
        }
        break;
      case "basketBtn":
        if (showBasket) {
          setShowBasket(false)
        } else {
          setShowBasket(true);
          setShowFav(false)
        }
        break;

      default:
        break;
    }
  }

  const allValues = {
    allInfo: [allInfo, setAllInfo],
    favProd: [favProd, setFavProd],
    basketProd: [basketProd, setBasketProd],
    showFav: [showFav, setShowFav],
    showBasket: [showBasket, setShowBasket],
    changeShowDrop: changeShowDrop,
  }

  return (
    <>
      <Info.Provider value={allValues}>
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
        <Footer />
      </Info.Provider>
    </>
  );
};
