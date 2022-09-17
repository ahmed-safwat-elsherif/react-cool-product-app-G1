import React from "react";
import { Product } from "../components/Product";

export const ProductList = (props) => {
  const { products, onAddToCart } = props;
  return (
    <>
      <h2>All Products</h2>
      <hr />
      <div className="d-flex flex-wrap gap-2">
        {products.map((productItem) => (
          <Product
            key={productItem.id}
            prdct={productItem}
            onAddToCart={onAddToCart}
          />
        ))}
        {products.length === 0 && (
          <h3 className="text-muted text-center flex-fill">
            No products found
          </h3>
        )}
      </div>
    </>
  );
};
