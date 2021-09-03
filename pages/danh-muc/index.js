import React, { useState } from 'react'
import Layout from 'components/Layout/Layout'
import Head from 'next/head'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import CardHotProduct from 'ui-source/Card/CardHotProduct'
import { useRouter } from 'next/router';
import { filterSanPham } from 'constants/constTest'
import { sanpham } from 'constants/sanpham'
import { congTrinhList } from 'constants/constTest'

function strListNumberToArrNumber(str) {
    if (/^[0-9,]*$/.test(str) == false) return []  // test string truyền vào chỉ có số và dấu phẩy
    if (str == '') return []
    return str.split(',').map(c => +c)
}
function removeNumberInArr(num, arr) {
    return arr.filter(i => i != num)
}

export default function DanhMucSanPham(props) {
    const router = useRouter();
    let filterType = strListNumberToArrNumber(router.query?.type || '') // nếu truyền vào '' => [0] mảng có số 0
    filterType = removeNumberInArr(0, filterType);  // không có type = 0 -> trường hợp query.type rỗng thì cho ra mảng []

    function toggleCheckbox(type) {
        console.log(router.query)
        let url = "/danh-muc";
        // console.log(filterType)
        if (filterType.includes(type)) {
            filterType = removeNumberInArr(type, filterType)
            url = filterType.length != 0 ? url + "?type=" + filterType.join() : url
            return router.replace(url)
        } else {
            filterType.push(type)
            url = url + "?type=" + filterType.join();
            return router.replace(url)
        }
    }
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
                            <Breadcrumb.Item href="/danh-muc">Danh mục sản phẩm</Breadcrumb.Item>
                            <Breadcrumb.Item active>Tất cả</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Row>
                        <Col lg={10}>
                            <Row>
                                <Col xs={12} lg={6} className="danh_muc-title">
                                    Tất cả sản phẩm
                                </Col>
                                <Col xs={12} lg={6}>
                                    Sắp xếp
                                </Col>
                            </Row>
                            <Row className="danh_muc-list_san_pham">
                                {
                                    props.dataShow.map((item, index) => {
                                        return (
                                            <Col key={"listsp" + index} lg={3} md={4} xs={6}>
                                                <CardHotProduct {...item}></CardHotProduct>
                                            </Col>
                                        )
                                    })
                                }

                            </Row>
                        </Col>
                        <Col lg={2}>
                            <div>Lọc sản phẩm</div>
                            {
                                filterSanPham.map((item, index) => {
                                    return (
                                        <Form.Check
                                            key={"checkboxsanpham" + index}
                                            type="checkbox"
                                            label={item.title}
                                            checked={filterType.includes(item.type)}
                                            onChange={() => toggleCheckbox(item.type)}
                                        />

                                    )
                                })
                            }

                        </Col>
                    </Row>

                </div>

            </Layout>

        </>
    )
}



export async function getServerSideProps(context) {
    console.log(context.query);
    // const totalItem = congTrinhList.length
    // const totalPage = Math.ceil(totalItem / itemsPerPage)
    let pageIndex = context?.query?.page || 1
    let filterTypeSelected = strListNumberToArrNumber(context?.query?.type || '')
    let dataShow = []
    if (filterTypeSelected.length == 0) {
        dataShow = congTrinhList
    } else {
        dataShow = congTrinhList.filter(item =>
            filterTypeSelected.includes(item.type)
        )
    }

    // const beginItemIndex = itemsPerPage * (pageIndex - 1)
    // const dataShow = congTrinhList.slice(beginItemIndex, beginItemIndex + itemsPerPage)
    console.log(dataShow)
    return {
        props: {
            // pageIndex: pageIndex,
            dataShow: dataShow,
            // totalItem: totalItem,
            // totalPage: totalPage
        },
    };
}