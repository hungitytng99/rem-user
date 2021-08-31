import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { categoryService } from 'data-services/category';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { faFacebook, faPinterest, faTelegramPlane, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer() {
    const [listCategory, setListCategory] = useState([]);
    useEffect(() => {
        const getListCategory = async () => {
            const listCategoryTmp = await categoryService.listCategory();
            setListCategory(listCategoryTmp.data);
        }
        getListCategory();
    }, [])
    return (
        <>
            <footer className="footer__background ">
                <Container className="footer">
                    <Row className="footer-contact">
                        <Col className="footer-contact__item" md={5} sm={12} xs={12}>
                            <div className="footer-contact__item-logo ">
                                <Image src={ImagesPath.LOGO} alt="Trang Chủ" />
                            </div>
                            <ul className="footer-contact__info-list ">
                                <li className="footer-contact__info-item">
                                    GPKD
                                </li>
                                <li className="footer-contact__info-item">
                                    <Link href="" passHref>
                                        <a href="" className="footer-contact__info-link">
                                            <span>
                                                <FontAwesomeIcon className="footer-contact__info-icon" icon={faMap} />
                                            </span>
                                            Đường XXX YYY ZZZ Thành phố Bắc Ninh
                                        </a>
                                    </Link>
                                </li>
                                <li className="footer-contact__info-item">
                                    <Link href={{ pathname: 'tel:84966854224' }} passHref>
                                        <a className="footer-contact__info-link">
                                            <span>
                                                <FontAwesomeIcon className="footer-contact__info-icon" icon={faPhoneAlt} />
                                            </span>
                                            +1 23456789
                                        </a>
                                    </Link>
                                </li>
                                <li className="footer-contact__info-item">
                                    <Link href={{ pathname: 'mailto:sales@giangminhviet.com' }} passHref>
                                        <a className="footer-contact__info-link">
                                            <span>
                                                <FontAwesomeIcon className="footer-contact__info-icon" icon={faEnvelope} />
                                            </span>
                                            contact@camera.com

                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    Giấy CNĐKKD: đang cập nhật <br />
                                    Cơ quan cấp: đang cập nhật <br />
                                    Địa chỉ :
                                </li>
                            </ul>
                        </Col>
                        <Col className="footer-contact__item" md={3} sm={12} xs={12}>
                            <div className="footer-contact__item-title ">
                                CÁC DANH MỤC
                            </div>
                            <div className="footer-contact__wrapper row ">
                                <ul className="footer-contact__wrapper-list col xl-6 l-6 m-6 sm-6 c-6 ">
                                    {listCategory.map((category) => {
                                        return (
                                            <li key={category.id} className="footer-contact__wrapper-item ">
                                                <Link href={category.slug} passHref>
                                                    <a className="footer-contact__wrapper-link">{category.name}</a>
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </Col>

                        <Col className="footer-contact__item" md={4} sm={12} xs={12}>
                            <div className="footer-contact__item-title ">
                                CẬP NHẬT CHƯƠNG TRÌNH KHUYẾN MÃI
                            </div>
                            <div className="enter_email">
                                <input type="text" placeholder="Enter email..."></input>
                                <span><FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon></span>
                            </div>
                            <p>
                                Mỗi tháng chúng tôi đều có những đợt giảm giá dịch vụ và sản phẩm nhằm tri ân khách hàng. Vui lòng nhập địa chỉ email để cập nhật những chương trình khuyến mãi mới nhất từ Rèm The Sun.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <div style={{ borderTop: "1px solid #e1e1e1" }}></div>
                <Container >
                    <footer className="footer">
                        <div className="footer-cpright">
                            Copyrights © 2018 by <Link href='/'> Rèm The Sun</Link>.
                            <FontAwesomeIcon style={{ margin: "0px 10px", fontSize: "24px", cursor: 'pointer', color: 'blue' }} icon={faFacebook}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{ margin: "0px 10px", fontSize: "24px", cursor: 'pointer', color: 'red' }} icon={faYoutube}></FontAwesomeIcon>
                            <FontAwesomeIcon style={{ margin: "0px 10px", fontSize: "24px", cursor: 'pointer', color: 'purple' }} icon={faPinterest}></FontAwesomeIcon>
                        </div>
                    </footer>
                </Container>
            </footer>

        </>
    )
}
export default Footer;