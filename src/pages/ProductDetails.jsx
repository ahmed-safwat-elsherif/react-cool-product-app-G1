import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = (props) => {
  const { id } = useParams();
  // get all the products
  const { products } = props;
  // using id I can filter the products to get only one product
  const product = products.find((prdct) => prdct.id === id);
  // view product details

  if (!product) return <h2>Product details of id: "{id}" is not found 😥</h2>;

  return (
    <div className="d-flex flex-column">
      <h2>You're viewing the product: {product.name}</h2>
      <h4>With Id: "{product.id}" </h4>
      <hr />
      <h3>
        You have chosen "{product.count}" item{product.count > 1 ? "s" : ""} of
        this product
      </h3>
    </div>
  );
};
