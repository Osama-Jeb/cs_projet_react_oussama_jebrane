import { AiOutlineHeart } from "react-icons/ai";
import { FaHeartBroken } from "react-icons/fa"
import "./_favDropdown.scss";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import { Info } from "../../../App";

export const FavDropDown = () => {

    const allValues = useContext(Info);
    const [favProd, setFavProd] = allValues.favProd;
    const [showFav, setShowFav] = allValues.showFav;



    const removeFav = (element) => {
        let newArr = [...favProd]
        let findIndexItem = favProd.filter(el => el.name === element.name);
        newArr.splice(findIndexItem, 1);
        setFavProd(newArr);
    }

    return (
        <>
            <div className="favDropdown">
                <button className="favBtn btn" onClick={(event) =>{
                    allValues.changeShowDrop(event)
                }}>
                    <h4>
                        <AiOutlineHeart className="favBtn" />
                    </h4>
                </button>
                <AnimatePresence>
                    {
                        showFav && <>
                            <motion.div className="favMenu"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 10, opacity: 1 }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                                exit={{ opacity: 0, y: -100 }}
                            >
                                <h3 className="text-secondary m-1"> Add something</h3>
                                {
                                    favProd.map((element, index) =>
                                        <>
                                            <div className="favItem d-flex align-items-center gap-2 m-1">
                                                <img src={element.src} alt="" />
                                                <div className="d-flex align-items-center flex-column">
                                                    <h4 className="fw-bold text-uppercase">{element.name}</h4>
                                                    <div className="d-flex w-100  gap-1 justify-content-center">
                                                        <button className="btn text-danger" onClick={() =>{
                                                            removeFav(element)
                                                        }}>
                                                            <FaHeartBroken />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                <div className="d-flex justify-content-center">
                                    <NavLink to={"/fav"}>
                                        <button className="btn btn-dark text-light rounded-pill ps-1 pe-1" onClick={() =>{
                                            setShowFav(false);
                                        }}>
                                            Go To Favorites
                                        </button>
                                    </NavLink>
                                </div>
                            </motion.div>
                        </>
                    }
                </AnimatePresence>
            </div>
        </>
    )
}