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

    const add = (element, index) => {
        let newInfo = [...allInfo];
        let newItem = { ...element };
        newItem.amount += 1;
        newInfo[index] = newItem;
        setAllInfo(newInfo);

        let newBasket = [...basketProd]
        let findInBasket = newBasket.find(el => el.name === element.name)
        if (findInBasket === undefined) {
            newBasket.push(newItem);
            setBasketProd(newBasket)
        }
    }


    const remove = (element, index) => {
        let newInfo = [...allInfo];
        let newItem = { ...element };
        newItem.amount -= 1;
        if (newItem.amount >= 0) {
            newInfo[index] = newItem;
            setAllInfo(newInfo);
            if (newItem.amount === 0) {
                let newBasket = [...basketProd];
                let findInBasket = newBasket.findIndex(el => el.name === element.name)
                newBasket.splice(findInBasket, 1);
                setBasketProd(newBasket)
            }
        }
    }


    return (
        <>
            <PageTitle><h1 className="text-uppercase fw-bolder">{id}</h1></PageTitle>
            <div className="container prodUnique p-3 d-flex align-items-center justify-content-around flex-column flex-md-row">
                {
                    allInfo.map((element, index) =>
                        element.name === id ?
                            <>
                                <img src={element.src} alt="" />
                                <div>
                                    <div className="d-flex align-items-center flex-column">
                                        <h1 className="text-uppercase">{element.name}</h1>
                                        <h4>{element.desc}</h4>
                                        <h4>{element.price}$</h4>
                                    </div>
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