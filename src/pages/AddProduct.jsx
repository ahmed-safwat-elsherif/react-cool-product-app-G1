import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export const AddProduct = (props) => {
  const { onAddProduct } = props;
  const navigate = useNavigate();

  // Method 1: DOM Manipulation ❌ DON'T
  //   const handleSubmit = (event) => {
  //     console.log("submit");
  //     event.preventDefault();
  //     const name = document.querySelector("#product-name").value;
  //     const price = document.querySelector("#product-price").value;
  //     console.log({ name, price });
  //   };

  // Method 2: using React Refs 😕 TRY NOT TO USE IT "Uncontrolled Component"
  //   const refName = useRef();
  //   const refPrice = useRef();
  //   const handleSubmit = (event) => {
  //     console.log("submit");
  //     event.preventDefault();
  //     console.log(refName.current);
  //     console.log(refPrice.current);
  //     const name = refName.current.value;
  //     const price = refPrice.current.value;
  //     console.log({ name, price });
  //   };
  const [formState, setFormState] = useState({
    name: "",
    price: "",
  });
  const [formErrors, setFormErrors] = useState({});
  // Method 3: states "Controlled Component" ✅
  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      onAddProduct(formState);
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
    // {name:"Product name must be added" , price:"Product price must be added"}
    // if errors Obj properties is empty => no errors => valid
    // if errors Obj has properties  => has errors => invalid
    setFormErrors(errors);
    return !Object.keys(errors).length;
  };

  // What happens behind the scene :
  /**
   * 1- bind the state values => inputValue to the form
   * 2- send the new values to the state (update the state).
   */

  //   const handleOnChangeName = (event) => {
  //     const newVal = event.target.value;
  //     setFormState((prevState) => ({ ...prevState, name: newVal }));
  //   };
  //   const handleOnChangePrice = (event) => {
  //     const newVal = event.target.value;
  //     setFormState((prevState) => ({ ...prevState, price: newVal }));
  //   };

  // Method 3 [Enhanced] :
  const handleOnChange = (event) => {
    const newVal = event.target.value;
    const propertyName = event.target.name;
    setFormState((prevState) => ({ ...prevState, [propertyName]: newVal }));
  };
  return (
    <>
      <h2>Add new product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="product-name" className="form-label">
            Name
          </label>
          <input
            //   ref={refName}
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
            //   ref={refPrice}
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
