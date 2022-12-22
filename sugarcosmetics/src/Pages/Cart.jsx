import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { CartOne } from "../context/cartContext";

const Cart = () => {
  const { state,getCartData } = useContext(CartOne);
   useEffect(()=>{
    getCartData()
   },[])
  console.log(state,"sate")
  
  return <div>Cart</div>;
};

export default Cart;
