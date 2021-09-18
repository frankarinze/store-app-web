import { CloseOutlined } from "@ant-design/icons";

import { useContext } from "react";
// import "./Cart.css";
import CartContext from "../../context/CartContext";
import Button from "../button";
import { CartItem } from "./cartItem";

export const Cart = ({onClick}: any) => {
  const { showCart, cartItems, showHideCart, clearCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  console.log(cartItems, 'its in cart');
  return (
    <>
      {!showCart && (
        <div className=''>
          <div className="flex justify-end mb-2">
           <button onClick={onClick} >
           <CloseOutlined className="text-black font-black text-sm" />
          </button>
          </div>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          <div className='cart__innerWrapper'>
            {cartItems?.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems?.map((item) => (
                  <CartItem key={`${item?.id}-${item.name}`} item={item} />
                ))}
              </ul>
            )}
          </div>
          <Button
            name="CLEAR CART"
            className="px-8 w-full py-2 text-white bg-black  hover:bg-grey-200"
            onClick={() => clearCart()}
          />
        </div>
      )}
    </>
  );
};
