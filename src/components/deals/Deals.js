import React, { Fragment, useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./Deals.scss";

export default function Deals() {
  const [products, setProducts] = useState([]);

  const productCollectionRef = collection(db, "deals");

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
      <ul className="deals-container">
        <p>
          <strong>Deals and offers</strong>
        </p>
        {products.map((item) => (
          <li className="items">
            <div>
              <div className="image-container">
                <img src={item.image} />
              </div>
              <div className="item-details">
                <p>Title: {item.productName}</p>
                <p
                  style={{
                    backgroundColor: "#FFE3E3",
                    width: "2rem",
                    padding: "0.2rem 1rem",
                    color: "#EB001B",
                    borderRadius: "1rem",
                    justifySelf: "center",
                  }}
                >
                  {item.discount}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
