import React from 'react';
import { Card, CardTitle, CardText, Col, Row } from 'reactstrap';


const SkillCard = (props) => {

    return (
        <>
            <Row>

                < Col sm="4" >
                    <Card body>
                        <CardTitle className="text-success">{props.data[0].type}</CardTitle>
                        <CardText >{props.data[0].skills.map((item) =>
                            <ul>{item}</ul>
                        )}</CardText>
                    </Card>
                </Col >

                < Col sm="4" >
                    <Card body>
                        <CardTitle className="text-success">{props.data[1].type}</CardTitle>
                        <CardText >{props.data[1].skills.map((item) =>
                            <ul>{item}</ul>
                        )}</CardText>
                    </Card>
                </Col >

                < Col sm="4" >
                    <Card body>
                        <CardTitle className="text-success">{props.data[2].type}</CardTitle>
                        <CardText >{props.data[2].skills.map((item) =>
                            <ul>{item}</ul>
                        )}</CardText>
                    </Card>
                </Col >
            </Row>
            <Row>
                <Col sm="12">
                    <Card body>
                        <CardTitle className="text-success">{props.data[3].type}</CardTitle>
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




