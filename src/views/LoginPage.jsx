import React from "react";
import "./LoginPage.css";

export const LoginPage = ({ history }) => {
  const handleLogin = () => {
    // history.push("/");
    history.replace("/");
  };

  return (
    <div className="main-login">
      <div className="login">
        <h1>Login</h1>
        <div className="login__container">
          <input
            autoComplete="off"
            className="form-control mt-2"
            type="text"
            name="user"
          />
          <input
            autoComplete="false"
            autoCorrect="false"
            className="form-control mt-2"
            type="password"
            name="password"
          />
        </div>
        <div className="login_footer mt-2">
          <button
            onClick={handleLogin}
            className="btn btn btn-outline-light w-100"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
