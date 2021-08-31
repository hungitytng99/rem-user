import React from 'react'

const att = {
    img: "https://theme.hstatic.net/200000295586/1000722296/14/policy_icon1.png?v=292",
    title: "Thương hiệu uy tín",
    desc: "Hơn 10 năm kinh nghiệm, tỉ mỉ trong từng đường may mũi chỉ",

}

export default function CardPolicy(props) {
    return (
        <div className="card_poli">
            <img src={props.data.img} />
            <p>
                {props.data.title}
            </p>
            <p>
                {props.data.desc}
            </p>
        </div>
    )
}
