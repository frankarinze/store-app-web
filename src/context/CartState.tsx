import React, { Reducer, useReducer } from "react";
import { Item } from "../types";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CLEAR_TO_CART } from "./Types";


const CartState: React.FC = ({children}) => {
  const initalState = {
    showCart: false,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item: Item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
   const clearCart = () => {
    dispatch({ type: CLEAR_TO_CART, payload: {} as Item });
   }

  const showHideCart = () => {
    dispatch({ type: SHOW_HIDE_CART, payload: {} as Item });
  };

  const removeItem = (id: any) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        addToCart,
        showHideCart,
        removeItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;