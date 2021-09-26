import React from 'react'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import CardPost from 'ui-source/Card/CardPost'
import CardRecentlyNews from 'ui-source/Card/CardRecentlyNews'
import PaginationCustom from 'ui-source/Pagination/PaginationCustom'
import { postService } from 'data-services/post'

export default function TuVan({
    pageIndex,
    listPost = [],
    totalData = 1,
    itemsPerPage = 10,
    gocTuVan,
}) {
    // const router = useRouter()
    // if (props.pageIndex > props.totalPage) {
    //     router.replace("/cong-trinh")
    // }

    return (
        <>
            <Head>
                <title>Tư vấn</title>
            </Head>
            <Layout>
                <div className="cong_trinh">
                    <h3 style={{ fontWeight: '400', padding: '15px' }}>Tư vấn</h3>
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
                            <PaginationCustom activePage={Number(pageIndex)} totalItem={totalData} baseUrl="/cong-trinh" itemsPerPage={itemsPerPage}></PaginationCustom>
                        </Col>
                        <Col lg={3} className="news_recently">
                            <h4 style={{ fontWeight: "400" }}>Công trình</h4>
                            {
                                gocTuVan.map((item, index) => {
                                    return (
                                        <CardRecentlyNews key={"goctuvancongrinh" + index} data={item}></CardRecentlyNews>
                                    )
                                })
                            }
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1167378840265020" width="-webkit-fill-available" height="500" style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
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
    let totalData = 0

    try {

        //get item per page
        const listPostByPage = await postService.listPostByTagId(10, { postsPerPage: itemsPerPage, pageNumber: page });
        totalData = listPostByPage.data.total
        // change slug
        listPostByPage.data.postsResult = listPostByPage.data.postsResult.map(post => {
            return {
                ...post,
                url_post: '/tu-van/' + post.slug,
            }
        })
        const gocTuVan = await postService.listPostByTagId(8, { postsPerPage: 5, pageNumber: 1 });
        gocTuVan.data.postsResult = gocTuVan.data.postsResult.map(post => {
            return {
                ...post,
                url_post: "/cong-trinh/" + post.slug
            }
        })
        return {
            props: {
                pageIndex: page,
                listPost: listPostByPage.data.postsResult,
                totalData: totalData,
                itemsPerPage: itemsPerPage,
                gocTuVan: gocTuVan.data.postsResult,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            notFound: true
        };
    }
}