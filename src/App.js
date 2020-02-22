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
    <Router>
      <div>
        <NavComponent />

        <Switch>
          <Route exact path={['/react-portfolio/', '/about']}>
            <About />
          </Route>

          <Route exact path={'/react-portfolio/portfolio'}>
            <Portfolio props={portfolios} />
          </Route>

          <Route exact path={'/react-portfolio/resume/'}>
            <Resume />
          </Route>

          <Route exact pate={'/react-portfolio/contact/'} >
            <Contact />
          </Route>

        </Switch>
        <Footer />

      </div>
    </Router>

  );
}

export default App;
