import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./_comingSoon.scss"
import { AiOutlineHeart } from "react-icons/ai"
import { faHeart } from "@fortawesome/free-regular-svg-icons"


export const ComingSoon = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.src} alt="" />
                <button className="btn btn-light">Coming Soon</button>
            </div>
        </>
    )
}