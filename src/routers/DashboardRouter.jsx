import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Footer } from "../components/common/Footer";
import { Navbar } from "../components/common/Navbar";
import { DcPage } from "../components/dc/DcPage";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { SearchPage } from "../components/search/SearchPage";
import { HeroPage } from "../components/ui/heroes/HeroPage";

export const DashboardRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/marvel" component={MarvelPage} />
          <Route exact path="/heroe/:id" component={HeroPage} />
          <Route exact path="/dc" component={DcPage} />
          <Route exact path="/search" component={SearchPage} />
          <Redirect to="/marvel" />
        </Switch>
      </div>

      <div style={{ height: 80 }}></div>

      <Footer />
    </>
  );
};
