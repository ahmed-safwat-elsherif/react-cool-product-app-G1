import React from "react";
import { Product } from "../components/Product";
export default function ShoppingCart(props) {
  return (
    <>
      <div className="d-flex justify-content-bewteen flex-wrap gap-2">
        <h2 className="flex-fill">Shopping Cart</h2>
        <button className="btn btn-primary">Reset Count</button>
      </div>
      <hr />
      <div className="d-flex flex-wrap gap-2">
        {props.products.map((productItem) => (
          <Product
            mode="cart"
            key={productItem.id}
            prdct={productItem}
            onDeleteProduct={props.onDelete}
            onIncrementProductCount={props.onIncrement}
            onDecrementProductCount={props.onDecrement}
          />
        ))}
        {props.products.length === 0 && (
          <h3 className="text-muted text-center flex-fill">
            Your shopping cart is empty 🙄
          </h3>
        )}
      </div>
    </>
  );
}
