import React from "react";
import { Container, Row, Col } from 'reactstrap';
import BioCard from './components/BioCard';
import SkillsCard from './components/SkillCard';

const App = () => {
    return (
        <Container>
            <Row>
                <BioCard />
            </Row>

        </Container>

    );
}

export default App;
