import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import NavComponent from './components/NavComponent';

const App = () => {
  return (
    <Router>
      <div>
        <NavComponent />

        <Switch>
          <Route exact path={['/', '/about']}>
            <About />
          </Route>

          <Route exact path={'/portfolio'}>
            <Portfolio />
          </Route>

          <Route exact path={'/resume/'}>
            <Resume />
          </Route>

          <Route exact pate={'/contact/'} >
            <Contact />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
