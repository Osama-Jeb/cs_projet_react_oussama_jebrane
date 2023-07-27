import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_card.scss";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const Card = (props) => {
    return (
        <>
            <div className="prodCard m-1">
                <div className="darkness"></div>
                <div className="text">
                    <div className="icons d-flex gap-1">
                        <h3>
                            <FontAwesomeIcon icon={faHeart} />
                        </h3>
                        <h3>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </h3>
                    </div>
                </div>
                <img src={props.myObject.src} alt="" />
                <button className="btn btn-primary rounded-pill">{props.myObject.tag}</button>
                <p>{props.myObject.categorie}: {props.myObject.name}</p>
                <p>{props.myObject.price} $</p>
            </div>
        </>
    )
}