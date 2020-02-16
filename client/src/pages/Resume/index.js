import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';

const Resume = () => {
    return (
        <Container>
            <h1 className="text-success">Online Resume</h1>
            <Button color="success" size="lg" active>Download PDF Version</Button>{' '}
            <Row>
                <Col>
                    <h1>Resume Page</h1>
                </Col>
            </Row>
        </Container>

    )
}

export default Resume;