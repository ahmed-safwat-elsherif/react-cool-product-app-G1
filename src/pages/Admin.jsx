import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ProductsTable } from "./ProductsTable";

export const Admin = (props) => {
  const { products } = props;
  return (
    <>
      <h2 className="text-center"> -- Admin -- </h2>
      <hr />
      <Outlet />
    </>
  );
};
