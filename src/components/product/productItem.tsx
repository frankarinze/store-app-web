import Button from "../button"
import dummyImg from "../../assets/images/img-2.jpeg"
import { BASE_URL } from "../../api"
import { Item, ProductItemProps } from "../../types"


export const ProductItem = ({
    tag,
    children,
    img,
    category,
    name,
    price,
    onClick,
}: ProductItemProps ): JSX.Element => {
    console.log(tag, 'check tag')
    return (
        <div>
            
            <div className="product-img-wrapper">
                <img src={BASE_URL + img.url} className="object-contain  relative" alt="product-img"></img>
                <h1 className="product-tag">{tag ? 'Bestseller' : ''}</h1>
                <Button
                    name="ADD TO CART"
                    className="product-btn"
                    onClick={onClick}
                />
            </div>
            <div className="text-left">
            <p className=" text-gray-600">{category}</p>
            <p className="font-bold text-lg">{name}</p>
            <p>$<span className=" text-gray-600">{price}</span></p>
            </div>
        </div>
    )
}
