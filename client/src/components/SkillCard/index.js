import React from 'react';
import { Card, CardTitle, CardText, Col, Row } from 'reactstrap';
import './style.css';



const SkillCard = (props) => {

    return (
        <>
            <Row>

                < Col md="4" >
                    <Card body className="mt-4">
                        <CardTitle className="text-success"><h4> {props.data[0].type} </h4></CardTitle>
                        <CardText >{props.data[0].skills.map((item) =>
                            <ul>{item}</ul>
                        )}</CardText>
                    </Card>
                </Col >

                < Col md="4" >
                    <Card body className="mt-4">
                        <CardTitle className="text-success"><h4> {props.data[1].type} </h4> </CardTitle>
                        <CardText >{props.data[1].skills.map((item) =>
                            <ul>{item}</ul>
                        )}</CardText>
                    </Card>
                </Col >

                < Col md="4" >
                    <Card body className="mt-4">
                        <CardTitle className="text-success"> <h4> {props.data[2].type} </h4> </CardTitle>
                        <CardText >{props.data[2].skills.map((item) =>
                            <ul>{item}</ul>
                        )}</CardText>
                    </Card>
                </Col >
            </Row>
            <Row>
                <Col md="12">
                    <Card body className="mt-4 mb-5">
                        <CardTitle className="text-success"> <h4> {props.data[3].type} </h4></CardTitle>
                        <CardText >{props.data[3].skills.map((item) =>
                            <ul>{item}</ul>
                        )}</CardText>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default SkillCard;




