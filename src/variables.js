import prod1 from "./assets/images/products/product1.jpg"
import prod2 from "./assets/images/products/product2.jpg"
import prod3 from "./assets/images/products/product3.jpg"
import prod4 from "./assets/images/products/product4.jpg"
import prod5 from "./assets/images/products/product5.jpg"
import prod6 from "./assets/images/products/product6.jpg"
import prod7 from "./assets/images/products/product7.jpg"
import prod8 from "./assets/images/products/product8.jpg"
import prod9 from "./assets/images/products/product9.jpg"
import prod10 from "./assets/images/products/product10.jpg"
import prod11 from "./assets/images/products/product11.jpg"
import prod12 from "./assets/images/products/product12.jpg"
import prod13 from "./assets/images/products/product13.jpg"
import prod14 from "./assets/images/products/product14.jpg"
import prod15 from "./assets/images/products/product15.jpg"
import prod16 from "./assets/images/products/product16.jpg"
import prod17 from "./assets/images/products/product17.jpg"

const prod = (name, src, price, tag, categorie, amount, desc) => ({
    name,
    src,
    price,
    tag,
    categorie,
    amount,
    desc,
});

const product1 = prod("prod1", prod1, 99, "sale", "men", 0, "prod1 desc")
const product2 = prod("prod2", prod2, 125, "old", "women", 0, "prod2 desc")
const product3 = prod("prod3", prod3, 150, "new", "men", 0, "prod3 desc")
const product4 = prod("prod4", prod4, 88, "old", "kids", 0, "prod4 desc")
const product5 = prod("prod5", prod5, 144, "sale", "men", 0, "prod5 desc")
const product6 = prod("prod6", prod6, 266, "new", "women", 0, "prod6 desc")
const product7 = prod("prod7", prod7, 99, "sale", "men", 0, "prod6 desc")
const product8 = prod("prod8", prod8, 24, "new", "women", 0, "prod6 desc")
const product9 = prod("prod9", prod9, 444, "old", "men", 0, "prod6 desc")
const product10 = prod("prod10", prod10, 214, "new", "women", 0, "prod6 desc")
const product11 = prod("prod11", prod11, 512, "old", "women", 0, "prod11 desc")
const product12 = prod("prod12", prod12, 342, "old", "kids", 0, "prod11 desc")
const product13 = prod("prod13", prod13, 124, "new", "women", 0, "prod11 desc")
const product14 = prod("prod11", prod14, 142, "new", "kids", 0, "prod11 desc")
const product15 = prod("prod11", prod15, 555, "sale", "women", 0, "prod11 desc")
const product16 = prod("prod11", prod16, 142, "old", "kids", 0, "prod11 desc")
const product17 = prod("prod11", prod17, 666, "new", "men", 0, "prod11 desc")

export const allProducts = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15,product16,product17];

