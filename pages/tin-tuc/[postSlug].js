import { Breadcrumb, Col, Container, InputGroup, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { postService } from 'data-services/post';
import { categoryService } from 'data-services/category';

const DetailNews = (props) => {
    const { detailPost = {}, otherPost = [], listCategory = [] } = props;
    return (
        <>
            <Head>
                <title>{detailPost.name}</title>
            </Head>
            <Layout>
                <Row>
                    <Col>
                        <Breadcrumb className="product__breadcrumb">
                            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item href="/tin-tuc/">Tin tức</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {detailPost.name}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={8}>
                        <div className="detail-news__title text_over_flow_3">
                            {detailPost.name}
                        </div>
                        <div className="detail-news__date">
                            <FontAwesomeIcon className="detail-news__date-icon" icon={faCalendarAlt} />
                            <div className="detail-news__date-detail">{detailPost.update_at}</div>
                        </div>
                        <div className="detail-news__content" dangerouslySetInnerHTML={{ __html: detailPost.content }}>
                        </div>

                    </Col>
                    <Col md={4} className="hide-on-768">

                        <div className="detail-news__other">
                            <div className="category__filter-title">
                                Tin tức khác
                            </div>
                            <ul className="product__news-list">
                                {
                                    otherPost.map(post => {
                                        return (
                                            <li key={post.id} className="product__news-item">
                                                <Link href={post.slug} passHref>
                                                    <a>
                                                        <Row className="product__news-row">
                                                            <Col lg={3}>
                                                                <div className="product__news-item-img">
                                                                    <Image className="detail-news__img" src={post.image} layout="fill" objectFit="cover" alt={post.name} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={9}>
                                                                <div className="product__news-item-title text_over_flow_2">
                                                                    {post.name}
                                                                </div>
                                                                <div className="detail-news__date">
                                                                    <FontAwesomeIcon className="detail-news__date-icon" icon={faCalendarAlt} />
                                                                    <div className="detail-news__date-detail">{post.update_at}</div>
                                                                </div>

                                                            </Col>
                                                        </Row>
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="category__filter-category">
                            <div className="category__filter-title">
                                Danh mục sản phẩm
                            </div>
                            <ul className="category__filter-category-list">
                                {
                                    listCategory.map(category => {
                                        return (
                                            <li key={category.id} className="category__filter-category-item">
                                                <Link href={category.slug} passHref>
                                                    <a>
                                                        {category.name}
                                                    </a>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const { postSlug } = context.query;
    let detailPost = {};
    let otherPost = {};
    let listCategory = [];
    try {
        detailPost = await postService.detailPostBySlug(postSlug);
        otherPost = await postService.listPost();
        otherPost.data = otherPost.data.filter((post) => {
            if (post.id !== detailPost.data.id)
                return post;
        })
        // only show maximum of 4 post
        if (otherPost.data.length > 4) {
            otherPost.data = otherPost.data.splice(0, 4);
        }

        listCategory = await categoryService.listCategory();
        return {
            props: {
                detailPost: detailPost.data,
                otherPost: otherPost.data,
                listCategory: listCategory.data,
            },
        };
    } catch (error) {
        return {
            notFound: true
        };
    }

}

export default DetailNews