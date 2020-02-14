
import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import image from '../../assets/EricHeadShot.jpg'
import './BioCard.css'

const BioCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg className="image m-2" top width="100%" src={image} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="text-dark font-weight-bold" >Eric Gustafson</CardTitle>
                    <CardSubtitle className="text-monospace">DevOps Engineer</CardSubtitle>
                    <CardText className="mt-3">Hello, I'm Eric. Full Stack Web Developer with a background as an Infrastructure-as-a-Service engineer working on dispersed global teams. Successfully operationalized a new virtualization platform at a Fortune 500 company. Independent contributor collaborating across teams to meet shared organizational goals. Create scripts for implementing production changes and ad hoc reporting on a 450 node hypervisor infrastructure spread across data centers in the US, UK, and Asia. Manage tasks with Jira and source code in BitBucket. Author wiki to document environment configuration and troubleshooting for Operations teams. Contribute code to automation efforts related to organization’s private cloud portal. Work closely with vendors on innovating existing infrastructure. Background and technical skills provide a solid platform for both development and devops roles.</CardText>
                    <Button className="m-2">View Portfolio</Button>
                    <Button className="m-2">View Resume</Button>
                </CardBody>
            </Card>
        </div>
    );
};
export default BioCard;
