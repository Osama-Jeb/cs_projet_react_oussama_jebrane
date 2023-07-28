import "./_heroCarousel.scss";
import hero1 from "../../../../assets/images/heroCaro1.jpg"
import hero2 from "../../../../assets/images/heroCaro2.jpg"
import hero3 from "../../../../assets/images/heroCaro3.jpg"

export const HeroCarousel = () => {

    //todo : convert to array.map
    return (
        <>
            <div className="heroCarousel mt-0 mt-md-1">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={2000}>
                            <img src={hero1} className="d-block h-100 object-fit-cover w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div className="heroText">
                                    <h1>First slide label</h1>
                                    <p>New Stuff</p>
                                    <button className="btn btn-light rounded-pill ps-2 pe-2 fs-5">Shop 1</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img src={hero2} className="d-block h-100 object-fit-cover w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div className="heroText">
                                    <h1>Second slide label</h1>
                                    <p>New Stuff</p>
                                    <button className="btn btn-light rounded-pill ps-1 pe-1">Shop 2</button>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={2000}>
                            <img src={hero3} className="d-block h-100 object-fit-cover w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div className="heroText">
                                    <h1>Third slide label</h1>
                                    <p>New Stuff</p>
                                    <button className="btn btn-light rounded-pill ps-1 pe-1">Shop 3</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}