import React from 'react';
import Link from 'next/link'
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { Col, Row } from 'react-bootstrap';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CardReview(props) {
    return (
        <Row className="card-review">
            <Col md={3}>
                <div className="card-review__img">
                    <Image src={ImagesPath.REVIEW} layout="fill" objectFit="cover" alt="camara cam nhan nguoi dung anh" className="card-review__content-wrapper-img " />
                </div>
            </Col>
            <Col md={9}>
                <div className="card-review__item-text ">
                    <div className="card-review__item -content ">
                        <p className="text_over_flow_13">Khi mà thành lập xưởng này thì có quan tâm đến sản phẩm <strong>camera để quan sát hệ thống làm việc</strong>. Để biết tới Hải Nam thì Anh có xem qua một vài kênh trên mạng, website và được một số Bạn Anh tư vấn giới thiệu qua công ty Hải Nam thì Anh có tìm hiểu và có liên hệ với bên công ty Hải Nam. Sau khi trao đổi và khảo sát thì Anh đã lựa chọn sản phẩm và dịch vụ của Hải Nam. Về giá thành thì rất khó để so sánh vì nó liên quan đế chất lượng và dịch vụ nữa nhưng Anh thấy phù hợp nên Anh chọn dịch vụ của bên mình. Về các Anh Em lắp đặt thì Anh thấy nhiệt tình, công việc cũng nhanh lẹ để hoàn thành trong ngày hôm nay rất là tốt…</p>
                    </div>
                </div>
            </Col>
        </Row>
    );
}

export default CardReview;