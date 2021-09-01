import React from 'react'

const attr = {
    img: "",
    title: "Rem vai mot lop SV1113"
}

export default function CardHotProduct(props) {
    return (
        <div className="card_hpd">
            <div>
                <img src={props.data.img} />
            </div>
            <p>
                {props.data.title}
            </p>
            <p>Liên hệ ngay!</p>
        </div>

    )
}
