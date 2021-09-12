import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AboutPage from "./AboutPage";
import PersonProfile from "./PersonProfile";

const AboutUsRouter = () => {
  let { url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${url}/`}>
        <AboutPage />
      </Route>
      <Route path={`${url}/:name`}>
        <PersonProfile />
      </Route>
    </Switch>
  );
};

export default AboutUsRouter;
