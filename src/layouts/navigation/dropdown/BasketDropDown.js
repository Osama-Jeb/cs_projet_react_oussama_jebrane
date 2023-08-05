import { useContext, useState } from "react";
import "./_basketDropDown.scss";
import { AiOutlineShopping } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Info } from "../../../App";
import { NavLink } from "react-router-dom";


export const BasketDropDown = () => {


    const allValues = useContext(Info);
    const [basketProd, setBasketProd] = allValues.basketProd;
    const [showBasket, setShowBasket] = allValues.showBasket;


    return (
        <>
            <div className="basketDropdown">
                <div className="iconHolder">
                    <button className="basketBtn btn" onClick={(event) => {
                        allValues.changeShowDrop(event)
                    }}>
                        <h4><AiOutlineShopping className="basketBtn" /></h4>
                        <div className="circle">{basketProd.length}</div>
                    </button>
                </div>
                <AnimatePresence>
                    {
                        showBasket && <>
                            <motion.div className="basketMenu"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: "1vh", opacity: 1 }}
                                transition={{ delay: 0.25, duration: 0.5 }}
                                exit={{ opacity: 0, y: -100 }}
                            >
                                {
                                    basketProd.length === 0 ?
                                        <>
                                            <h1>Add To Cart</h1>
                                        </>
                                        :
                                        <>
                                            {
                                                basketProd.map((element, index) =>
                                                    <>
                                                        <div className="basketItem d-flex align-items-center gap-1 mb-2">
                                                            <img src={element.src} alt="" />
                                                            <div className="">
                                                                <h4 className="fw-bold text-uppercase">{element.name}</h4>
                                                                <p>{element.amount} X {element.price}$</p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        </>
                                }
                                <div className="d-flex gap-1 align-items-center justify-content-center">
                                    <NavLink to={"/basket"}>
                                        <button className="btn btn-dark text-light rounded-pill ps-1 pe-1" onClick={()=>{
                                            setShowBasket(false)
                                        }}>
                                            Go To Your Basket
                                        </button>
                                    </NavLink>
                                    <p className="m-0">TOTAL:{allValues.total[0]}$</p>
                                </div>
                            </motion.div>
                        </>
                    }
                </AnimatePresence>
            </div>
        </>
    )
}