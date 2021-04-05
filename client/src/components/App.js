import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./app.css";

// Import components
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import JoinUs from "./JoinUs/JoinUs";
import Portfolio from "./Portfolio/Portfolio";
import Landing from "./Landing/Landing";
import Book from "./Book/Book";
import BlogRouter from "./Blog/BlogRouter";
import BlogMenu from "./Blog/BlogMenu/BlogMenu";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>internn | think Students.</title>
      </Helmet>
      <div id="page-container">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/join-us" component={JoinUs} />
        <Route path="/blog" component={BlogRouter} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/book" component={Book} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
