import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { sanpham } from 'constants/sanpham';
export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '10px 15px',
                color: 'white',
                fontSize: '24px',
                fontWeight: 'bold',
                borderBottom: '1px solid gray'
            }}>
                <span>MENU</span>
                <label for="toogleSidebar"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></label>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#">
                        <span>Sản phẩm</span>
                    </Link>
                    <label for="node1"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></label>
                </div>
                <input id="node1" type="checkbox" />
                <div className="childs">
                    {
                        sanpham.map((item, index) => {
                            return (
                                <div key={"sidebarsp" + index} className="treeNode2">
                                    <div className="titleNode">
                                        <Link href="#">
                                            <span>{item.title}</span>
                                        </Link>
                                        <label className="plus" for={"nodeC2_i" + index}>
                                            <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                                        </label>

                                    </div>
                                    <input id={"nodeC2_i" + index} type="checkbox" />
                                    <div className="childs">
                                        {
                                            item.childs.map((sp, i) => {
                                                return (
                                                    <div key={"sidebarspchild" + i} className="treeNode3">
                                                        <div className="titleNode">
                                                            <Link href="#">
                                                                <span>{sp}</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#">
                        <span>Tư vấn</span>
                    </Link>
                </div>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#">
                        <span>Công trình</span>
                    </Link>
                </div>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#">
                        <span>Liên Hệ</span>
                    </Link>
                </div>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#">
                        <span>Thư viện ảnh</span>
                    </Link>
                    <label for="node5"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></label>
                </div>
                <input id="node5" type="checkbox" />
                <div className="childs">
                    <div className="treeNode2">
                        <div className="titleNode">
                            <Link href="#">
                                <span>Rèm vải</span>
                            </Link>
                        </div>
                    </div>
                    <div className="treeNode2">
                        <div className="titleNode">
                            <Link href="#">
                                <span>Rèm cầu vồng</span>
                            </Link>
                        </div>
                    </div>
                    <div className="treeNode2">
                        <div className="titleNode">
                            <Link href="#">
                                <span>Rèm gỗ</span>
                            </Link>
                        </div>
                    </div>
                    <div className="treeNode2">
                        <div className="titleNode">
                            <Link href="#">
                                <span>Rèm văn phòng</span>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
