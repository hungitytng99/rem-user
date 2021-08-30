import { Breadcrumb, Col, Row } from 'react-bootstrap';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Layout from 'components/Layout/Layout';
import CardWithTitle from 'ui-source/Card/CardWithTitle';
import CardProduct from 'ui-source/Card/CardProduct';
import { categoryService } from 'data-services/category';
import { productService } from 'data-services/product';

const Category = (props) => {
    const { detailCategory = { }, listCategory = [], hasMoreProduct = false } = props;
    const [detailCategoryState, setDetailCategoryState] = useState(detailCategory);
    const [nextPage, setNextPage] = useState(4);
    const [hasMoreProductState, setHasMoreProductState] = useState(hasMoreProduct);
    const [currentFilter, setCurrentFilter] = useState({ });

    if (detailCategory.id !== detailCategoryState.id) {
        setDetailCategoryState(detailCategory);
    }

    const filterOption = {
        option_1: {
            minPrice: 0,
            maxPrice: 1000000,
        },
        option_2: {
            minPrice: 1000000,
            maxPrice: 2000000,
        },
        option_3: {
            minPrice: 2000000,
            maxPrice: 3000000,
        },
        option_4: {
            minPrice: 4000000,
        },
    }
    const handleFilterPrice = async (e) => {
        const filterValue = e.target.value;
        setCurrentFilter(filterOption[filterValue]);
        const filterProduct = await productService.listProductByCategorySlug(
            detailCategoryState.slug, { productsPerPage: 18, pageNumber: 1, ...filterOption[filterValue] }
        );
        setDetailCategoryState({ ...detailCategoryState, listProduct: filterProduct.data })
    }

    const getMoreProduct = async (e) => {
        console.log("CURRENT FILTER: ", currentFilter);
        const listProduct = await productService.listProductByCategorySlug(detailCategoryState.slug,
            { productsPerPage: 6, pageNumber: e.target.dataset.nextpage, ...currentFilter }
        );
        setDetailCategoryState({ ...detailCategoryState, listProduct: [...detailCategoryState.listProduct, ...listProduct.data] });
        setNextPage(nextPage + 1);
    }

    useEffect(() => {
        // check has next page
        const checkShowMore = async () => {
            const moreProduct = await productService.listProductByCategorySlug(detailCategoryState.slug,
                { productsPerPage: 6, pageNumber: Number(nextPage), ...currentFilter });
            if (moreProduct.data.length === 0) {
                setHasMoreProductState(false);
            }
        }
        checkShowMore();
    })

    return (
        <>
            <Head>
                <title>{detailCategoryState.name}</title>
            </Head>
            <Layout>
                <Row>
                    <Col>
                        <Breadcrumb className="product__breadcrumb">
                            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {detailCategoryState.name}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <CardWithTitle title={detailCategoryState.name}>
                    <Row>
                        <Col xs={12} md={9}>
                            <Row>
                                {
                                    detailCategoryState.listProduct.length === 0 && <div style={{ textAlign: 'center', marginTop: '5px' }}>Không có sản phẩm nào</div>
                                }
                                {detailCategoryState.listProduct.map(product => {
                                    return (
                                        <Col key={product.id} xs={12} sm={6} md={6} lg={4}>
                                            <CardProduct product={product} />
                                        </Col>
                                    )
                                })}
                            </Row>
                            <Row>
                                <div className="category__has-more-box">
                                    {
                                        hasMoreProductState && <div data-nextpage={nextPage} onClick={getMoreProduct}
                                            className="category__has-more"
                                        >More
                                        </div>
                                    }
                                </div>
                            </Row>
                        </Col>
                        <Col md={3} className="hide-on-768">
                            <div className="category__filter">
                                <div className="category__filter-price">
                                    <div className="category__filter-title">
                                        Lọc theo giá
                                    </div>
                                    <ul className="category__filter-price-list" onChange={handleFilterPrice}>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-1" name="price" value="option_1" />
                                            <label htmlFor="price-1">Dưới 1 triệu</label>
                                        </li>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-2" name="price" value="option_2" />
                                            <label htmlFor="price-2">Từ 1-2 triệu</label>
                                        </li>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-3" name="price" value="option_3" />
                                            <label htmlFor="price-3">Từ 2-4 triệu</label>
                                        </li>
                                        <li className="category__filter-price-item">
                                            <input type="radio" id="price-4" name="price" value="option_4" />
                                            <label htmlFor="price-4">Hơn 4 triệu</label>
                                        </li>
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
                                                        <a href={`/danh-muc/${category.slug}`} data-href={category.slug}>
                                                            {category.name}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </CardWithTitle>

            </Layout>
        </>
    )
}

export async function getServerSideProps(context) {
    const { category } = context.query;
    const listCategory = await categoryService.listCategory();
    const detailCategory = await categoryService.detailCategoryBySlug(category);
    const listProduct = await productService.listProductByCategoryId(detailCategory.data.id, { productsPerPage: 18, pageNumber: 1 });
    detailCategory.data = { ...detailCategory.data, listProduct: listProduct.data };
    // for pagination
    let hasMoreProduct = false;
    const moreProduct = await productService.listProductByCategoryId(detailCategory.data.id, { productsPerPage: 6, pageNumber: 4 });
    if (moreProduct.data.length > 0) {
        hasMoreProduct = true;
    }

    return {
        props: {
            listCategory: listCategory.data,
            detailCategory: detailCategory.data,
            hasMoreProduct: hasMoreProduct
        },
    };
}

export default Category