import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { ActionTypes } from "../../types/actionTypes";

export const Navbar = () => {
  const history = useHistory();

  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: ActionTypes.Logout,
    });

    history.replace("/login");
  };

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

        <span className="nav-item nav-link text-info"> {name} </span>

        {name ? (
          <button className="btn btn-outline-light" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <NavLink
            activeClassName="active"
            className="nav-link text-decoration-none text-light"
            exact
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
};
