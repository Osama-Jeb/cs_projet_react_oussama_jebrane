import { NavLink } from "react-router-dom";
import "./_navigation.scss";
import { FavDropDown } from "./dropdown/FavDropDown";
import { BasketDropDown } from "./dropdown/BasketDropDown";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import { FaGripLines } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"

export const Navigation = () => {
    const myNavs = ["Home", "About", "Contact", "Product"]
    const [showNav, setShowNav] = useState(false);
    const [btnContent, setBtnContent] = useState(<FaGripLines />)

    const changeShowNav = () => {
        if (!showNav) {
            setShowNav(!showNav);
            setBtnContent(<RxCross1 />)
        } else {
            setShowNav(!showNav);
            setBtnContent(<FaGripLines />)
        }
    }

    return (
        <>
            <nav className="d-none d-md-flex align-items-center justify-content-around">
                <h1 className="popBold">Fashe<span className="text-danger">.</span></h1>
                <div className="d-flex align-items-center gap-3">
                    {
                        myNavs.map((element, index) =>
                            <>
                                <NavLink to={index === 0 ? "/" : `/${element.toLowerCase()}`}>{element}</NavLink>
                            </>
                        )
                    }
                </div>
                <div className="d-flex gap-1">
                    <FavDropDown />
                    <BasketDropDown />
                </div>
            </nav>
            <div className="d-md-none">
                <button className="navBtn btn btn-secondary fw-bold" onClick={changeShowNav}>{btnContent}</button>
                <AnimatePresence>
                    {
                        showNav && <>
                            <motion.nav className="d-flex h-100 justify-content-center align-items-center flex-column gap-2 z-1"
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                exit={{ y: -100, opacity: 0 }}
                            >
                                <div className="d-flex gap-1">
                                    <FavDropDown />
                                    <BasketDropDown />
                                </div>
                                {
                                    myNavs.map((element, index) =>
                                        <>
                                            <NavLink to={index === 0 ? "/" : `/${element.toLowerCase()}`}>{element}</NavLink>
                                        </>
                                    )
                                }
                            </motion.nav>
                        </>
                    }
                </AnimatePresence>
            </div>
        </>
    )
}
