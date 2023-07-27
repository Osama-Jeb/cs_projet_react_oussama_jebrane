import "./_product.scss";
import { ProductsGroup } from "./productsGroup/ProductsGroup";


export const Product = () => {
    return (
        <>
            <div className="product">
                <div className="productHero">
                    <h1 className="text-light fw-bolder m-0">PRODUCT</h1>
                </div>

                <ProductsGroup />
            </div>
        </>
    )
}