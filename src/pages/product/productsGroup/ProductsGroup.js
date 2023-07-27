import { useContext, useState, useEffect } from "react"
import "./_productsGroup.scss"
import { Info } from "../../../App"
import { Card } from "../../../layouts/card/Card";

export const ProductsGroup = () => {

    const allValues = useContext(Info);
    const [allInfo, setAllInfo] = allValues.allInfo;

    const [men, setMen] = useState([]);
    const [women, setWomen] = useState([]);
    const [kids, setKids] = useState([]);

    const [search, setSearch] = useState([]);

    const findItem = (event) => {
        let items = allInfo.filter(element => element.name.includes(event.target.value))
        setSearch([...items])
    }

    useEffect(() => {
        // Process the elements in 'allInfo' array and group them based on 'tag'
        const menList = [];
        const womenList = [];
        const kidsList = [];

        for (let index = 0; index < allInfo.length; index++) {
            let element = allInfo[index];
            if (element.categorie === "men") {
                menList.push(element);
            }
            if (element.categorie === "women") {
                womenList.push(element);
            }
            if (element.categorie === "kids") {
                kidsList.push(element);
            }
        }

        // Update the state once after processing all elements
        setMen(menList);
        setWomen(womenList);
        setKids(kidsList);
    }, [allInfo]); // Only re-run the effect if 'allInfo' changes

    return (
        <>
            <div className="productGroup p-3">
                <div className="d-flex align-items-start">
                    <div className=" nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <h3>CATEGORIES</h3>
                        <button className=" active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">ALL</button>
                        <button className="" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Men</button>
                        <button className="" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Women</button>
                        <button className="" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Kids</button>

                        {/* SEARCHING FOR THINGS */}
                        <input className="mt-1 rounded-pill ps-1 pe-1 text-center" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"
                            placeholder="Search&#128269;"

                            type="text" onChange={(event) => {
                                findItem(event)
                            }} />
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex={0}>
                            <div className="allProd">
                                {
                                    search.length === 0 ?
                                        <>
                                            {
                                                allInfo.map((element, index) =>
                                                    <>
                                                        <Card myObject={element} />
                                                    </>
                                                )
                                            }
                                        </>
                                        :
                                        <>
                                            {
                                                search.map((element, index) =>
                                                    <>
                                                        <Card myObject={element} />
                                                    </>
                                                )
                                            }
                                        </>
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex={0}>
                            <div className="allProd d-flex flex-wrap gap-3">
                                {
                                    men.map((element, index) =>
                                        <>
                                            <Card myObject={element} />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex={0}>
                            <div className="allProd d-flex flex-wrap gap-3">
                                {
                                    women.map((element, index) =>
                                        <>
                                            <Card myObject={element} />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex={0}>
                            <div className="allProd d-flex flex-wrap gap-3">
                                {
                                    kids.map((element, index) =>
                                        <>
                                            <Card myObject={element} />
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}