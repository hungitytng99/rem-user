import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'ui-source/Images/ImagesThumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'components/ContactForm';
import { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link'
import Head from 'next/head'
import { faCalendarAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout/Layout';
import { faGift, faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import Image from 'next/image'
import { productService } from 'data-services/product';
import { categoryService } from 'data-services/category';
import { postService } from 'data-services/post';


Modal.setAppElement('#__next');
// detailProduct = {},
const Product = (props) => {
    const { relatedProducts = {}, detailProduct = {}, listPost = [] } = props;
    const [contactModal, setContactModal] = useState(false);
    const showContactModal = (e) => {
        e.stopPropagation();
        setContactModal(true);
    }
    console.log("DETAIL: ", detailProduct);

    const hideContactModal = () => {
        setContactModal(false);
    }
    const closeContactForm = (e) => {
        e.preventDefault();
        setContactModal(false);
    }
    // if(detailProduct && Object.keys(detailProduct).length === 0 && detailProduct.constructor === Object) {
    //     return 
    // }
    return (
        <>
            <Head>
                <title>{detailProduct.name}</title>
            </Head>
            <Layout>
                <div className="product">
                    <Row>
                        <Col>
                            <Breadcrumb className="product__breadcrumb">
                                <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                                <Breadcrumb.Item href={detailProduct.category_slug}>{detailProduct.category_name}</Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    {detailProduct.name}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row>
                        <Col>

                            <div className="product__detail-name">
                                {detailProduct.name}
                            </div>
                        </Col>
                    </Row>
                    <Row className="product__detail">
                        <Col xs={12} md={4}>
                            <ImagesThumb listImages={detailProduct.image} />
                        </Col>
                        <Col xs={12} md={5}>
                            {
                                detailProduct.discount > 0 &&
                                <div className="product__detail-old-price">
                                    {detailProduct.price}đ
                                </div>
                            }
                            <div className="product__detail-new-price">
                                {detailProduct.new_price}đ
                            </div>
                            <div className="product__detail-sale">
                                <div className="product__detail-sale-gift">
                                    <FontAwesomeIcon icon={faGift} />
                                    <span>Khuyến mại</span>
                                </div>
                                <ul className="product__detail-sale-list">
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Hàng chính hãng Full Box mới 100% - Giảm SỐC
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        GIẢM LIỀN 100K khi mua 2 camera WIFI bất kỳ
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        TIẾT KIỆM thêm 50K khi mua kèm THẺ NHỚ
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        NHẬN NGAY Voucher giảm giá 50k - 300K
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        MIỄN PHÍ cài đặt và hướng dẫn sử dụng tận nơi tại TPHCM
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        MIỄN PHÍ giao hàng toàn quốc - HOẢ TỐC tại TPHCM
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Hỗ trợ lắp đặt camera tận nhà tại TPHCM
                                    </li>
                                    <li className="product__detail-sale-item">
                                        <div className="product__detail-sale-icon">
                                            <FontAwesomeIcon icon={faCheckCircle} />
                                        </div>
                                        Bảo hành 12 tháng - Đổi 1/1 trong vòng 30 ngày nếu lỗi NSX
                                    </li>
                                </ul>
                            </div>
                            <div className="product__detail-special">
                                <div className="product__detail-special-title">
                                    Thông tin nổi bật
                                </div>
                                <div className="product__detail-short-desc" dangerouslySetInnerHTML={{ __html: detailProduct.description }}>
                                </div>
                            </div>
                            <div className="product__detail-contact">
                                <div onClick={showContactModal} className="product__detail-contact-link">
                                    Liên hệ ngay
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className="product__shop">
                                <div className="product__shop-reason">
                                    <div className="product__shop-reason-title">
                                        Tại sao chọn CameraXXXXXXX?
                                    </div>
                                    <ul className="product__shop-reason-list">
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hàng chính hãng, Mới 100%
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Giá tốt nhất, thương hiệu Uy Tín.
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Nhân viên tư vấn tận tình.
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Đội ngũ lắp đặt chuyên nghiệp
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Giao hàng Siêu Tốc 30 phút - 4H
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Đổi mới 30 ngày miễn phí.
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hỗ trợ Lắp đặt tại nhà TPHCM
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Thanh toán an toàn COD Toàn Quốc
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Bảo hành chu đáo bằng số điện thoại
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hỗ trợ kỹ thuật chuyên nghiệp.
                                        </li>
                                    </ul>
                                </div>
                                <div className="product__shop-reason">
                                    <div className="product__shop-reason-title">
                                        Hotline hỗ trợ
                                    </div>
                                    <ul className="product__shop-reason-list">
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hotline tư vấn: <strong>098.1234.5678</strong>
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hotline tư vấn: <strong>098.1234.5678</strong>
                                        </li>
                                        <li className="product__shop-reason-item">
                                            <div className="product__shop-reason-icon">
                                                <FontAwesomeIcon icon={faCheck} />
                                            </div>
                                            Hotline hỗ trợ: <strong>098.1234.5678</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="product__related-product">
                        <CardWithTitle title="Sản phẩm cùng danh mục">
                            <Row>
                                {
                                    relatedProducts.map((product) => {
                                        return (
                                            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                                                <CardProduct product={product} />
                                            </Col>
                                        )
                                    })
                                }

                            </Row>
                        </CardWithTitle>
                    </Row>
                    {detailProduct.detail && <Row>
                        <Col lg={8} className="product__description">
                            <div dangerouslySetInnerHTML={{ __html: detailProduct.detail }}></div>
                        </Col>
                        {listPost.length > 0 && <Col lg={4} className="product__news">
                            <div className="product__news-title">
                                Tin tức mới
                            </div>
                            <ul className="product__news-list">
                                {listPost.map((post) => {
                                    return (
                                        <li key={post.id} className="product__news-item">
                                            <Link href={post.slug} passHref>
                                                <a>
                                                    <Row className="product__news-row">
                                                        <Col lg={3}>
                                                            <div className="product__news-item-img">
                                                                <Image src={post.image} layout="fill" objectFit="cover" alt={post.name} />
                                                            </div>
                                                        </Col>
                                                        <Col lg={9}>
                                                            <div className="product__news-item-title text_over_flow_2">
                                                                {post.name}
                                                            </div>
                                                            <div className="product__news-date">
                                                                <FontAwesomeIcon className="product__news-date-icon" icon={faCalendarAlt} />
                                                                <div className="product__news-date-product">{post.update_at}</div>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </a>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Col>}
                    </Row>
                    }

                    <Row className="product__contact-form">
                        <div className="product__contact-form-header">Gửi cho chúng tôi thông tin của bạn</div>
                        <ContactForm
                            productSlug={detailProduct.slug}
                            productId={detailProduct.id}
                            productName={detailProduct.name} />
                    </Row>
                </div>
            </Layout>

            <Modal
                isOpen={contactModal}
                onRequestClose={hideContactModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="contact-form__header">
                    <div className="contact-form__header-text">
                        Để lại thông tin của bạn
                        <span>Chúng tôi sẽ liên lạc với bạn sớm nhất có thể</span>
                    </div>
                    <div onClick={hideContactModal} className="contact-form__header-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <div className="contact-form__form">
                    <ContactForm closeContact={closeContactForm} productName={detailProduct.name}
                        productId={detailProduct.id} productSlug={detailProduct.slug} />
                </div>
            </Modal>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.params;
    let detailProduct = {};
    let detailCategory = {};
    let relatedProducts = [];
    let listPost = [];
    try {
        detailProduct = await productService.detailProductBySlug(slug);
        detailCategory = await categoryService.detailCategoryById(detailProduct.data.category_id);
        detailProduct.data = {
            ...detailProduct.data, category_name: detailCategory.data.name || '',
            category_slug: detailCategory.data.slug
        }
        relatedProducts = await productService.listProductByCategoryId(detailProduct.data.category_id);
        relatedProducts.data = relatedProducts.data.filter((product) => {
            if (product.id !== detailProduct.data.id) {
                return product;
            }
        })
        // Slit list product into 4 or 8 product
        if (relatedProducts.data.length > 4 && relatedProducts.data.length < 8) {
            relatedProducts.data = relatedProducts.data.splice(0, 4);
        } else if (relatedProducts.data.length > 8) {
            relatedProducts.data = relatedProducts.data.splice(0, 8);
        }

        listPost = await postService.listPost({ postsPerPage: 4, pageNumber: 1 });
        return {
            props: {
                detailProduct: detailProduct.data || {},
                relatedProducts: relatedProducts.data || [],
                listPost: listPost.data || [],
            },
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}

export default Product