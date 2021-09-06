import Layout from 'components/Layout/Layout'
import { ImagesPath } from 'constants/ImagesPath'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import CardReview from 'ui-source/Card/CardReview'
import { faChevronLeft, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardProduct from 'ui-source/Card/CardProduct'
import CardPolicy from 'ui-source/Card/CardPolicy'
import { useState } from 'react'
import SmallBanner from 'ui-source/Carousel_custom/SmallBanner'

const attr = {
    img: "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg",
    title: "So sánh các loại đồ gỗ được  ",
    desc: "Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: true
}
const attr2 = {
    img: "https://i.imgur.com/s8dwMxW.jpeg",
    title: "So sánh các loại đồ gỗ được sử dụng làm rèm cửa hiện nay",
    desc: "Rèm gỗ tự nhiên với vẻ đẹp mang đến sự gần gũi thiên nhiên cho không gian nội thất đang ngày càng chiếm được cảm tình của người tiêu dùng. Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: false
}
const attr3 = {
    img: "https://theme.hstatic.net/200000295586/1000722296/14/policy_icon1.png?v=292",
    title: "Thương hiệu uy tín",
    desc: "Hơn 10 năm kinh nghiệm, tỉ mỉ trong từng đường may mũi chỉ",

}

function SwitchOptionFilter(props) {
    const { data } = props;
    switch (data) {
        case 1:
            return (
                <Link href="#" passHref>
                    <a>Rèm vải một màu {'>>'}</a>
                </Link>
            )
        case 2:
            return (
                <Link href="#" passHref>
                    <a>Rèm cầu vồng {'>>'}</a>
                </Link>
            )
        case 3:
            return (
                <Link href="#" passHref>
                    <a>Rèm gỗ {'>>'}</a>
                </Link>
            )
        case 4:
            return (
                <Link href="#" passHref>
                    <a>Rèm cuốn {'>>'}</a>
                </Link>
            )
        case 5:
            return (
                <Link href="#" passHref>
                    <a>Giàn phơi thông minh {'>>'}</a>
                </Link>
            )
        default:
            return ""
    }
}
export default function Home(props) {
    const { listHotProduct, listCategoryWithProduct } = props;
    const [filterProduct, setfilterProduct] = useState(1)
    function changeFilterProduct(num) {
        setfilterProduct(num)
    }
    return (
        <>
            <Head>
                <title>Trang chủ Rèm Vương Hồng</title>
            </Head>
            <Layout>
                <div className="home">
                    <Container>
                        <div className="home_search_bar">
                            <div style={{ height: '40px', display: 'flex' }}>
                                <select style={{ height: 'inherit', border: "0.5px solid gray", width: "90px", outline: 'none' }}>
                                    <option>Tất cả</option>
                                </select>
                                <input style={{ height: 'inherit', border: "0.5px solid gray", width: "calc(100% - 131px)", fontSize: 'initial', padding: "0px 10px" }} type="text" placeholder="Tìm kiếm sản phẩm..." />
                                <span style={{ height: 'inherit', display: 'inline-block', width: '40px', borderRadius: '5px', background: '#22232b', textAlign: 'center', lineHeight: '40px', color: 'white' }}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                            </div>
                        </div>
                    </Container>
                    <Row className="home__carousel">
                        <Col lg={12}>
                            <Carousel
                                autoPlay={true}
                                interval={6000}
                                showArrows={false}
                                infiniteLoop={true}
                                showThumbs={false}
                                emulateTouch={true}
                            >
                                <div className="home__banner-img">
                                    <Image layout="fill" objectFit="cover" src={ImagesPath.HOME_BANNER_1} alt="giang minh viet banner" />
                                </div>
                                <div className="home__banner-img">
                                    <Image layout="fill" objectFit="cover" src={ImagesPath.HOME_BANNER_2} alt="giang minh viet banner handmade" />
                                </div>
                                <div className="home__banner-img">
                                    <Image layout="fill" objectFit="cover" src={ImagesPath.HOME_BANNER_3} alt="giang minh viet banner handmade" />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                    <Row>
                        <Container style={{ padding: "0px 30px" }}>
                            <Row style={{ padding: "15px", background: "white" }}>
                                <Col lg={4}>
                                    <CardReview {...attr}></CardReview>
                                </Col>
                                <Col lg={4}>
                                    <CardReview {...attr}></CardReview>
                                </Col>
                                <Col lg={4}>
                                    <CardReview {...attr}></CardReview>
                                </Col>
                            </Row>
                            <Row style={{ margin: "25px 0px" }}>
                                <Col lg={3} md={6}>
                                    <CardPolicy {...attr3}></CardPolicy>
                                </Col>
                                <Col lg={3} md={6}>
                                    <CardPolicy {...attr3}></CardPolicy>
                                </Col>
                                <Col lg={3} md={6}>
                                    <CardPolicy {...attr3}></CardPolicy>
                                </Col>
                                <Col lg={3} md={6}>
                                    <CardPolicy {...attr3}></CardPolicy>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row style={{ margin: "25px 0px" }}>
                        <Container>
                            <h2 className="section_title">SẢN PHẨM BÁN CHẠY</h2>
                            <div className="section_sub_title">Các mẫu rèm cửa được khách hàng hay lựa chọn</div>
                            <div className="button_filter">
                                <span className={filterProduct == 1 ? 'active' : ''} onClick={() => changeFilterProduct(1)}>Rèm vải một màu</span>
                                <span className={filterProduct == 2 ? 'active' : ''} onClick={() => changeFilterProduct(2)}>Rèm cầu vồng</span>
                                <span className={filterProduct == 3 ? 'active' : ''} onClick={() => changeFilterProduct(3)}>Rèm Gỗ</span>
                                <span className={filterProduct == 4 ? 'active' : ''} onClick={() => changeFilterProduct(4)}>Rèm Cuốn</span>
                                <span className={filterProduct == 5 ? 'active' : ''} onClick={() => changeFilterProduct(5)}>Giàn Phơi Thông Minh</span>
                            </div>
                        </Container>
                    </Row>
                    <Row>
                        <Col lg={4} style={{ marginBottom: "30px" }}>
                            <CardProduct {...attr}></CardProduct>
                        </Col>
                        <Col lg={4} style={{ marginBottom: "30px" }}>
                            <CardProduct {...attr}></CardProduct>
                        </Col>
                        <Col lg={4} style={{ marginBottom: "30px" }}>
                            <CardProduct {...attr}></CardProduct>
                        </Col>
                        <Col lg={4} style={{ marginBottom: "30px" }}>
                            <CardProduct {...attr}></CardProduct>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: "50px" }}>
                        <Container>
                            <p style={{ textAlign: 'center' }}>
                                Xem tất cả <SwitchOptionFilter data={filterProduct}></SwitchOptionFilter>
                            </p>
                        </Container>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <CardReview {...attr}></CardReview>
                        </Col>
                        <Col lg={6}>
                            <CardReview {...attr}></CardReview>
                        </Col>
                    </Row>
                    <Row style={{ margin: "50px 0px 25px 0px" }}>
                        <h2 className="section_title">VIDEO LẮP ĐẶT CÔNG TRÌNH THỰC TẾ</h2>
                        <div className="section_sub_title">Lắp đặt rèm vải tại nhà khách hàng.</div>
                    </Row>
                    <Row style={{ margin: "0px 0px 25px 0px" }}>
                        <Col lg={6}>
                            <p style={{ lineHeight: '25.6px' }}>
                                Rèm cửa đẹp là một trong những yếu tố góp phần tô điểm cho không gian lung linh và để lại ấn tượng với những vị khách mỗi khi đến nhà bạn. Khi một không gian nhà ở đáp ứng đầy đủ nhu cầu về tiện nghi thì vẻ đẹp trên từng ô cửa là vô cùng quan trọng để trở thành một ngôi nhà lý tưởng đáp ứng được cả về mặt thẩm mỹ và công năng. Cùng Rèm The Sun nhìn lại bộ rèm cản sáng được lắp đặt tại nhà khách hàng khu đô thị Geleximco Lê Trọng Tấn.
                            </p>
                        </Col>
                        <Col lg={6}>
                            <CardReview {...attr}></CardReview>
                        </Col>
                    </Row>

                </div>

                <div className="thin_branner" >
                    <SmallBanner></SmallBanner>
                </div>
                <div className="home">

                    <Row style={{ margin: "250px 0px 30px 0px" }}>
                        <h2 className="section_title">Góc tư vấn</h2>
                        <div className="section_sub_title">Lựa chọn và chăm sóc nhà cửa cùng Rèm The Sun</div>
                    </Row>
                    <Row>
                        <Col md={4} style={{ marginBottom: "30px" }}>
                            <CardProduct {...attr} />
                        </Col>
                        <Col md={4} style={{ marginBottom: "30px" }}>
                            <CardProduct {...attr} />
                        </Col>
                        <Col md={4} style={{ marginBottom: "30px" }}>
                            <CardProduct {...attr} />
                        </Col>
                    </Row>

                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    // let listCategoryWithProduct = [];
    // let listHotProduct = [];
    try {
        // listCategoryWithProduct = await categoryService.listCategoryWithProduct(
        //     {}, { productsPerPage: 8, pageNumber: 1 }
        // );
        // listHotProduct = await productService.listHotProduct();


        return {
            props: {
                // listHotProduct: listHotProduct.data,
                // listCategoryWithProduct: listCategoryWithProduct.data,
            },
        };
    } catch (error) {
        return {
            notFound: true
        };
    }

}

