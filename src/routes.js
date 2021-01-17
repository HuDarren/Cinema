import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';
import LandingHome from "./Landing/landingHome"
import Blog from "./Blog/blogHome"

function Routes() {
  return (
    <div className="wrapper">
      <h1>Marine Mammals</h1>
        <Switch>
      <Route exact path="/home" component={LandingHome} />
        <Route exact path="/view" component={Blog} />
        </Switch>
    </div>
  );
}

export default Routes;
