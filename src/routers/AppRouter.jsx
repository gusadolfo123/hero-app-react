import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Footer } from "../components/common/Footer";
// import { Navbar } from "../components/common/Navbar";
// import { DcPage } from "../components/dc/DcPage";
// import { MarvelPage } from "../components/marvel/MarvelPage";
// import { HomePage } from "../views/HomePage";
import { LoginPage } from "../views/LoginPage";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <div>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};
