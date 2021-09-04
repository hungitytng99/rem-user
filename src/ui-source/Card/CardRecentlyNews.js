import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'

export default function CardRecentlyNews(props) {
    return (
        <Link href="/" passHref>
            <Row className="card_recently_new">
                <Col xs={5} className="recent_new_img">
                    <img src={props.img} />
                </Col>
                <Col xs={7}>
                    <div className="title text_over_flow_2">
                        {props.title}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                        <span>{props.date}</span>
                    </div>
                </Col>
            </Row>
        </Link>

    )
}
