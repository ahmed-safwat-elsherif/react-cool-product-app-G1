import React from "react";
import { Link } from "react-router-dom";

export const ProductsTable = (props) => {
  const { products } = props;
  return (
    <>
      <div className="d-flex justify-content-end">
        <Link to="product/add" className="btn btn-success">
          Add new product
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <th scope="row">{index + 1}</th>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`product/edit/${product.id}`}
                  className="btn btn-primary"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
