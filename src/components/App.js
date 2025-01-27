import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./app.scss";

// Import components
import AboutUsRouter from "./AboutUs";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import JoinUs from "./JoinUs/JoinUs";
import Portfolio from "./Portfolio/Portfolio";
import Landing from "./Landing";
import BlogRouter from "./Blog/BlogRouter";
import Terms from "./Terms/Terms";
import NotFound from "./NotFound/NotFound";
import WhyInternn from "./WhyInternn";

// Import contexts
import { ImageDataContextProvider } from "../contexts/ImageDataContext";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>internn | Aberdeen Property Photography </title>
        <meta
          name="description"
          content="Aberdeen Property photography services, provided by the best students for a fraction of the price. Leading a new, low-cost alternative to property photography in Aberdeen."
        />
      </Helmet>
      <div id="page-container">
        <Header />
        <ImageDataContextProvider>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/about-us" component={AboutUsRouter} />
            <Route path="/why-internn" component={WhyInternn} />
            <Route exact path="/join-us" component={JoinUs} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route path="/blog" component={BlogRouter} />
            <Route path="/terms-and-conditions" component={Terms} />
            <Route path="/" component={NotFound} />
          </Switch>
        </ImageDataContextProvider>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
