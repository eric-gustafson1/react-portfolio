import React from 'react';
import { Card, CardTitle, CardText, Col, Row } from 'reactstrap';
// import './style.css';



const PortfolioCard = ({ img, title, repo, description }) => {

    return (
        <>
            <Row>
                < Col md="4" >
                    <Card body className="mt-4">
                        <CardTitle className="text-success"><h4> {title} </h4></CardTitle>
                        <CardText >{description}</CardText>
                    </Card>
                </Col >
            </Row>
        </>
    );
};


export default PortfolioCard;