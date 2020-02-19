
import React from 'react';
import { Link } from "react-router-dom";

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Container, Row, Col
} from 'reactstrap';
import image from '../../assets/EricHeadShot.jpg'
import './style.css';

const BioCard = () => {

    return (
        <>
            <Container>


                <Card className="mx-auto">
                    <Row>
                        <Col md="2">
                            <CardImg className="image m-2" top width="100%" src={image} alt="Card image cap" />
                        </Col>
                        <Col md="10">
                            <CardBody>
                                <CardTitle className="text-success font-weight-bold" ><h1>Eric Gustafson</h1></CardTitle>
                                <CardSubtitle className="text-monospace">DevOps Engineer</CardSubtitle>
                                <CardText className="mt-3">
                                    Hello, I'm Eric. Infrastructure-as-a-Service
                    engineer working on
                    dispersed global teams. Independent contributor collaborating across
                    teams to meet shared organizational goals. Create scripts for implementing production changes
                    and ad hoc reporting on an infrastructure spread across data centers in the US, UK, and Asia. Manage
                    tasks with
                    Jira and source code in
                    BitBucket. Author wiki to document environment configuration and troubleshooting for Operations teams.
                    Contribute code to automation
                    efforts related to organization’s private cloud portal. Work closely with vendors on innovating existing
                    infrastructure. Background
                    and technical skills provide a solid platform for both development and devops roles.
                                    </CardText>
                                <Link to="/portfolio" className="btn m-2 btn-success">View Portfolio</Link>
                                <Link to="/resume" className="btn m-2 btn-success">View Resume</Link>
                            </CardBody>
                        </Col>
                    </Row>
                </Card>

            </Container>
        </>
    );
};
export default BioCard;
