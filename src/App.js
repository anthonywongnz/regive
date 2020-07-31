import React from "react";

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Donate from "./views/Donate";
import Listing from "./views/Listing";
import Donated from './views/Donated'

function App() {
  return (
    <div className="relative pb-10 min-h-screen font-body">
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/donated">
              <Donated />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/donate/">
              <Donate />
            </Route>
            <Route path="/listing/">
              <Listing />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
