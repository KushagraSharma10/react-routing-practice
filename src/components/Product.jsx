import React from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  const NavigateHandler = (name) => {
    navigate(`/product/detail/${name}`);
  };

  return (
    <div>
      <h1 className="text-5xl font-thin my-5">Products</h1>
      <div className="mb-10">
        <h1 className="text-3xl mb-2 font-thin ">Product 1</h1>
        <button
          onClick={() => NavigateHandler("Product 1")}
          className="px-4 py-2 rounded-md bg-white text-black"
        >
          Show Details
        </button>
      </div>
      <div className="mb-10">
        <h1 className="text-3xl mb-2 font-thin ">Product 2</h1>
        <button
          onClick={() => NavigateHandler("Product 2")}  
          className="px-4 py-2 rounded-md bg-white text-black"
        >
          Show Details
        </button>
      </div>
      <div className="mb-10">
        <h1 className="text-3xl mb-2 font-thin ">Product 3</h1>
        <button
          onClick={() => NavigateHandler("Product 3")}
          className="px-4 py-2 rounded-md bg-white text-black"
        >
          Show Details
        </button>
      </div>
    </div>
  );
};

export default Product;
