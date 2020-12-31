import { BrowserRouter, Route } from "react-router-dom";

// Import components
import Header from "./Header/Header";
import Landing from "./Landing/Landing";
import About from "./About/About";
import Pricing from "./Pricing/Pricing";
import Contact from "./Contact";
import Footer from "./Footer";
import JoinUs from "./JoinUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/" component={Landing} />
      <Route exact path="/" component={About} />
      <Route exact path="/" component={Pricing} />
      <Route exact path="/" component={Contact} />
      <Route exact path="/join-us" component={JoinUs} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
