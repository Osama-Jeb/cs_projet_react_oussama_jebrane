import { useContext } from "react";
import { PageTitle } from "../../layouts/pageTitle/PageTitle";
import "./_fav.scss";
import { Info } from "../../App";

export const Fav = () => {
    const allValues = useContext(Info);
    const [favProd, setFavProd] = allValues.favProd;
    const [basketProd, setBasketProd] = allValues.basketProd;

    const addToBasket = (element, index) =>{
        let newFav = [...favProd];
        let newBask = [...basketProd]
        let newItem = newFav[index];
        newFav.splice(index, 1);
        setFavProd(newFav)
        let find = newBask.find(el => el.name === newItem.name);
        if (find === undefined){
            setBasketProd([...basketProd, newItem])
        }
    }

    return (
        <>
            <div className="favPage">
                <PageTitle>FAVORITES</PageTitle>
                <div className="container text-center p-2">
                    <div className="row">
                        <div className="col">
                            <h1>Product</h1>
                        </div>
                        <div className="col">
                            <h1>Price</h1>
                        </div>
                        <div className="col">
                            <h1>Quantity</h1>
                        </div>
                        <div className="col">
                            <h1>Total</h1>
                        </div>
                        <div className="col">
                            <h1>Add</h1>
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    {
                        favProd.map((element, index) =>
                            <>
                                <div className="row favItems">
                                    <div className="col d-flex align-items-center gap-1">
                                        <img src={element.src} alt="" />
                                        <h4>{element.name}</h4>
                                    </div>
                                    <div className="col">
                                        <h4>${element.price}</h4>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex justify-content-center">
                                            <button className="favBtn btn" onClick={() =>{
                                                allValues.remove(element, setFavProd)
                                            }}>-</button>
                                            <button className="btn fw-bold fs-4">{element.amount}</button>
                                            <button className="favBtn btn" onClick={() =>{
                                                allValues.add(element, setFavProd)
                                            }}>+</button>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h4>${element.price * element.amount}</h4>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-dark rounded-pill" onClick={() =>{
                                            addToBasket(element, index)
                                        }}>Add to Basket</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

        </>
    )
}