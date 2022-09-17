import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export const EditProduct = (props) => {
  const { onEditProduct, products } = props;
  const { id } = useParams();

  const product = products.find((p) => p.id === id);
  console.log(product);

  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    name: product?.name,
    price: product?.price,
  });

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      onEditProduct({ ...formState, id }); //formState only has { price , name }
      navigate("/admin");
    }
  };

  const validate = () => {
    let errors = {};

    if (!formState.name.trim()) {
      // name is empty
      errors.name = "Product name must be added";
    }
    if (!formState.price) {
      errors.price = "Product Price must be added";
    }
    setFormErrors(errors);
    return !Object.keys(errors).length;
  };

  const handleOnChange = (event) => {
    const newVal = event.target.value;
    const propertyName = event.target.name;
    setFormState((prevState) => ({ ...prevState, [propertyName]: newVal }));
  };

  if (!product) return <h2>Product details of id: "{id}" is not found 😥</h2>;

  return (
    <>
      <h2>Edit product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleOnChange}
            className="form-control"
            id="product-name"
            aria-describedby="emailHelp"
          />
          <div className="form-text text-danger">{formErrors.name}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="product-price" className="form-label">
            Price
          </label>
          <input
            value={formState.price}
            onChange={handleOnChange}
            type="number"
            name="price"
            className="form-control"
            id="product-price"
          />
          <div className="form-text text-danger">{formErrors.price}</div>
        </div>
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <Link to="/admin" className="btn btn-secondary">
            Cancel
          </Link>
        </div>
      </form>
    </>
  );
};
