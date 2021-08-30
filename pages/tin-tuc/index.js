import { Breadcrumb, Col, Container, InputGroup, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { postService } from 'data-services/post';
import { useEffect, useState } from 'react';
const { convert } = require('html-to-text');
const News = (props) => {
    const { listPost = [], hasMore = false } = props;
    const [listPostState, setListPostState] = useState(listPost);
    const [hasMoreState, setHasMoreState] = useState(hasMore);
    const [nextPage, setNextPage] = useState(4);
    const getMorePost = async (e) => {
        let nextPage = e.target.dataset.nextpage;
        const morePost = await postService.listPost({ postsPerPage: 6, pageNumber: nextPage });
        console.log(morePost, nextPage);
        setListPostState([...listPostState, ...morePost.data]);
        setNextPage(++nextPage);
    }

    useEffect(() => {
        const checkShowHasMore = async () => {
            const morePost = await postService.listPost({ postsPerPage: 6, pageNumber: nextPage });
            setHasMoreState(morePost.data.length > 0);
        };
        checkShowHasMore();
    }, [nextPage])

    console.log(listPostState);
    return (
        <>
            <Head>
                <title>Tin tức</title>
            </Head>
            <Layout>
                <Row className="news__header">
                    <h3 className="news__header-title">
                        Tin tức
                    </h3>
                    <div className="news__decorate">
                        <div className="news__decorate-img-box">
                            <Image className="news__decorate-img" src={ImagesPath.NEWS_DECORATE} alt="trang tri tin tuc" layout="fill" />
                        </div>
                    </div>
                </Row>
                <Row>
                    {listPostState.map(post => {
                        return (
                            <Col key={post.id} xs={12} sm={6} md={4}>
                                <Link href={post.slug} passHref prefetch={false}>
                                    <a className="news__link">
                                        <div className="news__image-box">
                                            <Image className="news__image" src={post.image} alt="trang tri tin tuc" layout="fill" />
                                        </div>
                                        <div className="news__date">
                                            <FontAwesomeIcon className="news__date-icon" icon={faCalendarAlt} />
                                            <div className="news__date-detail">{post.update_at}</div>
                                        </div>
                                        <div className="news__title text_over_flow_3">
                                            {post.name}
                                        </div>
                                        <div className="news__demo-content text_over_flow_2">{convert(post.content, {
                                            wordwrap: 130,
                                            selectors: [{ selector: 'img', format: 'skip' },
                                            { selector: 'a', options: { ignoreHref: true } }
                                            ]
                                        })}</div>
                                    </a>
                                </Link>
                            </Col>
                        )
                    })}
                    {
                        hasMoreState ? <div className="product__has-more-box">
                            <div className="product__has-more" data-nextpage={nextPage} onClick={getMorePost}>
                                Xem thêm
                            </div>
                        </div> : ""
                    }
                </Row>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const listPost = await postService.listPost({ postsPerPage: 18, pageNumber: 1 });
    const nextPost = await postService.listPost({ postsPerPage: 6, pageNumber: 4 });
    let hasMore = false;
    console.log("NEXT: ", nextPost);
    if (nextPost.data.length > 0) {
        hasMore = true;
    }
    return {
        props: {
            listPost: listPost.data,
            hasMore: hasMore
        },
    };
}

export default News