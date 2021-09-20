import Layout from 'components/Layout/Layout'
import { ImagesPath } from 'constants/ImagesPath'
import Head from 'next/head'
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import CardReview from 'ui-source/Card/CardReview'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CardProduct from 'ui-source/Card/CardProduct'
import CardPolicy from 'ui-source/Card/CardPolicy'
import CardPost from 'ui-source/Card/CardPost'
import { useEffect, useState, useRef } from 'react'
import SmallBanner from 'ui-source/Carousel_custom/SmallBanner'
import { productPath } from 'constants/productPath'
import { getListCategory } from 'constants/productPath'
import { productService } from 'data-services/product'
import { postService } from 'data-services/post'

const attr = {
    type: 8,
    slug: "#",
    image: [{ src: "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg" }],
    name: "Cong trinh 17",
    desc: "Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: false
}
const attr2 = {
    image: "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg",
    name: "So sánh các loại đồ gỗ được sử dụng làm rèm cửa hiện nay",
    content: "Rèm gỗ tự nhiên với vẻ đẹp mang đến sự gần gũi thiên nhiên cho không gian nội thất đang ngày càng chiếm được cảm tình của người tiêu dùng. Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    update_at: "09/06/2025",
    vertical: false,
    slug: "#"
}
const policy1 = {
    img: ImagesPath.POLICY1,
    title: "Thương hiệu uy tín",
    desc: "Hơn 10 năm kinh nghiệm, tỉ mỉ trong từng đường may mũi chỉ",

}
const policy2 = {
    img: ImagesPath.POLICY2,
    title: "PHÂN PHỐI CHÍNH HÃNG",
    desc: "Rèm vải nhập khẩu từ Anh Quốc, Bỉ, Nhật Bản, Hàn Quốc. Có đầy đủ giấy tờ CO, CQ.",

}
const policy3 = {
    img: ImagesPath.POLICY3,
    title: "Thương hiệu uy tín",
    desc: "Mẫu mã đa dạng, luôn update công nghệ mới nhất.",

}
const policy4 = {
    img: ImagesPath.POLICY4,
    title: "Thương hiệu uy tín",
    desc: "Bảo hành sản phẩm 1 năm - bảo trì trọn đời.",

}

