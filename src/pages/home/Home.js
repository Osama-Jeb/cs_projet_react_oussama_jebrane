import React, { useState } from "react";
import "./_home.scss";
import { ComingSoon } from "./components/comingSoon/ComingSoon";
import cardImg1 from "../../assets/images/cards1.jpg"
import cardImg2 from "../../assets/images/cards2.jpg"
import cardImg3 from "../../assets/images/cards3.jpg"
import { OurProducts } from "./components/ourProducts/OurProducts";
import { HeroCarousel } from "./components/heroCarousel/HeroCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export const Home = () => {
  const [showVid, setShowVid] = useState(false);

  const changeShowVid = () => {
    setShowVid(!showVid)
  }

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
          <button className="btn text-light" onClick={changeShowVid}>
            <FontAwesomeIcon icon={faPlay} /> Play Video
          </button>
          <AnimatePresence>
            {
              showVid && <>
                <motion.div className="position-fixed bg-success top-50 start-50 z-3 translate-middle"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  exit={{ y: 100, opacity: 0 }}
                >
                <button className="btn btn-dark position-absolute top-0 end-0" onClick={changeShowVid}>X</button>
                  <iframe width={700} height={400} src="https://www.youtube.com/embed/BZFHjkTh-jE" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                </motion.div>
              </>
            }
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};
