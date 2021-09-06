import React from 'react'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import CardPost from 'ui-source/Card/CardPost'
import CardRecentlyNews from 'ui-source/Card/CardRecentlyNews'
import PaginationCustom from 'ui-source/Pagination/PaginationCustom'
const attr = {
    img: "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg",
    title: "So sánh các loại đồ gỗ được ",
    desc: "Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: false
}
import { congTrinhList } from 'constants/constTest'
import { useRouter } from 'next/router'

const itemsPerPage = 6;


export default function CongTrinh(props) {
    // const router = useRouter()
    // if (props.pageIndex > props.totalPage) {
    //     router.replace("/cong-trinh")
    // }

    return (
        <>
            <Head>
                <title>Công trình</title>
            </Head>
            <Layout>
                <div className="cong_trinh">
                    <h3 style={{ fontWeight: '400', padding: '15px' }}>Công trình</h3>
                    <Row>
                        <Col lg={9} className="news">
                            {
                                props.dataShow.map((item, index) => {
                                    return (
                                        <div key={"congtrinhitem" + index} className="news_item">
                                            <CardPost {...item}></CardPost>
                                        </div>
                                    )
                                })
                            }

                            <PaginationCustom active={Number(props.pageIndex)} totalPage={props.totalPage} baseUrl="/cong-trinh" ></PaginationCustom>
                        </Col>
                        <Col lg={3} className="news_recently">
                            <h4 style={{ fontWeight: "400" }}>Bài viết gần đây</h4>

                            <CardRecentlyNews {...attr}></CardRecentlyNews>
                            <CardRecentlyNews {...attr}></CardRecentlyNews>
                            <CardRecentlyNews {...attr}></CardRecentlyNews>

                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1167378840265020" width="340" height="500" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </Col>
                    </Row>

                </div>
            </Layout>
        </>
    )
}


export async function getServerSideProps(context) {
    console.log(context.query);
    const totalItem = congTrinhList.length
    const totalPage = Math.ceil(totalItem / itemsPerPage)
    let pageIndex = context?.query?.page || 1

    const beginItemIndex = itemsPerPage * (pageIndex - 1)
    const dataShow = congTrinhList.slice(beginItemIndex, beginItemIndex + itemsPerPage)

    return {
        props: {
            pageIndex: pageIndex,
            dataShow: dataShow,
            totalItem: totalItem,
            totalPage: totalPage
        },
    };
}