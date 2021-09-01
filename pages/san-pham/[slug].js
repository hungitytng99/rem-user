import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'ui-source/Images/ImagesThumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'components/ContactForm';
import { useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link'
import Head from 'next/head'
import { faCalendarAlt, faClock, faHandshake, faTimes, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout/Layout';
import { faGift, faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons'
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import Image from 'next/image'
import { productService } from 'data-services/product';
import { categoryService } from 'data-services/category';
import { postService } from 'data-services/post';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
                    <Row className="product__detail">
                        <Col xs={12} md={8}>
                            <ImagesThumb listImages={image} />
                            <div className="product__detail-info">
                                <Tabs >
                                    <TabList>
                                        <Tab>Thông số sản phẩm</Tab>
                                        <Tab>Hướng dẫn mua rèm</Tab>
                                        <Tab>Video sản phẩm</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <ul className="product__info-list">
                                            <li className="product__info-item">
                                                <p>Mã sản phẩm: </p>
                                                <span>RVH123456</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Chất liệu: </p>
                                                <span>100% polyester</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Xuất sứ: </p>
                                                <span>Hàn quốc</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Khổ rộng tối đa: </p>
                                                <span>Hàn quốc</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Tính năng: </p>
                                                <span>Cản sáng 80%, dễ vệ sinh.</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Độ dày: </p>
                                                <span>0,55mm.</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Trọng lượng: </p>
                                                <span>140g/m².</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Độ lặp: </p>
                                                <span>vải 75mm/ sheer 50mm.</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Bảo hành: </p>
                                                <span>02 năm do lỗi của Nhà sản xuất.</span>
                                            </li>
                                            <li className="product__info-item">
                                                <p>Giá bán: </p>
                                                <span>Tính theo m² và chưa bao gồm thuế VAT(10%).</span>
                                            </li>
                                        </ul>
                                        <span style={{ fontStyle: 'italic' }}>
                                            (Với mỗi bộ rèm nhỏ hơn 01 m² được tính tròn 01 m², chiều cao dưới 01 mét được tính tròn 01 mét).
                                        </span>

                                        <div style={{ marginTop: '35px' }}>
                                            <span><strong>Rèm Vương Hồng</strong> mang đến cho quý khách các <strong>dịch vụ ưu đãi </strong> như:</span>
                                        </div>
                                        <ul style={{ listStyleType: 'circle', paddingLeft: '30px' }}>
                                            <li style={{marginTop: '10px'}}>
                                                <strong>Vận chuyển:</strong> Miễn phí vận chuyển và lắp đặt trong thành phố Hà Nội với đơn hàng trên 05m2, đơn hàng dưới 05m2 phụ thu thêm 100.000đ/đơn hàng.
                                            </li>
                                            <li style={{marginTop: '10px'}}>
                                                <strong>Khuyến mại:</strong> Phụ kiện cơ bản (Bao gồm khóa chiều cao và chống kéo ngược).
                                            </li>
                                        </ul>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="product__guild-buy">
                                            <div className="product__guild-buy-header">
                                                Hướng dẫn đặt rèm
                                            </div>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="product__info-video">
                                            <div className="product__info-video-header">
                                               Chưa có video cho sản phẩm này
                                            </div>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </Col>
                        <Col xs={12} md={4} className="product__detail-box">
                            <div style={{ position: 'sticky', top: '160px' }}>
                                <div className="product__detail-name text_over_flow_1">
                                    {detailProduct.name}
                                </div>
                                <div className="product__detail-status">
                                    Còn hàng
                                </div>
                                <div className="product__detail-type">
                                    <div className="product__detail-type-item">
                                        <p>Thương hiệu: </p>
                                        <Link href="/" passHref>
                                            <a>Rèm Vương Hồng</a>
                                        </Link>
                                    </div>
                                    <div className="product__detail-type-item">
                                        <p>Loại: </p>
                                        <Link href="/" passHref>
                                            <a>Rèm vài 1 màu</a>
                                        </Link>
                                    </div>
                                    <div className="product__detail-type-item">
                                        <p>Mã sản phẩm: </p> <span> SKT123456</span>
                                    </div>
                                </div>

                                <div className="product__compute-header">
                                    Báo giá sơ bộ
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
                                <Row className="product__compute-result">
                                    <Col xs={6} className="product__compute-result-text">
                                        Ước tính
                                    </Col>
                                    <Col xs={6} className="product__compute-result-price">
                                        <div className="product__compute-result-price-box">880,000đ</div>
                                    </Col>
                                </Row>
                                <div className="product__detail-contact">
                                    <div onClick={showContactModal} className="product__detail-contact-link">
                                        Liên hệ ngay
                                    </div>
                                </div>
                                <div className="product__detail-support">
                                    <div className="product__detail-support-header">
                                        Nhấn gọi để rèm Vương Hồng được hỗ trợ quý khách
                                    </div>
                                    <div className="product__detail-support-phone">
                                        <Link href="/">
                                            <a>0912.3456.789</a>
                                        </Link>
                                        <span>(Tư vấn tại nhà 8h00 - 20h00)</span>
                                    </div>
                                    <div className="product__detail-support-header">
                                        Rèm Vương Hồn cam kết
                                    </div>
                                    <ul className="product__detail-support-list">
                                        <li className="product__detail-support-item">
                                            <div className="product__detail-support-icon">
                                                <FontAwesomeIcon icon={faTruckPickup} />
                                            </div>
                                            <div className="product__detail-support-text">
                                                <p>Giao hàng miễn phí tại Bắc Ninh</p>
                                                <span>(Đơn hàng từ 1,5 triệu đồng)</span>
                                            </div>
                                        </li>
                                        <li className="product__detail-support-item">
                                            <div className="product__detail-support-icon">
                                                <FontAwesomeIcon icon={faClock} />
                                            </div>
                                            <div className="product__detail-support-text">
                                                <p>Thi công lắp đặt chỉ sau 48h</p>
                                            </div>
                                        </li>
                                        <li className="product__detail-support-item">
                                            <div className="product__detail-support-icon">
                                                <FontAwesomeIcon icon={faHandshake} />
                                            </div>
                                            <div className="product__detail-support-text">
                                                <p>Bảo hành 2 năm</p>
                                                <span>(do lỗi của nhà sản xuất)</span>
                                            </div>
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