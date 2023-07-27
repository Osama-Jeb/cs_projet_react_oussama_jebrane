import { AiOutlineHeart } from "react-icons/ai";
import { FaHeartBroken } from "react-icons/fa"
import "./_favDropdown.scss";
import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion"
import { NavLink } from "react-router-dom";
import { Info } from "../../../App";

export const FavDropDown = () => {
    const [showDrop, setShowDrop] = useState(true);
    const allValues = useContext(Info);
    const [favProd, setFavProd] = allValues.favProd;

    const changeShow = () => {
        setShowDrop(!showDrop)
    }

    const removeFav = () => {
        
    }

    return (
        <>
            <div className="dropdown">
                <button className="btn" onClick={changeShow}>
                    <AiOutlineHeart />
                </button>
                <AnimatePresence>
                    {
                        showDrop && <>
                            <motion.div className="menu"
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
                                                        <button className="btn text-danger">
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
                                        <button className="btn btn-dark text-light rounded-pill ps-1 pe-1">
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