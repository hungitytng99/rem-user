import React from 'react'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import CardPost from 'ui-source/Card/CardPost'
import CardRecentlyNews from 'ui-source/Card/CardRecentlyNews'
import PaginationCustom from 'ui-source/Pagination/PaginationCustom'
import { postService } from 'data-services/post'


const attr = {
    img: "https://remcuahoanggia.vn/wp-content/uploads/2019/09/rem-cua-vung-tau.jpg",
    title: "So sánh các loại đồ gỗ được ",
    desc: "Đặc biệt nhờ sự sang trọng đẳng cấp mà khó loại rèm cao cấp nào sánh kịp, rèm gỗ vô cùng phù hợp với những ô cửa sổ kính và phong cách nội thất hiện đại.",
    date: "09/06/2025",
    vertical: false
}


export default function CongTrinh({
    pageIndex = 1,
    listPost = [],
    totalPage = 1
}) {

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
                                listPost.map((post, index) => {
                                    return (
                                        <div key={"congtrinhitem" + index} className="news_item">
                                            <CardPost vertical={false} post={post}></CardPost>
                                        </div>
                                    )
                                })
                            }
                            <PaginationCustom active={Number(pageIndex)} totalPage={totalPage} baseUrl="/cong-trinh" ></PaginationCustom>
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
    const { page = 1 } = context.query;
    const itemsPerPage = 8;
    console.log("PAGE: ", page);

    //get total page
    const listPost = await postService.listPost();
    const totalPage = listPost.data.length / itemsPerPage;
    console.log("TOTALPAGE: ", totalPage);

    //get item per page
    const listPostByPage = await postService.listPost(
        { postsPerPage: itemsPerPage, pageNumber: page }
    );

    // change slug
    listPostByPage.data = listPostByPage.data.map(post => {
        return {
            ...post,
            slug: "/cong-trinh/" + post.slug
        }
    })
    console.log("LIST BY PAGE: ", listPostByPage);
    return {
        props: {
            pageIndex: page,
            listPost: listPostByPage.data,
            totalPage: totalPage
        },
    };
}