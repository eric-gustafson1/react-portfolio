import React from "react";
import { Container, Row, Col } from 'reactstrap';
import SkillCard from '../../components/SkillCard';
import BioCard from '../../components/BioCard';
import './style.css'
import data from '../../data/skills.json';



const About = () => {
    return (
        < Container className="about-container" >
            <Row>
                <Col>
                    <BioCard />
                </Col>
            </Row>

            <h1 className="text-success">Skill Sets</h1>

            <SkillCard data={data} />

        </Container >

    );
}

export default About;
