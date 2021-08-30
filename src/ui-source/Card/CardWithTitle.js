import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link'

export default function CardWithTitle(props) {
    const { children, title = "", link = "/" } = props;
    return (
        <div className="card-with-title">
            <Row>
                <Col>
                    <div className="card-with-title__category-title">
                        <h2 className="card-with-title__category-text">
                            <Link href={link}>
                                <a className="card-with-title__category-link">{title}</a>
                            </Link>
                        </h2>
                    </div>
                </Col>
            </Row>
            {children}
        </div>
    );
}