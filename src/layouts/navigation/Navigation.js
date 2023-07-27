import { NavLink } from "react-router-dom";
import "./_navigation.scss";
import { FavDropDown } from "./dropdown/FavDropDown";
import { BasketDropDown } from "./dropdown/BasketDropDown";

export const Navigation = () => {
    const myNavs = ["Home", "About", "Contact", "Product"]
    return (
        <>
            <nav className="d-flex align-items-center justify-content-around">
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
        </>
    )
}
