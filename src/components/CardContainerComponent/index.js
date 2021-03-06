import React from "react";
import CardComponent from "../CardComponent";
import { Card, Col } from 'reactstrap';


function CardContainerComponent({ img, title, repo, description }) {
    return (
        <Col md="4">
            <Card style={{ height: "450px" }} className="mt-5">
                <CardComponent
                    img={img}
                    title={title}
                    repo={repo}
                    description={description}
                />
            </Card>
        </Col >
    );
}

export default CardContainerComponent;
