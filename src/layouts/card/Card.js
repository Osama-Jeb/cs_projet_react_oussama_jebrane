import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_card.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Info } from "../../App";
import { NavLink } from "react-router-dom";

export const Card = (props) => {

    const allValues = useContext(Info);
    const [basketProd, setBasketProd] = allValues.basketProd;
    const [favProd, setFavProd] = allValues.favProd;

    const updateList = (event, propsObject, listState, setListState) => {
        event.target.classList.toggle("flip")
        const newArr = [...listState];
        const findItem = newArr.find(element => element.name === propsObject.name);
        const findItemIndex = newArr.findIndex(element => element.name === propsObject.name);
        if (findItem === undefined) {
            let newItem = { ...propsObject };
            newItem.amount = 1;
            newArr.push(newItem);
        } else {
            newArr.splice(findItemIndex, 1);
        }
        setListState(newArr);
    };

    const toBasket = (event) => {
        updateList(event, props.myObject, basketProd, setBasketProd);
        allValues.calcTotal();
    };

    const toFav = (event) => {
        updateList(event, props.myObject, favProd, setFavProd);
        allValues.calcTotal();
    };


    return (
        <>
            <div className="prodCard m-1">
                <div className="darkness">
                </div>
                <div className="text">
                    <div className="icons d-flex">
                        <button className="btnFav btn fs-3" onClick={toFav} >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <button className="btnBask btn fs-3" onClick={toBasket}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </button>
                    </div>
                </div>
                <img src={props.myObject.src} alt="" />
                <span className="btnTag text-light">{props.myObject.tag}</span>
                <>
                    {
                        props.myObject.tag === "new" ?
                            <>
                                <span className="btnTag bg-success rounded-pill ps-1 pe-1 text-light">{props.myObject.tag}</span>
                            </>
                            : props.myObject.tag === "old" ?
                                <>
                                    <span className="btnTag bg-primary rounded-pill ps-1 pe-1 text-light">{props.myObject.tag}</span>
                                </>
                                :
                                <>
                                    <span className="btnTag aniSale bg-danger rounded-pill ps-1 pe-1 text-light">{props.myObject.tag}</span>
                                </>
                    }
                </>
                <NavLink to={`/product/${props.myObject.name}`}>
                    <button className="btnProd rounded-pill">To Product</button>
                </NavLink>
                <p className="text-uppercase mt-1"><b>{props.myObject.categorie}</b>: {props.myObject.name}</p>
                <>
                    {
                        props.myObject.tag === "sale" ?
                            <>
                                <div className="d-flex">
                                    <p className="strike">${props.myObject.price}</p>
                                    <p className="text-danger aniSale">${props.myObject.price * 0.2}</p>
                                </div>
                            </>
                            :
                            <>
                                <h4 className="ms-1"><b>${props.myObject.price}</b></h4>
                            </>
                    }
                </>
            </div>
        </>
    )
}