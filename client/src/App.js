import React from "react";
import { Container, Row, Col } from 'reactstrap';
import BioCard from './components/BioCard';
import Nav from './components/Nav';
import PortfolioCard from './components/PortfolioCard';
import SkillsCard from './components/SkillCard';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Nav />
        </Col>
      </Row>
    </Container>

  );
}

export default App;
