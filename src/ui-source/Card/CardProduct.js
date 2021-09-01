import { faArrowRight, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const attr = {
    img: "https://i.imgur.com/s8dwMxW.jpeg",
    title: "So sánh các loại đồ gỗ được sử dụng làm rèm cửa hiện nay",
    desc: "Rèm gỗ tự nhiên với vẻ đẹp mang đến sự gần gũi thiên nhiên cho không. rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: true
}
export default function CardProduct(props) {
    const { vertical = true, img = "https://i.imgur.com/s8dwMxW.jpeg", title = "", desc = "", date = "" } = props;
    return (
        <div className={vertical ? "card_pd_ver" : "card_pd_hor"}>
            <img className="card_pd_img" src={img} />
            <p className="card_pd_title">
                {title}
            </p>
            <div className="card_pd_cate">
                <p className="card_pd_desc">
                    {desc}
                </p>
                <div className="card_pd_date">
                    <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
                    {date}
                </div>
            </div>
            <p className="card_pd_seemore">
                <Link href='#' passHref>
                    <>Tìm hiểu thêm <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></>
                </Link>
            </p>
        </div>
    )
}
