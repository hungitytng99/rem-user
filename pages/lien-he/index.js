import { Col, Collapse, Row } from 'react-bootstrap';
import Layout from "components/Layout/Layout";
import Head from 'next/head'
import ContactForm from "components/ContactForm";
import { faEnvelope, faMapMarked, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

const Search = (props) => {
    const { } = props;
    const [collapseOpen, setCollapseOpen] = useState(false);
    return (
        <>
            <Head>
                <title>Liên hệ</title>
            </Head>
            <Layout>
                <Row className="contact-page">
                    <Col sm={12} md={6}>
                        <div className="contact-page__address">
                            <div className="contact-page__address-detail">
                                Trụ sở TP Bắc Ninh
                            </div>
                            <ul className="contact-page__address-list">
                                <li className="contact-page__address-item">
                                    <FontAwesomeIcon className="contact-page__address-icon" icon={faMapMarked} />
                                    <span>Địa chỉ: </span>
                                    Đường: 330 Ngô Gia Tự, P.Tiền An, Bắc Ninh
                                </li>
                                <li className="contact-page__address-item">
                                    <FontAwesomeIcon className="contact-page__address-icon" icon={faPhoneAlt} />
                                    <span>Phone: </span> 0962.020.446
                                </li>
                                <li className="contact-page__address-item">
                                    <FontAwesomeIcon className="contact-page__address-icon" icon={faEnvelope} />
                                    <span>Email: </span>
                                    manhremvuonghong@gmail.com
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="contact-page__form">
                            <ContactForm />
                        </div>
                        <div className="contact-page__collapse">
                            <div className="contact-page__collapse-title">
                                Tại sao chọn Rèm Vương Hồng?
                            </div>
                            <div className="contact-page__collapse-content">
                                Rèm Cửa Bắc Ninh - Rèm Vương Hồng chuyên sản xuất và kinh doanh các loại rèm cửa - màn cửa. Với phương châm “Mang đến khách hàng giá trị tốt nhất, nâng cao cuộc sống tiện nghi”, Rèm Cửa Bắc Ninh - Rèm Vương Hồng không ngừng tìm kiếm và cung cấp <span>SẢN PHẨM CHÍNH HÃNG – CHẤT LƯỢNG CAO – GIÁ CẢ PHẢI CHĂNG</span> Cùng với những <span>CHÍNH SÁCH CHĂM SÓC khách hàng THẬT CHU ĐÁO</span>:
                                <ul className="contact-page__collapse-list">
                                    <li className="contact-page__collapse-item">
                                        Hàng chính hãng GIÁ SIÊU MỀM GIẢM LIÊN TỤC
                                    </li>
                                    <li className="contact-page__collapse-item">
                                        Bảo hành chu đáo
                                    </li>
                                    <li className="contact-page__collapse-item">
                                        Hỗ trợ qua điện thoại nhiệt tình, tận tâm
                                    </li>
                                    <li className="contact-page__collapse-item">
                                        Giao hàng tại nhà
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row>

                </Row>

            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {

    return {
        props: {
        },
    };
}
export default Search