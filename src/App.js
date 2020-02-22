import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NavComponent from './components/NavComponent';
import portfolios from './data/portfolio.json'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router basename="/react-portfolio">

      <div>
        <NavComponent />

        <>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={portfolio} />
          <Route exact path="/resume" component={resume} />
          <Route exact path="/contact" component={contact} />
        </>
        <Footer />

      </div>
    </Router >

  );
}

export default App;
