import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import Breadcrumb from 'react-bootstrap/Breadcrumb'



export default function DanhMucSanPham(props) {
    const { children } = props;

    return (
        <>
            <Head>
                <title>Danh mục sản phẩm</title>
            </Head>
            <Layout>
                <div className="danh_muc">
                    <div className="danh_muc-breadcrumb">
                        <Breadcrumb>
                            <Breadcrumb.Item href="/">Trang chủ</Breadcrumb.Item>
                            <Breadcrumb.Item href="/danh-muc/all">Danh mục sản phẩm</Breadcrumb.Item>
                            <Breadcrumb.Item active>Tất cả</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    {children}

                </div>
            </Layout>
        </>
    )
}


