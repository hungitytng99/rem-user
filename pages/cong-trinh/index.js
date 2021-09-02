import React from 'react'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import CardProduct from 'ui-source/Card/CardProduct'
import CardRecentlyNews from 'ui-source/Card/CardRecentlyNews'
const attr = {
    img: "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg",
    title: "So sánh các loại đồ gỗ được ",
    desc: "Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: false
}

export default function CongTrinh() {
    return (
        <>
            <Head>
                <title>Thư viện ảnh</title>
            </Head>
            <Layout>
                <div className="cong_trinh">
                    <h3 style={{ fontWeight: '400', padding: '20px' }}>Công Trình</h3>
                    <Row>
                        <Col lg={9} className="news">
                            <div className="news_item">
                                <CardProduct {...attr}></CardProduct>
                            </div>
                            <div className="news_item">
                                <CardProduct {...attr}></CardProduct>
                            </div>
                            <div className="news_item">
                                <CardProduct {...attr}></CardProduct>
                            </div>
                        </Col>
                        <Col lg={3} className="news_recently">
                            <h4 style={{ fontWeight: "400" }}>Bài viết gần đây</h4>

                            <CardRecentlyNews {...attr}></CardRecentlyNews>
                            <CardRecentlyNews {...attr}></CardRecentlyNews>
                            <CardRecentlyNews {...attr}></CardRecentlyNews>

                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1167378840265020" width="340" height="500" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </Col>
                    </Row>

                </div>
            </Layout>
        </>
    )
}
