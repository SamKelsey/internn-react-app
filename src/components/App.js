import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./app.scss";

// Import components
import AboutUs from "./AboutUs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import JoinUs from "./JoinUs/JoinUs";
import Portfolio from "./Portfolio/Portfolio";
import Landing from "./Landing";
import BlogRouter from "./Blog/BlogRouter";
import Terms from "./Terms/Terms";
import NotFound from "./NotFound/NotFound";

import smoothscroll from "smoothscroll-polyfill";

function App() {
  smoothscroll.polyfill();
  return (
    <BrowserRouter>
      <Helmet>
        <title>Aberdeen Property Photography | internn</title>
        <meta
          name="description"
          content="Aberdeen Property photography services, provided by the best students for a fraction of the price. Leading a new, low-cost alternative to property photography in Aberdeen."
        />
      </Helmet>
      <div id="page-container">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/join-us" component={JoinUs} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/blog" component={BlogRouter} />
          <Route path="/terms-and-conditions" component={Terms} />
          <Route path="/" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
