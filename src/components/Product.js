import React, { useEffect, useState } from "react";
import "../styles.css";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [cantidad, setCantidad] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        let info = data.products;
        setProduct(info);
        const productData = {
          total: data.meta.count,
        };
        setCantidad(productData);
        let count = data.meta.countByCategory;
        setCategory(count);
      });
  }, []);

  return (
    <div>
      <div>
        <h3 className="title">Dashboard Unforged</h3>
      </div>
      <div className="body">
        <div className="product_container">
          {cantidad ? (
            <p className="product2">
              {"Cantidad total de productos: " + cantidad.total}
            </p>
          ) : null}

          <ul className="container_product">
            {product.length ? (
              product.map((item, index) => (
                <li className="product" key={index}>
                  <p>{item.name}</p>
                </li>
              ))
            ) : (
              <li> No se encontraron productos </li>
            )}
          </ul>
        </div>

        <div className="bigStacks">
          <h5 className="title_collection">Cantidad por colección</h5>

          <ul>
            <div>
              {category.length ? (
                category.map((item, index) => (
                  <li className="product5" key={index}>
                    <p>{item.name}</p>
                    <p>{item.count}</p>
                  </li>
                ))
              ) : (
                <li> No se encontraron productos </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Product;
