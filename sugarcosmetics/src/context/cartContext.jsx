import React from "react";
import { useContext } from "react";
import { createContext } from "react";
import cartReducer from "../reducers/carts/cartReducer";

export const cartOne = createContext();
const CartContext = ({ children }) => {
  const [state, dispatch] = useContext(cartReducer, cartOne);
  return (
    <cartOne.Provider value={{ state, dispatch }}>{children}</cartOne.Provider>
  );
};

export default CartContext;
