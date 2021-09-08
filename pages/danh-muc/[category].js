import React, { useEffect, useState } from 'react'
import DanhMucMenu from 'ui-source/DropdownMenu/DanhMucMenu'
import CardProduct from 'ui-source/Card/CardProduct'
import { filterSanPham } from 'constants/constTest'
import { Col, Form, Row } from 'react-bootstrap'
import router, { useRouter } from 'next/router';


import { congTrinhList } from 'constants/constTest'
import { productPath } from 'constants/productPath'
import DanhMucSanPham from '.'
import PaginationCustom from 'ui-source/Pagination/PaginationCustom'
import { getListCategory } from 'constants/productPath'
import { productService } from 'data-services/product'
import FullPageLoading from 'ui-source/Loading/FullPageLoading'
import LoadingApart from 'ui-source/Loading/LoadingApart'

function strFilterToArrStr(str) {
    if (/^[a-z0-9,-]*$/.test(str) == false) return []  // test string truyền vào chỉ có số và dấu phẩy
    if (str == '') return []
    return str.split(',').filter(c => c != "")  // lưu ý map(c => +c) chuyển thảnh mảng số
}

function removeItemInArr(str, arr) {
    return arr.filter(i => i != str)
}


function findNameProductByRouter(urlPath, arr) {
    var result = null

    function findTitleInArr(urlPath, arr) {
        let length = arr.length
        for (let i = 0; i < length; i++) {
            // console.log(arr[i].url.split('/').pop())
            if (arr[i].url.split('/').pop() === urlPath) {
                result = arr[i]
                break;
            } else {
                findTitleInArr(urlPath, arr[i].childs)
                if (result != null) break;
            }
        }
    }
    findTitleInArr(urlPath, arr)
    if (result == null) return { title: "khong co ket qua" }
    else return result
}

function getFilterListBySlug(arrData) {
    var arrResult = []
    function recusiveGetdata(arrData) {
        let length = arrData.length
        for (let i = 0; i < length; i++) {
            arrResult.push({
                title: arrData[i].title,
                type: arrData[i].type
            })
            // recusiveGetdata(arrData[i].childs)
        }
    }
    recusiveGetdata(arrData)
    return arrResult
}

function renderBaseUrlPagination(urlPath, router_query) {
    let result = urlPath
    if (router_query.type == undefined) {
        result = router_query.sort == undefined ? urlPath : urlPath + "?sort=" + router_query.sort
    } else {
        result = result + "?type=" + router_query.type;
        result = router_query.sort == undefined ? result : result + "&sort=" + router_query.sort;
    }
    return result
}
function renderBaseUrlSort(urlPath, router_query) {
    let result = urlPath
    if (router_query.type == undefined) {
        result = urlPath + "?sort=";
    } else {
        result = result + "?type=" + router_query.type + "&sort=";
    }
    return result
}

