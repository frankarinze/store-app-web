import { useContext, useState } from "react"
import { ProductItem } from "./productItem"
import "./product.css"
// import products from "../../data"
import CartContext from "../../context/CartContext"

export const ProductList = ({product}: any ) => {
    const { addToCart } = useContext(CartContext);
    console.log(product, 'check list')
    return (
        <div className="product-item-wrapper">
            
            {product && product?.map((item: any )=> (
                !item?.featured ? 
                <ProductItem
                        key={item.id}
                        name={item.name}
                        tag={item.bestseller}
                        category={item.category}
                        price={item.price}
                        img={item.image}
                        onClick={() => addToCart(item)} />
                : ''

            ))}
        </div>
    )
}