import React from "react";
import { Container, Row, Col } from 'reactstrap';
import PortfolioCard from '../../components/PortfolioCard'

const Portfolio = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <PortfolioCard />
                </Col>
            </Row>
        </Container>

    )
}

export default Portfolio;