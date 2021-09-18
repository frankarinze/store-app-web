import { useContext } from "react";
import { BASE_URL } from "../../api";
import CartContext from "../../context/CartContext";
import "./cart.css";

export const CartItem = ( { item } : any ) => {
    
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  console.log(item.name, 'item is here')
  return (
    <>
    {item && (
        <li className='CartItem__item'>
          <div className="cart-item-wrapper">
           <div className="cart-item-meta">
            <h1 className="cart-item-name">{item.name} </h1>
            <h1 className="cart-item-price">${item.price} </h1>
          </div>
          <img className="cart-item-img" src={BASE_URL + item.image.url} alt='' />
          {/* <button className='CartItem__button' onClick={() => removeItem(item.id)}>
            Remove
          </button> */}
          </div>
          <div className="border-b my-3 border-gray-300"></div>
      </li>
    )}
    </>
    
    
  );
};

