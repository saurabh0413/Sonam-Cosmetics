import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Components/ProductsData/Products";
import Homepage from "./Homepage";
import Singleproduct from "./Singleproduct";
import Cart from "./Cart"
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Singleproduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
