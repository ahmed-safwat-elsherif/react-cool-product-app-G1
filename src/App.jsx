import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import { NotFoundPages } from "./pages/NotFoundPages";
import { ProductDetails } from "./pages/ProductDetails";
import ShoppingCart from "./pages/ShoppingCart";
import { CompanyInfo } from "./components/CompanyInfo";
import { TeamInfo } from "./components/TeamInfo";
import { EditProduct } from "./pages/EditProduct";
import { ProductList } from "./pages/ProductList";
import { Admin } from "./pages/Admin";
import { ProductsTable } from "./pages/ProductsTable";
import { AddProduct } from "./pages/AddProduct";

const initialProducts = [
  { id: "1", name: "product 1", price: 30, count: 0 },
  { id: "2", name: "product 2", price: 20, count: 0 },
  { id: "3", name: "product 3", price: 64, count: 0 },
  { id: "4", name: "product 4", price: 105, count: 0 },
];

export default function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleIncrement = (productForIncrement) => {
    // clone
    const newProducts = [...products];
    // edit
    const index = newProducts.findIndex(
      (_product) => _product.id === productForIncrement.id
    );
    newProducts[index] = {
      ...newProducts[index],
      count: newProducts[index].count + 1,
    };
    // setState
    setProducts(newProducts);
  };

  const handleDecrement = (productForDecrement) => {
    // clone
    const newProducts = [...products];
    // edit
    const index = newProducts.findIndex(
      (_product) => _product.id === productForDecrement.id
    );
    newProducts[index] = {
      ...newProducts[index],
      count: newProducts[index].count - 1,
    };
    // setState
    setProducts(newProducts);
  };

  const handleDelete = (productForDelete) => {
    // // clone, delete
    // const newProducts = products.filter(
    //   (_product) => _product.id !== productForDelete.id
    // );
    // clone
    const newProducts = [...products];

    // get id of the selected product for delete
    const indexOfProduct = newProducts.findIndex(
      (p) => p.id === productForDelete.id
    );

    // set the count of the selected products to "0"
    newProducts[indexOfProduct] = { ...newProducts[indexOfProduct], count: 0 }; // deep cloning

    // update the state
    setProducts(newProducts);
  };

  const handleReset = () => {
    // reset all the products count to "1"
  };

  const handleOnAddToCart = (product) => {
    // clone
    const newProducts = [...products];
    // edit
    const indexOfProduct = newProducts.findIndex((p) => p.id === product.id);
    // product is already in shopping cart
    if (newProducts[indexOfProduct].count > 0) {
      newProducts[indexOfProduct] = {
        ...newProducts[indexOfProduct],
        count: 0,
      };
    } else {
      newProducts[indexOfProduct] = {
        ...newProducts[indexOfProduct],
        count: 1,
      };
    }
    // update the state
    setProducts(newProducts);
  };

  const handleOnAddProduct = (product) => {
    // NOTE THAT :
    // product = {price :'value' , name:'value'};
    // clone
    const newProducts = [...products];
    // add
    const lastId = newProducts[newProducts.length - 1].id;
    newProducts.push({ ...product, count: 0, id: String(+lastId + 1) });

    // update the state
    setProducts(newProducts);
  };

  const handleOnEditProduct = (product) => {
    console.log(product); // has {price, name, id}
    // clone
    const newProducts = [...products];
    // edit
    const index = newProducts.findIndex((p) => p.id === product.id);
    newProducts[index] = { ...newProducts[index], ...product };
    // update the state
    setProducts(newProducts);
  };

  return (
    <>
      <Navbar products={products.filter((_product) => _product.count > 0)} />
      <main className="container pt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shopping-cart"
            element={
              <ShoppingCart
                products={products.filter((p) => p.count > 0)}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
                onReset={handleReset}
              />
            }
          />
          <Route path="/about" element={<About />}>
            <Route index element={<h3>Choose one of the above links</h3>} />
            <Route path="team" element={<TeamInfo />} />
            <Route path="company" element={<CompanyInfo />} />
          </Route>
          <Route
            path="/product/:id"
            element={<ProductDetails products={products} />}
          />

          <Route
            path="/products"
            element={
              <ProductList
                products={products}
                onAddToCart={handleOnAddToCart}
              />
            }
          />
          <Route path="/admin" element={<Admin products={products} />}>
            <Route index element={<ProductsTable products={products} />} />
            <Route
              path="product/add"
              element={<AddProduct onAddProduct={handleOnAddProduct} />}
            />
            <Route
              path="product/edit/:id"
              element={
                <EditProduct
                  products={products}
                  onEditProduct={handleOnEditProduct}
                />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPages />} />
        </Routes>
      </main>
    </>
  );
}
