import React, { Fragment, useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Electronics.scss";
import Image from "./Image.svg";

export default function Electronics() {
  const [products, setProducts] = useState([]);

  const productCollectionRef = collection(db, "electronics");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productCollectionRef);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };

    getProducts();
  }, []);
  return (
    <Fragment>
      <div className="electronics">
        <div style={{ width: "266px", height: "279px" }}>
          <img src={Image} style={{ width: "100%", height: "100%" }} />
        </div>
        <ul className="electronics-container">
          {products.map((item) => (
            <li className="items">
              <div className="item-details">
                <p style={{ fontSize: "15px" }}>{item.productName}</p>
                <p style={{ fontSize: "12px" }}>{item.price}</p>
              </div>
              <div className="image-container">
                <img src={item.image} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
