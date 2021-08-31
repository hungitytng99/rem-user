import React from 'react';
import Link from 'next/link'
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const attr = {
    img: "",
    title: "",
    desc: '',
}

function CardReview(props) {
    return (
        <div className="card_review">
            <img src={props.data.img}></img>
            <div>
                <div>
                    <div>

                        <p>Bộ sưu tập</p>
                        <p>{props.data.title}</p>
                        <p>{props.data.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardReview;