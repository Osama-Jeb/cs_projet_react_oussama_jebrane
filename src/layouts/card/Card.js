import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_card.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Info } from "../../App";

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
    };

    const toFav = (event) => {
        updateList(event, props.myObject, favProd, setFavProd);
    };


    return (
        <>
            <div className="prodCard m-1">
                <div className="darkness"></div>
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
                <button className="btn btnTag btn-primary rounded-pill">{props.myObject.tag}</button>
                <p>{props.myObject.categorie}: {props.myObject.name}</p>
                <p>{props.myObject.price} $</p>
            </div>
        </>
    )
}