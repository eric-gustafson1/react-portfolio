import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BioCard from './components/BioCard';
import Nav from './components/Nav';
import PortfolioCard from './components/PortfolioCard';
import SkillsCard from './components/SkillCard';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path={['/', '/about']}>
            <BioCard />
          </Route>

        </Switch>

      </div>
    </Router>

  );
}

export default App;
