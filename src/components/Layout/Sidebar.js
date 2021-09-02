import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


import { sanpham } from 'constants/sanpham';
import { thuVienAnh } from 'constants/thuvienanhLink';

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
                <label htmlFor="toogleSidebar"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></label>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#" passHref>
                        <span>Sản phẩm</span>
                    </Link>
                    <label htmlFor="node1"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></label>
                </div>
                <input id="node1" type="checkbox" />
                <div className="childs">
                    {
                        sanpham.map((item, index) => {
                            return (
                                <div key={"sidebarsp" + index} className="treeNode2">
                                    <div className="titleNode">
                                        <Link href="#" passHref>
                                            <span>{item.title}</span>
                                        </Link>
                                        <label className="plus" htmlFor={"nodeC2_i" + index}>
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
                                                            <Link href="#" passHref>
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
                    <Link href="#" passHref>
                        <span>Tư vấn</span>
                    </Link>
                </div>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#" passHref>
                        <span>Công trình</span>
                    </Link>
                </div>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#" passHref>
                        <span>Liên Hệ</span>
                    </Link>
                </div>
            </div>
            <div className='treeNode1'>
                <div className="titleNode">
                    <Link href="#" passHref>
                        <span>Thư viện ảnh</span>
                    </Link>
                    <label htmlFor="node5"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></label>
                </div>
                <input id="node5" type="checkbox" />
                <div className="childs">
                    {
                        thuVienAnh.map((item, index) => {
                            return (
                                <div className="treeNode2" key={"thuvienanh" + index}>
                                    <div className="titleNode">
                                        <Link href={item.url} passHref>
                                            <span>{item.title}</span>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
