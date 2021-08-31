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
    const { relatedProducts = { }, detailProduct = { }, listPost = [] } = props;
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
    const image = [
        {
            "src": "http://product.hstatic.net/200000295586/product/111701_69b68d7ec40144f9846cdc3a4af5e0f8_master.jpg",
            "alt": "Wholesale Hot Selling Seagrass Hanging Basket Basket Home Wall Decoration From Vietnam_347"
        },
        {
            "src": "http://product.hstatic.net/200000295586/product/111727_cef99d87a03b4bfc942858347cc33d08_master.jpg",
            "alt": "Wholesale Hot Selling Seagrass Hanging Basket Basket Home Wall Decoration From Vietnam_792"
        },
        {
            "src": "http://product.hstatic.net/200000295586/product/111701_69b68d7ec40144f9846cdc3a4af5e0f8_master.jpg",
            "alt": "Wholesale Hot Selling Seagrass Hanging Basket Basket Home Wall Decoration From Vietnam_473"
        },
        {
            "src": "http://product.hstatic.net/200000295586/product/111727_cef99d87a03b4bfc942858347cc33d08_master.jpg",
            "alt": "Wholesale Hot Selling Seagrass Hanging Basket Basket Home Wall Decoration From Vietnam_472"
        },
        {
            "src": "http://product.hstatic.net/200000295586/product/111701_69b68d7ec40144f9846cdc3a4af5e0f8_master.jpg",
            "alt": "Wholesale Hot Selling Seagrass Hanging Basket Basket Home Wall Decoration From Vietnam_185"
        }
    ]
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


                        </Col>
                    </Row>
                    <Row className="product__detail">
                        <Col xs={12} md={8}>
                            <ImagesThumb listImages={image} />
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="product__detail-name text_over_flow_1">
                                {detailProduct.name}
                            </div>
                            <div className="product__detail-status">
                                Còn hàng
                            </div>
                            <div className="product__detail-type">
                                <div className="product__detail-type-item">
                                    <p>Thương hiệu: </p>
                                    <Link href="/" >
                                        <a>Rèm The Sun</a>
                                    </Link>
                                </div>
                                <div className="product__detail-type-item">
                                    <p>Loại: </p>
                                    <Link href="/" >
                                        <a>Rèm vài 1 màu</a>
                                    </Link>
                                </div>
                            </div>

                            <div className="product__detail-new-price">
                                {detailProduct.new_price}<span style={{ textDecoration: "underline" }}>đ</span>
                                <span style={{ position: 'relative' }}>
                                    /m
                                    <span style={{ position: 'absolute', fontSize: '14px', right: '-8px', top: '0px' }}>2</span>
                                </span>
                            </div>

                            <Row className="product__compute">
                                <Col xs={6} className="product__compute-item">
                                    <div className="product__compute-item-title">
                                        Chiều rộng (mm)
                                    </div>
                                    <input type="number" className="product__compute-item-input" placeholder="Chiều rộng" />
                                </Col>
                                <Col xs={6} className="product__compute-item">
                                    <div className="product__compute-item-title">
                                        Chiều dài (mm)
                                    </div>
                                    <input type="number" className="product__compute-item-input" placeholder="Chiều dài" />
                                </Col>

                                <Col xs={6} className="product__compute-item">
                                    <div className="product__compute-item-title">
                                        Chiều rộng (mm)
                                    </div>
                                    <input disabled type="text" className="product__compute-item-input" placeholder="0" />
                                </Col>

                                <Col xs={6} className="product__compute-item">
                                    <div className="product__compute-item-title">
                                        Số bộ
                                    </div>
                                    <input type="number" min={1} className="product__compute-item-input" placeholder="1" />
                                </Col>
                            </Row>
                            <div className="product__compute-result">
                                <div className="product__compute-result-text">
                                    Báo giá sơ bộ
                                </div>
                                <div className="product__compute-result-price">
                                    880,000đ
                                </div>

                            </div>

                            <div className="product__detail-contact">
                                <div onClick={showContactModal} className="product__detail-contact-link">
                                    Liên hệ ngay
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
    let detailProduct = { };
    let detailCategory = { };
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
                detailProduct: detailProduct.data || { },
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