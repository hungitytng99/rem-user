import React from 'react'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { Col, Row } from 'react-bootstrap'
import CardPost from 'ui-source/Card/CardPost'
import CardRecentlyNews from 'ui-source/Card/CardRecentlyNews'
import PaginationCustom from 'ui-source/Pagination/PaginationCustom'
import { postService } from 'data-services/post'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons';


export default function slugGocTuVan({ gocTuVan, detailPost, baiLienQuan }) {
    return (
        <>
            <Head>
                <title>Công trình</title>
            </Head>
            <Layout>
                <div className="cong_trinh">
                    <h3 style={{ fontWeight: '300', padding: '15px' }}>Công trình</h3>
                    <Row>
                        <Col lg={9} className="news">
                            <h4 className="text_over_flow_2" style={{ fontWeight: '500' }}>{detailPost.name}</h4>
                            <div style={{ marginBottom: '30px' }}>
                                <FontAwesomeIcon style={{ color: '#d61c1f' }} icon={faCalendar}></FontAwesomeIcon> {"    " + detailPost.update_at}
                            </div>
                            <div>
                                <div className="detail-news__content" dangerouslySetInnerHTML={{ __html: detailPost.content }}></div>
                            </div>
                        </Col>
                        <Col lg={3} className="news_recently">
                            <h4 style={{ fontWeight: "400" }}>Góc tư vấn</h4>
                            {
                                gocTuVan.map((item, index) => {
                                    return (
                                        <CardRecentlyNews key={"goctuvancongrinh" + index} data={item}></CardRecentlyNews>
                                    )
                                })
                            }
                            <br />
                            <h4 style={{ fontWeight: "400" }}>Bài viết liên quan</h4>
                            {
                                baiLienQuan.map((item, index) => {
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

    const { slug } = context.query

    try {
        const detailPost = await postService.detailPostBySlug(slug)


        const baiLienQuan = await postService.listPostByTagId(8, { postsPerPage: 6, pageNumber: 1 });
        baiLienQuan.data.postsResult = baiLienQuan.data.postsResult.filter(post => post.id != detailPost.data.id)
        baiLienQuan.data.postsResult = baiLienQuan.data.postsResult.map(post => {
            return {
                ...post,
                url_post: "/cong-trinh/" + post.slug
            }
        })

        const gocTuVan = await postService.listPostByTagId(10, { postsPerPage: 5, pageNumber: 1 });
        gocTuVan.data.postsResult = gocTuVan.data.postsResult.map(post => {
            return {
                ...post,
                url_post: "/tu-van/" + post.slug
            }
        })

        return {
            props: {
                gocTuVan: gocTuVan.data.postsResult,
                detailPost: detailPost.data,
                baiLienQuan: baiLienQuan.data.postsResult
            },
        };
    } catch (error) {
        console.log(error)
        return {
            notFound: true
        };
    }
}