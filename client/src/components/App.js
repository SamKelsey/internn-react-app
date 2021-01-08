import { BrowserRouter, Route } from "react-router-dom";
import "./app.css";

// Import components
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import JoinUs from "./JoinUs/JoinUs";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <div id="page-container">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Pricing} />
        <Route exact path="/" component={Contact} />
        <Route exact path="/join-us" component={JoinUs} />
        <Route exact path="/portfolio" component={Portfolio} />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
