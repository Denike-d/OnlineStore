import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ProductPage from "./ProductPage.js";
import "./Data.scss";

export default function Data() {
  const [data, setData] = useState([{}]);

  // fetch("https://fakestoreapi.com/products?limit=4")
  //   .then((res) => res.json())
  //   .then((json) => setData(json));

  const productCollectionRef = collection(db, "items");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getProducts();
  }, []);
  return (
    <div>
      <div className="data">
        {data.map((product) => (
          <ProductPage
            key={product.id}
            id={product.id}
            title={product.productName}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
