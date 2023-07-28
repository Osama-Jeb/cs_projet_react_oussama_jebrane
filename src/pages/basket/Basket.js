import { useContext } from "react";
import { PageTitle } from "../../layouts/pageTitle/PageTitle";
import "./_basket.scss";
import { Info } from "../../App"



export const Basket = () => {
    const allValues = useContext(Info);
    const [basketProd, setBasketProd] = allValues.basketProd;

    // const add = (element) => {
    //     let newArr = [...basketProd]
    //     let newItem = { ...element }
    //     const findItemIndex = newArr.findIndex(el => el.name === element.name);

    //     newItem.amount += 1;

    //     newArr.splice(findItemIndex, 1, newItem);
    //     setBasketProd(newArr);
    // }

    // const remove = (element) =>{
    //     let newArr = [...basketProd];
    //     let newItem = {...element};
    //     const findItemIndex = newArr.findIndex(el => el.name === element.name);

    //     newItem.amount -= 1;
    //     if (newItem.amount) {
    //         newArr.splice(findItemIndex, 1, newItem)
    //     } else {
    //         newArr.splice(findItemIndex, 1);
    //     }
    //     setBasketProd(newArr)
    // }

    return (
        <>
            <div className="basketPage">
                <PageTitle>YOUR BASKET</PageTitle>
                <div className="basketProducts container p-2">
                    <div className="container text-center">
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
                        </div>
                    </div>
                    {
                        basketProd.length === 0 ?
                            <>
                                <h1 className="mt-2">ADD SOMETHING TO YOUR BASKET</h1>
                            </>
                            :
                            <>
                                <div className="container text-center">
                                    {
                                        basketProd.map((element, index) =>
                                            <>
                                                <div className="row myItems">
                                                    <div className="col d-flex align-items-center gap-1">
                                                        <img src={element.src} alt="" />
                                                        <h4>{element.name}</h4>
                                                    </div>
                                                    <div className="col">
                                                        <h4>${element.price}</h4>
                                                    </div>
                                                    <div className="col">
                                                        <div className="d-flex justify-content-center">
                                                            <button className="basketBtn btn" onClick={() =>{
                                                                allValues.remove(element, setBasketProd)
                                                            }}>-</button>
                                                            <button className="btn fw-bold fs-4">{element.amount}</button>
                                                            <button className="basketBtn btn" onClick={()=>{
                                                                allValues.add(element, setBasketProd)
                                                            }}>+</button>
                                                        </div>
                                                    </div>
                                                    <div className="col">
                                                        <h4>${element.price * element.amount}</h4>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                                <div className="container d-flex justify-content-end mt-1">
                                    <button className="btn btn-dark rounded-pill ">Proceed to Payment</button>
                                </div>
                            </>
                    }
                </div>
            </div>
        </>
    )
}