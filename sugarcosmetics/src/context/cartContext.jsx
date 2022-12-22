import axios from "axios";
import React, { useReducer } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { AddtocartRequest, getCartDataRequest } from "../reducers/carts/action";
import cartReducer from "../reducers/carts/cartReducer";
import { initialData } from "../reducers/carts/cartReducer";

export const CartOne = createContext();
const CartContext = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialData);

  const addtoCart = async (data) => {
    await axios
      .post("http://localhost:8080/cart", data)
      .then((res) => {
        console.log("data added");
      })
      .catch((err) => {
        console.log("err while posting cart data");
      });
  };
  useEffect(() => {
    getCartData();
  }, []);
  const getCartData = async () => {
    await axios.get("http://localhost:8080/cart").then((res) => {
      dispatch(getCartDataRequest(res.data));
    });
  };
  return (
    <CartOne.Provider value={{ state, dispatch, addtoCart, getCartData }}>
      {children}
    </CartOne.Provider>
  );
};

export default CartContext;
