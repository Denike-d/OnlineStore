import React, { useState } from "react";
import ProductPage from "./ProductPage.js";
import "./Data.scss";

export default function Data() {
  const [data, setData] = useState([{}]);

  fetch("https://fakestoreapi.com/products?limit=4")
    .then((res) => res.json())
    .then((json) => setData(json));

  return (
    <div>
      <div className="data">
        {data.map((product) => (
          <ProductPage
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
