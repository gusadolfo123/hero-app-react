import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div
        className="container collapse navbar-collapse"
        id="navbarTogglerDemo01"
      >
        <Link className="navbar-brand" to="/">
          Asociaciones
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </li>
        </ul>
        <NavLink
          activeClassName="active"
          className="nav-link text-decoration-none text-light"
          exact
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};
