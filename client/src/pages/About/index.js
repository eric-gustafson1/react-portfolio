import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SkillCard from '../../components/SkillCard';
import BioCard from '../../components/BioCard';
import './style.css'


const About = () => {
    return (
        <Container className="about-container">
            <Row>
                <Col>
                    <BioCard />
                </Col>
            </Row>

            <Row>
                <SkillCard />
                <SkillCard />
                <SkillCard />
            </Row>

        </Container>

    );
}

export default About;
