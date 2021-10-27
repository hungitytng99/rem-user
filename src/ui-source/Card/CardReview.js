import React from 'react';
import Link from 'next/link'
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const attr = {
    type: 8,
    slug: "#",
    image: [{ src: "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg" }],
    name: "Cong trinh 17",
    desc: "Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: false
}

function CardReview(props) {
    const { url_image = "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg", title, desc } = props;
    return (
        <div className="card_review">
            <img src={url_image}></img>
            <div>
                <div>
                    <div>
                        <p>Bộ sưu tập</p>
                        <p>{title}</p>
                        <p>{desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardReview;