import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Col, Row } from 'react-bootstrap';
import Layout from "components/Layout/Layout";
import { productService } from "data-services/product";
import Head from 'next/head'
import CardProduct from "ui-source/Card/CardProduct";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
const Search = (props) => {
    const { mainCategoryAndSubCategory = {}, listProduct = {}, keyword = "", suggestProduct = {} } = props;
    const searchParams = useRef();
    const search = () => {
        if (searchParams.current.value) {
            location.href = "/tim-kiem/" + searchParams.current.value;
        }
    }
    return (
        <>
            <Head>
                <title>Tìm kiếm &quot;{keyword}&quot;</title>
            </Head>
            <Layout>
                <Row>
                    <div className="home_search_bar">
                        <div style={{ height: '40px', display: 'flex' }}>
                            <input ref={searchParams} style={{ height: 'inherit', border: "0.5px solid gray", width: "calc(100% - 50px)", fontSize: 'initial', padding: "0px 10px" }} type="text" placeholder="Tìm kiếm sản phẩm..." />
                            <span onClick={search} style={{ height: 'inherit', display: 'inline-block', width: '40px', borderRadius: '5px', background: '#22232b', textAlign: 'center', lineHeight: '40px', color: 'white' }}>
                                <FontAwesomeIcon icon={faSearch} />
                            </span>
                        </div>
                    </div>
                    <div className="search">
                        {
                            listProduct.length == 0 ?
                                <div className="search__notify">
                                    Không có bất ký kết quả nào phù hợp với từ khóa &quot;<span>{keyword}</span>&quot;
                                </div>
                                :
                                <div className="search__notify">
                                    Có <span className="amount">{listProduct.length}</span> kết quả tìm kiếm phù hợp với từ khóa &quot;<span className="keyword">{keyword}</span>&quot;
                                </div>
                        }
                        {/* <ProductCardLists listProduct={listProduct} /> */}
                    </div>
                </Row>
                <Row>
                    {
                        listProduct.map(product => {
                            return (
                                <Col key={product.id} xs={6} sm={6} md={4} lg={3}>
                                    <CardProduct product={product} />
                                </Col>
                            )
                        })
                    }
                </Row>
                {/* <CardWithTitle title="Sản phẩm khác">

                </CardWithTitle> */}
            </Layout>
        </>
    )
}
export async function getServerSideProps(context) {
    const { keyword } = context.params;
    let listProduct = [];
    try {
        listProduct = await productService.listProduct({ search: keyword });
        return {
            props: {
                listProduct: listProduct.data.listProductReturn,
                keyword: keyword,
            },
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}
export default Search