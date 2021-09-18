import { createContext } from "react";
import { Cart } from "../types";

const CartContext = createContext<Cart>({
    showCart: false,
    cartItems: [],
    showHideCart: false,
    addToCart: () => {} ,
    clearCart: () => {}
});

export default CartContext;