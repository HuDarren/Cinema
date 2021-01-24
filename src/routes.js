import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import LandingHome from "./Landing/landingHome";
import Database from "./Blog/blog1";
import Network from "./Blog/blog2";
import ReactHook from "./Blog/blog3";
import RestApi from "./Blog/blog4";

function Routes() {
  return (
    <div className="">
      <Switch>
        <Route component={LandingHome} />
        <Route exact path="/blog/database" component={Database} />
        <Route exact path="/blog/networks" component={Network} />
        <Route exact path="/blog/reactHooks" component={ReactHook} />
        <Route exact path="/blog/restAPI" component={RestApi} />
      </Switch>
    </div>
  );
}

export default Routes;
