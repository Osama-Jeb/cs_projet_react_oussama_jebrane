import { useParams } from "react-router-dom";
import "./_productUnique.scss";
import { PageTitle } from "../../../layouts/pageTitle/PageTitle";
import { useContext } from "react";
import { Info } from "../../../App";

export const ProductUnique = () => {
    const { id } = useParams();
    const allValues = useContext(Info);
    const [allInfo, setAllInfo] = allValues.allInfo
    const [basketProd, setBasketProd] = allValues.basketProd;
    let myItem = allInfo.find(element => element.name === id);

    const add = (element, index) => {
        let newArr = [...allInfo];
        let newItem = {...element};
        newItem.amount += 1;
        newArr[index] = newItem;
        setAllInfo(newArr);
    }


    const remove = (element, index) => {
        let newArr = [...allInfo];
        let newItem = { ...element };
        newItem.amount -= 1;
        if (newItem.amount >= 0) {
            newArr[index] = newItem;
            setAllInfo(newArr);
        }
    }


    return (
        <>
            <PageTitle>{id}</PageTitle>
            <div className="container prodUnique d-flex justify-content-around">
                {
                    allInfo.map((element, index) =>
                        element.name === id ?
                            <>
                                <img src={element.src} alt="" />
                                <div>
                                    <h1>{element.name}</h1>
                                    <h4>{element.desc}</h4>
                                    <div>
                                        <div className="d-flex justify-content-center">
                                            <button className="basketBtn btn" onClick={() => {
                                                remove(element, index)
                                            }}>-</button>
                                            <button className="btn fw-bold fs-4">{element.amount}</button>
                                            <button className="basketBtn btn" onClick={() => {
                                                add(element, index)
                                            }}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                            :
                            null
                    )
                }
            </div>
        </>
    )
}