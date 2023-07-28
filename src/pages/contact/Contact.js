import { PageTitle } from "../../layouts/pageTitle/PageTitle";
import "./_contact.scss";


export const Contact = () => {
    return (
        <>

            <PageTitle>CONTACT</PageTitle>
            <div className="contact container p-3 mt-4 d-flex flex-column flex-lg-row gap-2">
                <div className="map w-100">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13292.233749868812!2d-7.5338517!3d33.6037882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1690439456828!5m2!1sen!2sma" className="w-100 h-100" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
                <div className="contactForm">
                    <h3>Send Us a Message</h3>
                    <form action="" className="d-flex align-items-center flex-column">
                        <input type="text" placeholder="Full Name" />
                        <input type="number" placeholder="Phone Number" />
                        <input type="email" placeholder="Email Adress" />
                        <textarea className="w-100 mb-1 p-1" placeholder="Message" cols="30" rows="5"></textarea>
                    </form>
                    <button className="btn btn-dark rounded-pill ps-1 pe-1">SEND</button>
                </div>
            </div>
        </>
    )
}