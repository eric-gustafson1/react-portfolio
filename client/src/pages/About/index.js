import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SkillCard from '../../components/SkillCard';
import BioCard from '../../components/BioCard';

const About = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <BioCard />
                </Col>
            </Row>

            <Row>
                <Col>
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </Col>
            </Row>

        </Container>

    );
}

export default About;
