import React from "react";
import { Link, Outlet } from "react-router-dom";

export const About = () => {
  return (
    <>
      <h3>About Page</h3>
      <div>
        <ul>
          <li>
            <Link to="/about/team" className="btn btn-link">
              Our team
            </Link>
          </li>
          <li>
            <Link to="/about/company" className="btn btn-link">
              Our Company
            </Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};
