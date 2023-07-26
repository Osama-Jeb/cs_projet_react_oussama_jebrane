import prod1 from "./assets/images/products/product1.jpg"
import prod2 from "./assets/images/products/product2.jpg"
import prod3 from "./assets/images/products/product3.jpg"
import prod4 from "./assets/images/products/product4.jpg"
import prod5 from "./assets/images/products/product5.jpg"
import prod6 from "./assets/images/products/product6.jpg"

const prod = (name, src, price, tag, categorie, sold, desc) => ({
    name,
    src,
    price,
    tag,
    categorie,
    sold,
    desc,
});

const product1 = prod("prod1", prod1, 100, "best seller", "men", false, "prod1 desc" )
const product2 = prod("prod2", prod2, 100, "old", "men", false, "prod2 desc" )
const product3 = prod("prod1", prod3, 100, "new", "men", false, "prod3 desc" )
const product4 = prod("prod1", prod4, 100, "old", "men", false, "prod4 desc" )
const product5 = prod("prod1", prod5, 100, "sale", "men", false, "prod5 desc" )
const product6 = prod("prod1", prod6, 100, "best seller", "men", false, "prod6 desc" )

export const allProducts= [product1, product2,product3,product4,product5,product6];