const itemsPerPage = 12
export default function Category(props) {
    const router = useRouter();
    const [menu, setMenu] = useState(productPath)
    const [loading, setLoading] = useState(true)
    const [titleData, setTitleData] = useState("Không có dữ liệu")
    const [filterListBySlug, setFilterListBySlug] = useState([])     // hiển thị ra checkbox filter
    const slug = router.query.category
    const baseUrlPagination = renderBaseUrlPagination(props.baseUrl, router.query)

    useEffect(() => {
        setMenu(productPath)
    }, [productPath])

    useEffect(() => {
        if (slug === "all") {
            setTitleData("Tất cả sản phẩm")
            setFilterListBySlug(getFilterListBySlug(productPath[1].childs))
        } else {
            let obj = findNameProductByRouter(slug, productPath[1].childs)
            setTitleData(obj.title)
            setFilterListBySlug(getFilterListBySlug(obj.childs))
        }// lấy xong checkbox filter và tiêu đề sản phẩm
    }, [slug])

    useEffect(() => {
        setLoading(!props.dataShowOnScreen)
    }, [props.dataShowOnScreen])

    let filterType = strFilterToArrStr(router.query?.type || '') // nếu truyền vào '' => [0] (mảng có số 0)
    function toggleCheckbox(type) {
        console.log(router.query)
        let url = props.baseUrl;
        // console.log(filterType)
        if (filterType.includes(type)) {
            filterType = removeItemInArr(type, filterType)
            url = filterType.length != 0 ? url + "?type=" + filterType.join() : url
            return router.replace(url)
        } else {
            filterType.push(type)
            url = url + "?type=" + filterType.join();
            return router.replace(url)
        }
    }

    function sortSelectionChange(event) {
        // console.log(event.target.value)
        let url = renderBaseUrlSort(props.baseUrl, router.query)
        url = url + event.target.value
        router.replace(url)
    }
    return (
        <DanhMucSanPham title={titleData}>

            <Row>
                <Col lg={9}>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} lg={6} className="danh_muc-title">
                            {titleData}
                        </Col>
                        <Col xs={12} lg={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                            <span style={{ marginRight: '20px', display: 'inline-block', width: 'max-content', fontSize: 'larger' }}>Sắp xếp</span>
                            <Form.Select style={{ width: 'max-content' }} onChange={(e) => sortSelectionChange(e)} >
                                <option value="latest">Mới nhất</option>
                                <option value="oldest">Cũ nhất</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="danh_muc-list_san_pham" style={{ display: loading ? "block" : "none", padding: '30px 0px' }}>
                        <LoadingApart />
                    </Row>
                    <Row className="danh_muc-list_san_pham">
                        {
                            props.dataShowOnScreen.map((item, index) => {
                                return (
                                    <Col key={"listsp" + index} lg={3} md={4} xs={6}>
                                        <CardProduct product={item}></CardProduct>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row style={{ marginTop: '15px' }}>
                        <PaginationCustom
                            activePage={Number(props.pageIndex)}
                            totalItem={props.totalItem}
                            baseUrl={baseUrlPagination}
                            itemsPerPage={itemsPerPage}
                        ></PaginationCustom>
                    </Row>
                </Col>
                <Col lg={3}>
                    <div>Danh Mục</div>
                    <DanhMucMenu data={menu} className="dropdown_menu" />
                    <div style={{ marginTop: '15px' }}>Lọc sản phẩm</div>
                    {
                        filterListBySlug.map((item, index) => {
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
        </DanhMucSanPham>
    )
}



export async function getServerSideProps(context) {
    const { category } = context.params;
    const { page = 1, sort = "lastest", type = '' } = context.query
    const baseUrl = "/danh-muc/" + category
    let filterType = strFilterToArrStr(type)
    let lengthFilterArr = filterType.length;
    let dataShowOnScreen = []
    let paramsPost = {
        productsPerPage: itemsPerPage,
        pageNumber: page,
        orderType: sort === "oldest" ? 1 : 2,
    }

    if (category === "all") {
        if (lengthFilterArr == 0) {
            let result = await productService.listProduct(paramsPost);
            dataShowOnScreen = [...result.data.listProductReturn]
        } else {
            for (let i = 0; i < lengthFilterArr; i++) {
                let result = await productService.listProductByMixCategorySlug(filterType[i], paramsPost);
                dataShowOnScreen = [...dataShowOnScreen, ...result.data.listProductReturn]
            }
        }
    } else {
        if (lengthFilterArr == 0) {
            let result = await productService.listProductByMixCategorySlug(category, paramsPost);
            dataShowOnScreen = [...result.data.listProductReturn]
        } else {
            for (let i = 0; i < lengthFilterArr; i++) {
                let result = await productService.listProductByMixCategorySlug(filterType[i], paramsPost);
                dataShowOnScreen = [...dataShowOnScreen, ...result.data.listProductReturn]
            }
        }
    }

    console.log({ category, page, sort, filterType, dataShowOnScreen });

    const totalItem = dataShowOnScreen.length

    return {
        props: {
            pageIndex: page,
            baseUrl: baseUrl,
            dataShowOnScreen: dataShowOnScreen,
            totalItem: totalItem,
        },
    };
}

