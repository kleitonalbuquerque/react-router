import "./Content.css";
import { Switch, Route } from "react-router-dom";

import React from "react";
import About from "../../views/examples/About";
import Home from "../../views/examples/Home";

const Content = (props) => (
  <div className="Content">
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Content;
