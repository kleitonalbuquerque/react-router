import "./Content.css";
import { Switch, Route } from "react-router-dom";

import React from "react";
import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Param";

const Content = (props) => (
  <div className="Content">
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/param/:id">
        <Param />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default Content;
