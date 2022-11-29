import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../Components/ProductsData/Products";
import Homepage from "./Homepage";
import Singleproduct from "./Singleproduct";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:title" element={<Singleproduct />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
