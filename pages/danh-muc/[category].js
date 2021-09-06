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

function strListNumberToArrNumber(str) {
    if (/^[0-9,]*$/.test(str) == false) return []  // test string truyền vào chỉ có số và dấu phẩy
    if (str == '') return []
    return str.split(',').map(c => +c)
}
function removeNumberInArr(num, arr) {
    return arr.filter(i => i != num)
}


function recurseFindObj(urlPath, arr) {
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

export default function Category(props) {
    const [menu, setMenu] = useState(productPath)
    useEffect(() => {
        (async function () {
            let result = await getListCategory();
            // console.log(result);
            setMenu([...result])
        })();
    }, [])
    const router = useRouter();
    // console.log(router)
    const baseUrlPagination = renderBaseUrlPagination(props.baseUrl, router.query)

    console.log(baseUrlPagination)

    let filterType = strListNumberToArrNumber(router.query?.type || '') // nếu truyền vào '' => [0] mảng có số 0
    filterType = removeNumberInArr(0, filterType);  // không có type = 0 -> trường hợp query.type rỗng thì cho ra mảng []

    function sortSelectionChange(event) {
        // console.log(event.target.value)
        let url = renderBaseUrlSort(props.baseUrl, router.query)
        url = url + event.target.value
        router.replace(url)
    }

    function toggleCheckbox(type) {
        console.log(router.query)
        let url = props.baseUrl;
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
        <DanhMucSanPham title={props.titleData}>
            <Row>
                <Col lg={9}>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} lg={6} className="danh_muc-title">
                            {props.titleData}
                        </Col>
                        <Col xs={12} lg={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                            <span style={{ marginRight: '20px', display: 'inline-block', width: 'max-content', fontSize: 'larger' }}>Sắp xếp</span>
                            <Form.Select style={{ width: 'max-content' }} onChange={(e) => sortSelectionChange(e)} >
                                <option value="latest">Mới nhất</option>
                                <option value="oldest">Cũ nhất</option>
                            </Form.Select>
                        </Col>
                    </Row>
                    <Row className="danh_muc-list_san_pham">
                        {
                            props.dataShow.map((item, index) => {
                                return (
                                    <Col key={"listsp" + index} lg={3} md={4} xs={6}>
                                        <CardProduct {...item}></CardProduct>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <PaginationCustom active={Number(props.pageIndex)} totalPage={props.totalPage} baseUrl={baseUrlPagination}></PaginationCustom>
                    </Row>
                </Col>
                <Col lg={3}>
                    <div>Danh Mục</div>
                    <DanhMucMenu data={menu} className="dropdown_menu" />
                    <div style={{ marginTop: '15px' }}>Lọc sản phẩm</div>
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
        </DanhMucSanPham>
    )
}

const itemsPerPage = 12
export async function getServerSideProps(context) {
    const { category } = context.params;
    let titleData = "Không tìm thấy"
    if (category === "all") {
        titleData = "Tất cả sản phẩm"
    } else {

        let obj = recurseFindObj(category, productPath[1].childs)
        titleData = obj.title
    }
    console.log(context.query);



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

    const totalItem = dataShow.length
    const totalPage = Math.ceil(totalItem / itemsPerPage)
    const beginItemIndex = itemsPerPage * (pageIndex - 1)
    const dataShowClient = dataShow.slice(beginItemIndex, beginItemIndex + itemsPerPage)
    // console.log(dataShow)
    const baseUrl = "/danh-muc/" + category
    return {
        props: {
            pageIndex: pageIndex,
            dataShow: dataShowClient,
            titleData: titleData,
            // totalItem: totalItem,
            totalPage: totalPage,
            baseUrl: baseUrl
        },
    };
}

