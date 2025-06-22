import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Services from "./components/Services";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div className="w-full h-screen text-white bg-zinc-800">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
