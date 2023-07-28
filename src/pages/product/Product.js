import { PageTitle } from "../../layouts/pageTitle/PageTitle";
import "./_product.scss";
import { ProductsGroup } from "./productsGroup/ProductsGroup";


export const Product = () => {
    return (
        <>
            <div className="product">
                <PageTitle>PRODUCT</PageTitle>

                <ProductsGroup />
            </div>
        </>
    )
}