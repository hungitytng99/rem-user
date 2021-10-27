import React from 'react'
import Image from 'next/image'
import { ImagesPath } from './../../constants/ImagesPath';
const att = {
    img: "https://theme.hstatic.net/200000295586/1000722296/14/policy_icon1.png?v=292",
    title: "Thương hiệu uy tín",
    desc: "Hơn 10 năm kinh nghiệm, tỉ mỉ trong từng đường may mũi chỉ",

}

export default function CardPolicy(props) {
    const { img, title, desc } = props;
    return (
        <div className="card_poli">
            <div>
                <Image src={img} layout="fill" objectFit="cover" alt="Rèm Vương Hồng" />
            </div>
            <p>
                {title}
            </p>
            <p>
                {desc}
            </p>
        </div>
    )
}
