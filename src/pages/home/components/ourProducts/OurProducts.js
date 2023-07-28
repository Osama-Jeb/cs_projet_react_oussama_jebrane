import { useContext, useEffect, useState } from "react";
import { Card } from "../../../../layouts/card/Card";
import "./_ourProducts.scss";
import { Info } from "../../../../App";

export const OurProducts = () => {
    const allValues = useContext(Info);
    const [allInfo, setAllInfo] = allValues.allInfo;

    const [bestSelling, setBestSelling] = useState([]);
    const [newProd, setNewProd] = useState([]);
    const [old, setOld] = useState([]);
    const [sale, setSale] = useState([]);

    // Helper function to get a random element from an array
    const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

    // Helper function to filter items based on their tag
    const filterItemsByTag = (array, tag) => array.filter((element) => element.tag === tag);

    // Main useEffect
    useEffect(() => {
        if (allInfo.length === 0) return; // Ensure allInfo is not empty before proceeding

        // Get 4 random elements for bestSelling
        const tempBest = Array.from({ length: 4 }, () => getRandomElement(allInfo));

        // Filter items based on their tag
        const tempNew = filterItemsByTag(allInfo, "new");
        const tempOld = filterItemsByTag(allInfo, "old");
        const tempSale = filterItemsByTag(allInfo, "sale");

        // Get 4 random elements from each filtered list
        const tempNew4 = Array.from({ length: 4 }, () => getRandomElement(tempNew));
        const tempOld4 = Array.from({ length: 4 }, () => getRandomElement(tempOld));
        const tempSale4 = Array.from({ length: 4 }, () => getRandomElement(tempSale));

        // Update state with the new arrays
        setBestSelling(tempBest);
        setNewProd(tempNew4);
        setOld(tempOld4);
        setSale(tempSale4);
    }, [allInfo]);



    return (
        <>
            <div className="ourProducts p-5 d-flex align-items-center flex-column p-3 ">
                <h1>OUR PRODUCTS</h1>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="prodBtn active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Best Seller</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="prodBtn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">New</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="prodBtn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Old</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="prodBtn" id="pills-extra-tab" data-bs-toggle="pill" data-bs-target="#pills-extra" type="button" role="tab" aria-controls="pills-extra" aria-selected="false">Sale</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane holder fade show active ttt" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                        <div className="d-block d-md-flex gap-2">
                            {
                                bestSelling.map((element, index) =>
                                    <>
                                        <Card myObject={element} />
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="tab-pane holder fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                        <div className="d-block d-md-flex gap-2">
                            {
                                newProd.map((element, index) =>
                                    <>
                                        <Card myObject={element} />
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="tab-pane holder fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                        <div className="d-block d-md-flex gap-2">
                            {
                                old.map((element, index) =>
                                    <>
                                        <Card myObject={element} />
                                    </>
                                )
                            }
                        </div>
                    </div>
                    <div className="tab-pane holder fade" id="pills-extra" role="tabpanel" aria-labelledby="pills-extra-tab" tabindex="0">
                        <div className="d-block d-md-flex gap-2">
                            {
                                sale.map((element, index) =>
                                    <>
                                        <Card myObject={element} />
                                    </>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}