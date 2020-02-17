import React from "react";
import { Container, Row, Col } from 'reactstrap';
import PortfolioCard from '../../components/PortfolioCard'

const Portfolio = (props) => {
    console.log(props)
    const portfolios = props;
    return (
        <Container className="container">
            <h1 className="text-success">Portfolio</h1>
            <h3 className="text-success">Recent Work</h3>
            {props.map(item =>
                <Row>
                    <Col>
                        <PortfolioCard
                            img={item.img}
                            title={item.title}
                            repo={item.repo}
                            description={item.description}
                        />
                    </Col>
                </Row>
            )}
        </Container>

    )
}

export default Portfolio;