function SwitchOptionFilter(props) {
    const { title } = props;
    return (
        <Link href="#" passHref>
            <a>{title} {'>>'}</a>
        </Link>
    )

}
export default function Home(props) {
    const [filterProduct, setfilterProduct] = useState(0)
    const [titleFilterActive, setTitleFilterActive] = useState('')
    const [mainCategory, setMainCategory] = useState([])
    const [listHotProduct, setListHotProduct] = useState(props.listHotProduct)
    const searchParams = useRef();
    const search = () => {
        if (searchParams.current.value) {
            location.href = "/tim-kiem/" + searchParams.current.value;
        }
    }
    useEffect(() => {
        (async function () {
            let result = await getListCategory();
            setMainCategory([...result[1].childs])
            setTitleFilterActive(result[1].childs[0]?.title)
        })();
    }, [])

    function changeFilterProduct(num, title, idMainCategory) {
        setfilterProduct(num)
        setTitleFilterActive(title)
        let filterData = props.listHotProduct.filter(item => item.main_category_id == idMainCategory)
        setListHotProduct(filterData)
    }
    function isHotMainCategory(category, arr) {
        let lengthArr = arr.length
        for (let i = 0; i < lengthArr; i++) {
            if (category == arr[i].main_category_id)
                return true
        }
        return false
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
                                <input ref={searchParams} style={{ height: 'inherit', border: "0.5px solid gray", width: "calc(100% - 50px)", fontSize: 'initial', padding: "0px 10px" }} type="text" placeholder="Tìm kiếm sản phẩm..." />
                                <span onClick={search} style={{ height: 'inherit', display: 'inline-block', width: '40px', borderRadius: '5px', background: '#22232b', textAlign: 'center', lineHeight: '40px', color: 'white' }}>
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
                                {
                                    mainCategory.map((item, index) => {
                                        if (index < 3)
                                            return (

                                                <Col md={4} key={"review" + index} >
                                                    <CardReview {...item}></CardReview>
                                                </Col>
                                            )
                                    })
                                }

                            </Row>
                            <Row style={{ margin: "25px 0px" }}>
                                <Col lg={3} md={6} xs={6}>
                                    <CardPolicy {...policy1}></CardPolicy>
                                </Col>
                                <Col lg={3} md={6} xs={6}>
                                    <CardPolicy {...policy2}></CardPolicy>
                                </Col>
                                <Col lg={3} md={6} xs={6}>
                                    <CardPolicy {...policy3}></CardPolicy>
                                </Col>
                                <Col lg={3} md={6} xs={6}>
                                    <CardPolicy {...policy4}></CardPolicy>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row style={{ margin: "25px 0px" }}>
                        <Container>
                            <h2 className="section_title">SẢN PHẨM BÁN CHẠY</h2>
                            <div className="section_sub_title">Các mẫu rèm cửa được khách hàng hay lựa chọn</div>
                            <div className="button_filter">
                                {
                                    mainCategory.map((subitem, i) => {
                                        if (isHotMainCategory(subitem.id, props.listHotProduct))
                                            return (
                                                <span
                                                    key={"btnHotProduc" + i}
                                                    className={filterProduct == i ? 'active' : ''}
                                                    onClick={() => changeFilterProduct(i, subitem.title, subitem.id)}
                                                >
                                                    {subitem.title}
                                                </span>
                                            )
                                    })
                                }
                            </div>
                        </Container>
                    </Row>
                    <Row>
                        {
                            listHotProduct.map((item, index) => {
                                return (
                                    <Col key={"hotPro" + index} lg={4} md={6} xs={6} style={{ marginBottom: "30px" }}>
                                        <CardProduct product={item}></CardProduct>
                                    </Col>
                                )
                            })
                        }

                    </Row>
                    <Row style={{ marginBottom: "50px" }}>
                        <Container>
                            <p style={{ textAlign: 'center' }}>
                                Xem tất cả <SwitchOptionFilter title={titleFilterActive}></SwitchOptionFilter>
                            </p>
                        </Container>
                    </Row>
                    {/* <Row>
                        <Col lg={6}>
                            <CardReview {...attr}></CardReview>
                        </Col>
                        <Col lg={6}>
                            <CardReview {...attr}></CardReview>
                        </Col>
                    </Row> */}
                    <Row style={{ margin: "50px 0px 25px 0px" }}>
                        <h2 className="section_title">VIDEO LẮP ĐẶT CÔNG TRÌNH THỰC TẾ</h2>
                        <div className="section_sub_title">Lắp đặt rèm vải tại nhà khách hàng.</div>
                    </Row>
                    <Row style={{ margin: "0px 0px 25px 0px" }}>
                        <Col lg={6}>
                            <p style={{ lineHeight: '25.6px' }}>
                                Rèm cửa đẹp là một trong những yếu tố góp phần tô điểm cho không gian lung linh và để lại ấn tượng với những vị khách mỗi khi đến nhà bạn. Khi một không gian nhà ở đáp ứng đầy đủ nhu cầu về tiện nghi thì vẻ đẹp trên từng ô cửa là vô cùng quan trọng để trở thành một ngôi nhà lý tưởng đáp ứng được cả về mặt thẩm mỹ và công năng. Cùng Rèm Vương Hồng nhìn lại bộ rèm cản sáng được lắp đặt tại nhà khách hàng khu đô thị Geleximco Lê Trọng Tấn.
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
                        <div className="section_sub_title">Lựa chọn và chăm sóc nhà cửa cùng Rèm Vương Hồng</div>
                    </Row>
                    <Row>
                        {
                            props.gocTuVan.map((item, index) => {
                                return (
                                    <Col key={"PostItem" + index} md={4} xs={6} style={{ marginBottom: "30px" }}>
                                        <CardPost post={item} />
                                    </Col>
                                )
                            })
                        }
                    </Row>

                </div>
            </Layout >
        </>
    )
}

export async function getServerSideProps() {

    let listHotProduct = [];
    let gocTuVan = []
    try {
        let result = await productService.listHotProduct();
        listHotProduct = [...result.data]
        // console.log(listHotProduct)
        let result2 = await postService.listPostByTagId(10, { postsPerPage: 3, pageNumber: 1 });
        gocTuVan = [...result2.data.postsResult]
        gocTuVan = gocTuVan.map(post => {
            return {
                ...post,
                url_post: "/tu-van/" + post.slug
            }
        })
        // console.log(gocTuVan)
        return {
            props: {
                listHotProduct: listHotProduct,
                gocTuVan: gocTuVan,
            },
        };
    } catch (error) {
        return {
            notFound: true
        };
    }

}

