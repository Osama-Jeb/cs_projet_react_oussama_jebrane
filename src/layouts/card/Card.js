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
        event.target.classList.toggle("bought")
        const newArr = [...listState];
        const findItem = newArr.find(element => element.name === propsObject.name);
        const findItemIndex = newArr.findIndex(element => element.name === propsObject.name);
        if (findItem === undefined) {
            newArr.push(propsObject);
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
                        <button className="btnFav btn">
                            <h3>
                                <FontAwesomeIcon icon={faHeart} onClick={toFav} />
                            </h3>
                        </button>
                        <button className="btnBask btn">
                            <h3>
                                <FontAwesomeIcon icon={faShoppingCart} onClick={toBasket} />
                            </h3>
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