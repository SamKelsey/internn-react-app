import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import AboutPage from "./AboutPage";
import PersonProfile from "./PersonProfile";
import { TeamDataContextProvider } from "../../contexts/TeamDataContext";

const AboutUsRouter = () => {
  let { url } = useRouteMatch();

  return (
    <TeamDataContextProvider>
      <Switch>
        <Route exact path={`${url}/`}>
          <AboutPage />
        </Route>
        <Route path={`${url}/:name`}>
          <PersonProfile />
        </Route>
      </Switch>
    </TeamDataContextProvider>
  );
};

export default AboutUsRouter;
