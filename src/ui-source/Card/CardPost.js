import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const { convert } = require('html-to-text');


export default function CardProduct(props) {
    const { vertical = true, post = {} } = props;
    return (
        <Link href={post.slug} passHref>
            <a style={{ display: "block" }} className={vertical ? "card_pd_ver" : "card_pd_hor"}>
                <img className="card_pd_img" src={post.image} alt={post.name} />
                <p className="card_pd_title text_over_flow_1">
                    {post.name}
                </p>
                <div className="card_pd_cate">
                    <p className="card_pd_desc text_over_flow_4">
                        {convert(post.content, {
                            wordwrap: 130,
                            selectors: [{ selector: 'img', format: 'skip' },
                            { selector: 'a', options: { ignoreHref: true } }
                            ]
                        })}
                    </p>
                    <div className="card_pd_date">
                        <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                        {post.update_at}
                    </div>
                </div>
                <p className="card_pd_seemore">
                    <>Tìm hiểu thêm <FontAwesomeIcon style={{ marginLeft: "2px", paddingTop: "2px" }} icon={faArrowRight}></FontAwesomeIcon></>
                </p>
            </a>
        </Link>
    )
}
