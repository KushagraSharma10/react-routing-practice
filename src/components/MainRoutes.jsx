import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";
import About from "./About";
import Services from "./Services";
import ProductDetail from "./ProductDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product/detail/:name" element={<ProductDetail />} />
      <Route path="/service" element={<Services />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default MainRoutes;
