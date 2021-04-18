import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
// import { Footer } from "../components/common/Footer";
// import { Navbar } from "../components/common/Navbar";
// import { DcPage } from "../components/dc/DcPage";
// import { MarvelPage } from "../components/marvel/MarvelPage";
// import { HomePage } from "../views/HomePage";
import { LoginPage } from "../views/LoginPage";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      {/* <Navbar /> */}
      <div>
        <Switch>
          <PublicRoute
            exact
            isAuthenticated={user.logged}
            path="/login"
            component={LoginPage}
          />
          <PrivateRoute
            isAuthenticated={user.logged}
            path="/"
            component={DashboardRouter}
          />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};
