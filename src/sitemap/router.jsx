import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

export default (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" />
      <Route exact path="/join-us" />
      <Route exact path="/portfolio" />
      <Route path="/blog">
        <Switch>
          <Route exact path="/"></Route>
          <Route path="/prepare-your-property"></Route>
        </Switch>
      </Route>
      <Route path="/terms-and-conditions" />
      <Route path="/" />
    </Switch>
  </BrowserRouter>
);
