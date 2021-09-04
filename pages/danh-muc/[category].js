import React from 'react'
import DanhMucMenu from 'ui-source/DropdownMenu/DanhMucMenu'
import CardHotProduct from 'ui-source/Card/CardHotProduct'
import { filterSanPham } from 'constants/constTest'
import { Col, Form, Row } from 'react-bootstrap'
import { useRouter } from 'next/router';


import { congTrinhList } from 'constants/constTest'
import { sideBarData } from 'constants/sidebar'
import DanhMucSanPham from '.'

function strListNumberToArrNumber(str) {
    if (/^[0-9,]*$/.test(str) == false) return []  // test string truyền vào chỉ có số và dấu phẩy
    if (str == '') return []
    return str.split(',').map(c => +c)
}
function removeNumberInArr(num, arr) {
    return arr.filter(i => i != num)
}

function findTitleInArr(urlPath, arr) {
    let length = arr.length
    for (let i = 0; i < length; i++) {
        if (arr[i].url.split('/').pop() === urlPath) {
            return arr[i]
        } else {
            findTitleInArr(urlPath, arr[i].childs)
        }
    }
    return {
        title: "Không có sản phẩm"
    }
}

export default function Category(props) {

    const router = useRouter();
    let filterType = strListNumberToArrNumber(router.query?.type || '') // nếu truyền vào '' => [0] mảng có số 0
    filterType = removeNumberInArr(0, filterType);  // không có type = 0 -> trường hợp query.type rỗng thì cho ra mảng []

    function sortSelectionChange(event) {
        console.log(event.target.value)
        let url = "/danh-muc/all"
        url = url + "?sort=" + event.target.value
        router.replace(url)
    }

    function toggleCheckbox(type) {
        console.log(router.query)
        let url = "/danh-muc/all";
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
        <DanhMucSanPham>
            <Row>
                <Col lg={9}>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} lg={6} className="danh_muc-title">
                            {props.titleData}
                        </Col>
                        <Col xs={12} lg={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                            <span style={{ marginRight: '20px', display: 'inline-block', width: 'max-content', fontSize: 'larger' }}>Sắp xếp</span>
                            <Form.Select style={{ width: 'max-content' }} onChange={(e) => sortSelectionChange(e)}>
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
                                        <CardHotProduct {...item}></CardHotProduct>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Col>
                <Col lg={3}>
                    <div>Danh Mục</div>
                    <DanhMucMenu data={sideBarData} className="dropdown_menu" />
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


export async function getServerSideProps(context) {
    const { category } = context.params;

    let titleData = "Không tìm thấy"
    if (category === "all") {
        titleData = "Tất cả sản phẩm"
    } else {
        let obj = findTitleInArr(category, sideBarData[1].childs)
        titleData = obj.title
    }
    console.log(category, context.query);
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
    // console.log(dataShow)
    return {
        props: {
            // pageIndex: pageIndex,
            dataShow: dataShow,
            titleData: titleData,
            // totalItem: totalItem,
            // totalPage: totalPage
        },
    };
}

