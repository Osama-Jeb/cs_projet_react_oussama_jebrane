import React from "react";
import "./_home.scss";
import { ComingSoon } from "./components/comingSoon/ComingSoon";
import cardImg1 from "../../assets/images/cards1.jpg"
import cardImg2 from "../../assets/images/cards2.jpg"
import cardImg3 from "../../assets/images/cards3.jpg"
import { OurProducts } from "./components/ourProducts/OurProducts";
import { HeroCarousel } from "./components/heroCarousel/HeroCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <>
      <div className="home">

        <HeroCarousel />

        <div className="soonHolder container p-3 d-flex justify-content-between gap-2 align-items-center flex-column flex-lg-row ">
          <ComingSoon src={cardImg1} />
          <ComingSoon src={cardImg2} />
          <ComingSoon src={cardImg3} />
        </div>

        <OurProducts />

        <div className="modVideo">
          <h4>The Beauty</h4>
          <h1>LOOKBOOK</h1>
          <button className="btn text-light">
            <FontAwesomeIcon icon={faPlay} /> Play Video
          </button>
        </div>
      </div>
    </>
  );
};
