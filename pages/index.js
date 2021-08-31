import Layout from 'components/Layout/Layout'
import { ImagesPath } from 'constants/ImagesPath'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import CardProduct from 'ui-source/Card/CardProduct'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import CardWithTitle from 'ui-source/Card/CardWithTitle'
import CardReview from 'ui-source/Card/CardReview'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { categoryService } from 'data-services/category'
import { productService } from 'data-services/product'
import CardHotProduct from 'ui-source/Card/CardHotProduct'
import CardPolicy from 'ui-source/Card/CardPolicy'

const attr = {
    img: "https://i.imgur.com/s8dwMxW.jpeg",
    title: "So sánh các loại đồ gỗ được ",
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
export default function Home(props) {
    const { listHotProduct, listCategoryWithProduct } = props;
    return (
        <>
            <Head>
                <title>Trang chủ</title>
            </Head>
            <Layout>
                <div className="home">
                    <Row className="home__carousel">
                        <Col xs={12}>
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
                                <Col xs={4}>
                                    <CardReview data={attr}></CardReview>
                                </Col>
                                <Col xs={4}>
                                    <CardReview data={attr}></CardReview>
                                </Col>
                                <Col xs={4}>
                                    <CardReview data={attr}></CardReview>
                                </Col>
                            </Row>
                            <Row style={{ margin: "25px 0px" }}>
                                <Col xs={3}>
                                    <CardPolicy data={attr3}></CardPolicy>
                                </Col>
                                <Col xs={3}>
                                    <CardPolicy data={attr3}></CardPolicy>
                                </Col>
                                <Col xs={3}>
                                    <CardPolicy data={attr3}></CardPolicy>
                                </Col>
                                <Col xs={3}>
                                    <CardPolicy data={attr3}></CardPolicy>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Container>
                            <h2>SẢN PHẨM BÁN CHẠY</h2>
                            <h3>Các mẫu rèm cửa được khách hàng hay lựa chọn</h3>
                            <div>
                                <span>Rèm vải một màu</span>
                                <span>Rèm cầu vồng</span>
                                <span>Rèm Gỗ</span>
                                <span>Rèm Cuốn</span>
                                <span>Giàn Phơi Thông Minh</span>
                            </div>
                        </Container>
                    </Row>
                    <Row>
                        <Col xs={4} style={{ marginBottom: "30px" }}>
                            <CardHotProduct data={attr}></CardHotProduct>
                        </Col>
                        <Col xs={4} style={{ marginBottom: "30px" }}>
                            <CardHotProduct data={attr}></CardHotProduct>
                        </Col>
                        <Col xs={4} style={{ marginBottom: "30px" }}>
                            <CardHotProduct data={attr}></CardHotProduct>
                        </Col>
                        <Col xs={4} style={{ marginBottom: "30px" }}>
                            <CardHotProduct data={attr}></CardHotProduct>
                        </Col>
                    </Row>
                    <Row>
                        <h2>Góc tư vấn</h2>
                        <h3>Lựa chọn và chăm sóc nhà cửa cùng Rèm The Sun</h3>
                    </Row>
                    <Row>
                        <Col xs={4} style={{ marginBottom: "30px" }}>
                            <CardProduct data={attr} />
                        </Col>
                        <Col xs={4} style={{ marginBottom: "30px" }}>
                            <CardProduct data={attr} />
                        </Col>
                        <Col xs={4} style={{ marginBottom: "30px" }}>
                            <CardProduct data={attr} />
                        </Col>
                    </Row>
                    <CardProduct data={attr2} />

                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps() {
    let listCategoryWithProduct = [];
    let listHotProduct = [];
    try {
        listCategoryWithProduct = await categoryService.listCategoryWithProduct(
            {}, { productsPerPage: 8, pageNumber: 1 }
        );
        listHotProduct = await productService.listHotProduct();
        return {
            props: {
                listHotProduct: listHotProduct.data,
                listCategoryWithProduct: listCategoryWithProduct.data,
            },
        };
    } catch (error) {
        return {
            notFound: true
        };
    }

}

