import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function CardRecentlyNews(props) {
    return (
        <Row className="card_recently_new">
            <Col xs={5} className="recent_new_img">
                <img src={props.img} />
            </Col>
            <Col xs={7}>
                <div className="title">
                    {props.title}
                </div>
                <div>
                    <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                    <span>       {props.date}</span>
                </div>
            </Col>
        </Row>
    )
}
