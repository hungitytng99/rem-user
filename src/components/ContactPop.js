import React from 'react';
import { NextPage } from "next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ImagesPath } from 'constants/ImagesPath';
import Link from 'next/link'
import Image from 'next/image'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import ReactTooltip from 'react-tooltip';


const ContactPop = (props) => {
    return (
        <div className="contact-pop">
            <Link href={{ pathname: 'tel:84966854224' }} passHref>
                <a target="_blank" data-offset="{'top': 10, 'left': 10}" data-tip="Gọi ngay: 84966854224" className="contact-pop__box">
                    <FontAwesomeIcon className="contact-pop__icon has-animation" icon={faPhone} />
                </a>
            </Link>
            <Link href={{ pathname: 'https://zalo.me/0966854224' }} passHref>
                <a target="_blank" data-tip="Facebook Message" className="contact-pop__box">
                    <FontAwesomeIcon className="contact-pop__icon" icon={faFacebookMessenger} />
                </a>
            </Link>
            <Link href={{ pathname: 'mailto:sales@giangminhviet.com' }} passHref >
                <a target="_blank" data-tip="Mail: sales@giangminhviet.com" className="contact-pop__box --last">
                    <FontAwesomeIcon className="contact-pop__icon" icon={faEnvelope} />
                </a>
            </Link>
            <ReactTooltip place="right" type="info" />
        </div>
    );
}

export default ContactPop;