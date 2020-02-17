import React from "react";
import CardTitleTextComponent from "../CardTitleTextComponent";
import { CardTitle } from 'reactstrap';



function CardTitleComponent({ title }) {
    return (
        <CardTitle>
            <CardTitleTextComponent className="CardTitle" title={title} />
        </CardTitle>
    );
}

export default CardTitleComponent;
