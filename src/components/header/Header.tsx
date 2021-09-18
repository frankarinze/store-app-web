import Button from "../../components/button";
import bgHeader from "../../assets/images/header-bg.jpeg"
import "./header.css"
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { BASE_URL } from "../../api";
import { HeaderProps } from "../../types";
import { HeaderMeta } from "../section/Section";
import { SideBar } from "../sidebar/sidebar";

const Header = ({
    onClick,
    productTitle,
    img,
    category,
    details,
}: HeaderProps) => {
    console.log(details, 'check description')
    return (
        <div>
            <div className="relative ">
                <div className="flex justify-between px-3 py-4 ">
                    <h1 className="featured-product-title">{productTitle}</h1>
                    <Button
                        name="ADD TO CART"
                        className="featured-product-btn "
                        onClick={onClick}
                    />
                </div>
                <div className="header-banner-wrapper">
                    <img src={BASE_URL + img?.url} className="object-contain h-auto w-full relative" alt="bg" />
                    <h1 className="header-banner-title">Photo of the day</h1>
                </div>
                <Button
                    name="ADD TO CART"
                    className="featured-product-btn-mobile"
                    onClick={onClick}
                />
            </div>
            
            <div>
                <div className="section-wrapper">
                    <div className="section-left">
                        <h1 className="product-title">About {productTitle}</h1>
                        <p className="product-category">{category}</p>
                        <p className="product-description">
                            {details?.description}
                        </p>
                    </div>
                    <div className="section-right">
                        <SideBar />
                    </div>
                </div>
                <div className="border-b-2 m-3 border-gray-300"></div>
            </div>

        </div>
    );
}
export default Header;