import React, { Component } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Container } from 'reactstrap';
import './style.css'

import pdf from '../Resume/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default class Resume extends Component {
    state = {
        numPages: null,
    }

    onDocumentLoadSuccess = (document) => {
        const { numPages } = document;
        this.setState({
            numPages,
        });
    };

    render() {
        const { numPages } = this.state;
        return (
            <Container className="mt-5 resume-container">
                <Document
                    file={pdf}
                    onLoadSuccess={this.onDocumentLoadSuccess}
                    onLoadError={console.error}
                >
                    {Array.from(
                        new Array(numPages),
                        (el, index) => (
                            <Page
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                width={1000}
                            />
                        ),
                    )}
                </Document>
            </Container>
        );
    }
}