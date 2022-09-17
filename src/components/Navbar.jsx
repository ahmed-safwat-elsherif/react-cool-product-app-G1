import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid justify-content-between gap-5">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div id="navbarNav">
          <ul className="navbar-nav gap-3 flex-row">
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                end
                aria-current="page"
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                aria-current="page"
                to="/products"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                end
                to="/shopping-cart"
              >
                Shopping Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                end
                to="/contact-us"
              >
                Contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
                aria-current="page"
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          {props.products.length > 0 && (
            <span className="badge bg-secondary">{props.products.length}</span>
          )}
        </div>
      </div>
    </nav>
  );
}

// const OurNavLink = (props) => {
//   const { children, to, className } = props;
//   const [isActive , setIsActive] = useState(false);

//   useEffect(()=>{
//     // Do some logic to know if the current url path is matching the "to" prop or not
//   // if URL path is matching the "to" prop => setIsActive(true)
//   // if URL path isnot matching the "to" prop => setIsActive(false)
//   },[to])

//   let _internalClassNames = "";

//   if (typeof className === "function") {
//     _internalClassNames = className({ isActive: true });
//   } else {
//     _internalClassNames = className;
//   }
//   return <a className={_internalClassNames}>{children}</a>;
// };

// Usage of OurNavLink:

// <OurNavLink
//   className={({ isActive }) =>
//     isActive ? "nav-link active-link" : "nav-link"
//   }
//   end
//   to="/about"
// >
//   About
// </OurNavLink>

// /shopping-cart
// to = "/"

const isActive = "/shopping-cart".includes("/");
