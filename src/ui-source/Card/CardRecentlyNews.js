import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Link from 'next/link'

export default function CardRecentlyNews(props) {
    const { data } = props
    return (
        <Link href={data.url_post} passHref>
            <Row className="card_recently_new">
                <Col xs={5} className="recent_new_img">
                    <img src={data.image} />
                </Col>
                <Col xs={7}>
                    <div className="title text_over_flow_2">
                        {data.name}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                        <span>    {data.update_at}</span>
                    </div>
                </Col>
            </Row>
        </Link>

    )
}
