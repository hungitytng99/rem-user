import React from 'react';
import Link from 'next/link'
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const attr = {
    image: "",
    title: "",
    desc: '',
}

function CardReview(props) {
    return (
        <div className="card_review">
            <img src={props.image[0].src}></img>
            <div>
                <div>
                    <div>

                        <p>Bộ sưu tập</p>
                        <p>{props.title}</p>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardReview;