import { Action, State } from "../types";
import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CLEAR_TO_CART } from "./Types";

function CartReducer(state: State, action: Action) {
    switch (action.type) {
      case SHOW_HIDE_CART: {
        return {
          ...state,
          showCart: !state.showCart,
        };
      }
      case ADD_TO_CART: {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
      case REMOVE_ITEM: {
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item: { id: any; }) => item?.id !== action.payload
          ),
        };
      }
      case CLEAR_TO_CART: {
        return {
          ...state,
          cartItems: []
        };
      }
      default:
        return state;
    }
  };
  
  export default CartReducer;