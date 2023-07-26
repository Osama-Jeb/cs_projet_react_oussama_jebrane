import "./_heroCarousel.scss";
import hero1 from "../../../../assets/images/heroCaro1.jpg"
import hero2 from "../../../../assets/images/heroCaro2.jpg"
import hero3 from "../../../../assets/images/heroCaro3.jpg"

export const HeroCarousel = () => {

    // const myImgs =
    return (
        <>
            {/* <div className="heroCarousel">
                <div className="caro">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="caroImg carousel-item active">
                                <img src={hero1} className="d-block w-100" alt="..." />
                            </div>
                            <div className="caroImg carousel-item">
                                <img src={hero2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="caroImg carousel-item">
                                <img src={hero3} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="heroText text-light">
                        <h1>TEEEST</h1>
                </div>
            </div> */}

            <div className="heroCarousel">
                <div id="carouselExampleDark" className="carousel carousel-dark slide" >
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval={111000}>
                            <img src={hero1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div className="heroText">
                                    <h1>First slide label</h1>
                                    <button className="btn btn-light rounded-pill ps-1 pe-1">Shop 1</button>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={111000}>
                            <img src={hero2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div className="heroText">
                                    <h1>Second slide label</h1>
                                    <button className="btn btn-light rounded-pill ps-1 pe-1">Shop 2</button>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval={111000}>
                            <img src={hero3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <div className="heroText">
                                    <h1>Third slide label</h1>
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