import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./_footer.scss";
import { faCcMastercard, faCcPaypal, faCcVisa, faFacebookF, faInstagram, faPaypal, faPinterestP, faSnapchatGhost, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Footer = () => {
    const footLinks = ["Product", "About", "Contact"];
    return (
        <>
            <footer className="bg-gray">
                <div className="footerLinks p-3 d-flex flex-column flex-lg-row gap-3 justify-content-between">
                    <div className="inTouch d-flex flex-column align-items-center">
                        <h4>GET IN TOUCH</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, aliquid!</p>
                        <div className="socials d-flex gap-2">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faInstagram} />
                            <FontAwesomeIcon icon={faPinterestP} />
                            <FontAwesomeIcon icon={faSnapchatGhost} />
                            <FontAwesomeIcon icon={faYoutube} />
                        </div>
                    </div>
                    <div className="links d-flex gap-1 align-items-center flex-column">
                        <h3>LINKS</h3>
                        {
                            footLinks.map((element, index) =>
                                <>
                                    <HashLink className="footLink" to={`/${element.toLowerCase()}#top`}>
                                        {element}
                                    </HashLink>
                                </>
                            )
                        }
                    </div>
                    <div className="links d-flex align-items-center flex-column">
                        <h3>LINKS</h3>
                        <p>Search</p>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Returns</p>
                    </div>
                </div>
                <div className="footerPayment p-3 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex gap-2">
                        <FontAwesomeIcon icon={faCcPaypal} />
                        <FontAwesomeIcon icon={faCcVisa} />
                        <FontAwesomeIcon icon={faCcMastercard} />
                    </div>
                    <p>copyrights and stuff</p>
                </div>
            </footer>
        </>
    )
}