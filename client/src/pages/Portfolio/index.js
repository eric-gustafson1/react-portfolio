import React from "react";
import { Container, Row, Col } from 'reactstrap';
import PortfolioCard from '../../components/PortfolioCard'

const Portfolio = () => {
    return (
        <Container className="container">
            <h1 className="text-success">Portfolio</h1>
            <h3 className="text-success">Recent Work</h3>
            <Row>
                <Col>
                    <PortfolioCard />
                </Col>
            </Row>
        </Container>

    )
}

export default Portfolio;