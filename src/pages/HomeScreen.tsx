import React, { useContext, useEffect, useState } from "react";
import { BreadCrumb } from "../components/breadcrumb/breadcrumb";
import Header from "../components/header/Header";
import { ProductFilter } from "../components/product/productFilter";
import { ProductList } from "../components/product/productList";
import { HeaderMeta } from "../components/section/Section";
import CartContext from "../context/CartContext";
import {Category, PriceRange, products} from "../data";
import axios from "axios";
import {useProducts, useResponsive} from "../hooks";
import { PriceFilter } from "../components/product/priceFilter";
import { time } from "console";
import { Item } from "../types";


const HomeScreen = () => {
  const { addToCart } = useContext(CartContext);
  const getProducts = useProducts();
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    if (!getProducts) {
      return;
    }
    // @ts-ignore
    setProductData(getProducts.data);
 }, [getProducts])

 const [isTabletOrMobileDevice, isBigScreen, isDesktopOrLap] = useResponsive();

  
  const priceRangeOne = () => {
    let sortedPriceRangeOne = getProducts.data.filter((item) => item.price > 51 && item.price <= 1000).sort((a, b) => {
      return a?.price - b?.price;
    });
    // @ts-ignore
    setProductData(sortedPriceRangeOne);
  }

  const priceRangeTwo = () => {
    let sortedPriceRangeTwo = getProducts.data.filter((item) => item.price > 0 && item.price <= 50).sort((a, b) => {
      return b?.price - a?.price;
    });
    // @ts-ignore
    setProductData(sortedPriceRangeTwo)
  }

  console.log(getProducts.data, 'check state')

  const clearSorting = () => {
    // @ts-ignore
    setProductData(getProducts.data)
  }


  return (
    <div className='py-20 '>
      {getProducts && getProducts?.data.map((item, key) => (
        item?.featured ? (
          <Header
          key={key}
          onClick={() => addToCart(item)}
          productTitle={item.name}
          img={item.image}
          category={item.category}
          details={item?.details}
          />
        ):
        ''
      ))}
      {/* <HeaderMeta /> */}
      <BreadCrumb
      resetSort={clearSorting}
      sortRangeOne={priceRangeOne}
      sortRangeTwo={priceRangeTwo}
      />
      {isBigScreen ? 
        <ProductList product={productData}/>
      : 
      <div className=" lg:flex lg:justify-between md:flex md:justify-between ">

        <div>

        <ProductFilter
          data={Category}
        />
        <div className="border-b my-3 lg:mx-4 border-gray-300"></div>

        <PriceFilter
        data={PriceRange}
        />
        </div>
        <ProductList product={productData}/>
      </div>
    }
    </div>
  );
};

export default HomeScreen;