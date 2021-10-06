import { Breadcrumb, Col, Container, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagesThumb from 'ui-source/Images/ImagesThumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactForm from 'components/ContactForm';
import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Link from 'next/link'
import Head from 'next/head'
import { faClock, faHandshake, faTimes, faTruckPickup } from '@fortawesome/free-solid-svg-icons';
import Layout from 'components/Layout/Layout';
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import { productService } from 'data-services/product';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { categoryService } from 'data-services/category';

Modal.setAppElement('#__next');
// detailProduct = {},
export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
const Product = (props) => {
    const {
        relatedProducts = [],
        detailProduct = {},
        detailMainCategory = {},
        detailCategory = {}
    } = props;
    const [contactModal, setContactModal] = useState(false);

    // state for compute
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [area, setArea] = useState(0);
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState(0);

    // handle change
    const showContactModal = (e) => {
        e.stopPropagation();
        setContactModal(true);
    }

    const hideContactModal = () => {
        setContactModal(false);
    }

    const closeContactForm = (e) => {
        e.preventDefault();
        setContactModal(false);
    }
    useEffect(() => {
        const pricePerArea = detailProduct.unit_cost || 0;
        setArea(width * height / 1000000);
        setPrice(((width * height) / 1000000) * pricePerArea * 1000 * count)
    }, [width, height, count]);

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
                                <Breadcrumb.Item href={detailMainCategory.slug}>{detailMainCategory.name}</Breadcrumb.Item>
                                <Breadcrumb.Item href={detailCategory.slug}>
                                    {detailCategory.name}
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    {detailProduct.name}
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                    <Row className="product__detail">
                        <Col xs={12} md={8}>
                            <ImagesThumb listImages={detailProduct.image} />
                            <div className="product__detail-info">
                                <Tabs >
                                    <TabList>
                                        <Tab>Thông số sản phẩm</Tab>
                                        <Tab>Hướng dẫn mua rèm</Tab>
                                        <Tab>Video sản phẩm</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <ul className="product__info-list">
                                            {detailProduct.model && <li className="product__info-item">
                                                <p>Mã sản phẩm: </p>
                                                <span>{detailProduct.model}</span>
                                            </li>}
                                            {detailProduct.material && <li className="product__info-item">
                                                <p>Chất liệu: </p>
                                                <span>{detailProduct.material}</span>
                                            </li>}
                                            {detailProduct.origin && <li className="product__info-item">
                                                <p>Xuất sứ: </p>
                                                <span>{detailProduct.origin}</span>
                                            </li>}
                                            {detailProduct.size && <li className="product__info-item">
                                                <p>Khổ rộng tối đa: </p>
                                                <span>{detailProduct.size}</span>
                                            </li>}
                                            {detailProduct.feature && <li className="product__info-item">
                                                <p>Tính năng: </p>
                                                <span>{detailProduct.feature}</span>
                                            </li>}
                                            {detailProduct.thickness && <li className="product__info-item">
                                                <p>Độ dày: </p>
                                                <span>{detailProduct.thickness}</span>
                                            </li>}
                                            {detailProduct.weight && <li className="product__info-item">
                                                <p>Trọng lượng: </p>
                                                <span>{detailProduct.weight}</span>
                                            </li>}
                                            {detailProduct.repeat && <li className="product__info-item">
                                                <p>Độ lặp: </p>
                                                <span>{detailProduct.repeat_deg}</span>
                                            </li>}
                                            <li className="product__info-item">
                                                <p>Cơ sở: </p>
                                                <span>Bắc Ninh</span>
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
                                            <li style={{ marginTop: '10px' }}>
                                                <strong>Vận chuyển:</strong> Miễn phí vận chuyển và lắp đặt trong thành phố Hà Nội với đơn hàng trên 05m2, đơn hàng dưới 05m2 phụ thu thêm 100.000đ/đơn hàng.
                                            </li>
                                            <li style={{ marginTop: '10px' }}>
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
                                        <p>Mã sản phẩm: </p> <span> {detailProduct.model}</span>
                                    </div>
                                </div> 
                                {detailProduct.unit_cost &&  <div style={{fontSize: '20px', fontWeight: '700', marginTop: '8px', color: 'rgb(214,28,31)'}}>{detailProduct.unit_cost}.000đ/m2</div>}
                               
                                <div className="product__compute-header">
                                    Báo giá sơ bộ
                                </div>

                                <Row className="product__compute">
                                    <Col xs={6} className="product__compute-item">
                                        <div className="product__compute-item-title">
                                            Chiều rộng (mm)
                                        </div>
                                        <input type="number" value={width} onChange={(e) => setWidth(e.target.value)} className="product__compute-item-input" placeholder="Chiều rộng" />
                                    </Col>
                                    <Col xs={6} className="product__compute-item">
                                        <div className="product__compute-item-title">
                                            Chiều dài (mm)
                                        </div>
                                        <input type="number" value={height} onChange={e => setHeight(e.target.value)} className="product__compute-item-input" placeholder="Chiều dài" />
                                    </Col>

                                    <Col xs={6} className="product__compute-item">
                                        <div className="product__compute-item-title">
                                            Diện tích (m2)
                                        </div>
                                        <input disabled readOnly type="text" value={area} className="product__compute-item-input" placeholder="0" />
                                    </Col>

                                    <Col xs={6} className="product__compute-item">
                                        <div className="product__compute-item-title">
                                            Số bộ
                                        </div>
                                        <input type="number" value={count} onChange={(e) => {
                                            setCount(e.target.value)
                                        }} className="product__compute-item-input" placeholder="0" />
                                    </Col>
                                </Row>
                                <Row className="product__compute-result">
                                    <Col xs={6} className="product__compute-result-text">
                                        Ước tính
                                    </Col>
                                    <Col xs={6} className="product__compute-result-price">
                                        <div className="product__compute-result-price-box">{numberWithCommas(price)}đ</div>
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
                                        Rèm Vương Hồng cam kết
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
                                    relatedProducts && relatedProducts.map((product) => {
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
    let detailProduct = {};
    let detailMainCategory = {};
    let detailCategory = {};
    let relatedProducts = [];
    // // try {
    detailProduct = await productService.detailProductBySlug(slug);
    detailMainCategory = await categoryService.detailMainCategoryById(detailProduct.data.main_category_id);
    detailCategory = await categoryService.detailCategoryById(detailProduct.data.category_id);
    relatedProducts = await productService.listProductByCategoryId(detailProduct.data.category_id,
        { productsPerPage: 8, pageNumber: 1 }
    );

    // filter
    // relatedProducts

    relatedProducts.data.listProductReturn = relatedProducts.data.listProductReturn.filter(product => product.id !== detailProduct.data.id);
    return {
        props: {
            detailProduct: detailProduct?.data || {},
            detailMainCategory: detailMainCategory?.data || {},
            detailCategory: detailCategory?.data || {},
            relatedProducts: relatedProducts?.data?.listProductReturn || [],
        },
    };
    // } catch (error) {
    //     return {
    //         notFound: true
    //     };
    // }
}

export default Product