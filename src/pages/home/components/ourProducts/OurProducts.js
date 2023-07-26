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

    useEffect(() => {
        // Process the elements in 'allInfo' array and group them based on 'tag'
        const bestSellingList = [];
        const newProdList = [];
        const oldList = [];
        const saleList = [];

        for (let index = 0; index < allInfo.length; index++) {
            let element = allInfo[index];
            if (element.tag === "best seller") {
                bestSellingList.push(element);
            }
            if (element.tag === "new") {
                newProdList.push(element);
            }
            if (element.tag === "old") {
                oldList.push(element);
            }
            if (element.tag === "sale") {
                saleList.push(element);
            }
        }

        // Update the state once after processing all elements
        setBestSelling(bestSellingList);
        setNewProd(newProdList);
        setOld(oldList);
        setSale(saleList);
    }, [allInfo]); // Only re-run the effect if 'allInfo' changes


    return (
        <>
            <div className="ourProducts d-flex align-items-center flex-column p-3 ">
                <h1>OUR PRODUCTS</h1>
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="btn active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Best Seller</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="btn" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">New</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="btn" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Old</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="btn" id="pills-extra-tab" data-bs-toggle="pill" data-bs-target="#pills-extra" type="button" role="tab" aria-controls="pills-extra" aria-selected="false">Sale</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active ttt" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
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
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
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
                    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
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
                    <div class="tab-pane fade" id="pills-extra" role="tabpanel" aria-labelledby="pills-extra-tab" tabindex="0">
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