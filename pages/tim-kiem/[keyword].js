import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Col, Row } from 'react-bootstrap';
import Link from 'next/link'
import Layout from "components/Layout/Layout";
import CardWithTitle from "ui-source/Card/CardWithTitle";
import { productService } from "data-services/product";
import Head from 'next/head'
import CardProduct from "ui-source/Card/CardProduct";

const Search = (props) => {
    const { mainCategoryAndSubCategory = {}, listProduct = {}, keyword = "", suggestProduct = {} } = props;

    return (
        <>
            <Head>
                <title>Tìm kiếm &quot;{keyword}&quot;</title>
            </Head>
            <Layout>
                <Row>
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
                                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
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
                listProduct: listProduct.data,
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