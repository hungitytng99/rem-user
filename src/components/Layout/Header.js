import React, { useEffect, useState, useRef } from 'react'
import { ImagesPath } from 'constants/ImagesPath';
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-modal'
import { faEnvelope, faSearch, faBars, faTimes, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categoryService } from 'data-services/category';
import { useRouter } from 'next/router'
import Sidebar from './Sidebar';
import { Container } from 'react-bootstrap';

import { productPath } from 'constants/productPath';
import { dataRouterLink } from 'constants/productPath';
import { getListCategory } from 'constants/productPath';

const customStyles = {
    content: {
        top: '0',
        left: '0',
        right: '30%',
        bottom: '0',
        zIndex: 998,
        backgroundColor: '#fff',
        borderRadius: '0px',
        padding: '0px',
        borderTop: 'none',
        animation: 'move-right linear 0.3s',
        transhtmlForm: 'translateX(0)',
    },
    overlay: {
        zIndex: 999,
        animation: 'appear linear 0.3s',
    }
};
Modal.setAppElement('#__next');



const Header = (props) => {

    const { menu } = props
    const url = useRouter().route

    const [searchBarOpen, setSearchBarOpen] = useState(false)
    const searchParams = useRef();

    function toggleSearhBar() {
        setSearchBarOpen(!searchBarOpen)
    }

    const search = () => {
        if (searchParams.current.value) {
            location.href = "/tim-kiem/" + searchParams.current.value;
        }
    }

    const handlePressEnter = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }
    return (
        <header className="header">
            {/* {isShowLoading && <FullPageLoading opacity={0.5} />} */}
            <Container>
                <div className="header-top">
                    <div className="contact">
                        <Link href={{ pathname: 'tel:0962020446' }} passHref>
                            <a className="contact-item">
                                <div className="contact-item-icon">
                                    <FontAwesomeIcon icon={faMobileAlt} />
                                </div>
                                <div className="contact-item-title">
                                    0962.020.446
                                </div>
                            </a>
                        </Link>
                        <Link href={{ pathname: 'mailto:sales@giangminhviet.com' }} passHref>
                            <a target="_blank" data-tip="Mail: sales@giangminhviet.com" className="contact-item">
                                <div className="contact-item-icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="contact-item-title">
                                    manhremvuonghong@gmail.com
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div style={{ position: 'absolute', right: '0', top: '0' }}>
                        <p>Hỗ trợ kĩ thuật:</p>
                        <div className="">
                            <FontAwesomeIcon icon={faMobileAlt} />   0981.199.350
                        </div>
                    </div>
                </div>
            </Container>
            <Container>
                <div className="header-body">
                    <Link href="/" passHref>
                        <div className="logo">
                            <Image src={ImagesPath.LOGO} alt="Trang Chủ Rèm Vương Hồng" title="Trang chủ" />
                        </div>

                    </Link>
                    <div className="nav">
                        <div className='nav-item'>
                            <Link href="/" passHref>
                                <span className='title' style={{ color: url == "/" ? '#d61c1f' : '' }}>Trang chủ</span>
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link href="/danh-muc/all" passHref>
                                <span className='title' style={{ color: url.includes('/danh-muc') ? '#d61c1f' : '' }}>Danh mục</span>
                            </Link>
                            <div className='submenu submenu_max_width'>
                                {
                                    menu.map((item, index) => {
                                        return (
                                            <div key={"spnode" + index} className="menu_list">
                                                <Link href={item.url} passHref>
                                                    <div className="title">{item.title}</div>
                                                </Link>
                                                {item.childs.map((sp, i) => {
                                                    return (
                                                        <Link key={"spchild" + i} href={sp.url} passHref>
                                                            <div className="subTitle">{sp.title}</div>
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='nav-item'>
                            <Link href="/tu-van" passHref>
                                <span className='title' style={{ color: url.includes('/tu-van') ? '#d61c1f' : '' }}>Tư vấn</span>
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link href="/cong-trinh" passHref>
                                <span className='title' style={{ color: url.includes('/cong-trinh') ? '#d61c1f' : '' }}>Công trình</span>
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <Link href="/lien-he" passHref>
                                <span className='title' style={{ color: url.includes('/lien-he') ? '#d61c1f' : '' }}>Liên Hệ</span>
                            </Link>
                        </div>
                        <div className='nav-item'>
                            <span className='title' style={{ color: url.includes('/thu-vien-anh') ? '#d61c1f' : '' }}>Thư Viện Ảnh</span>
                            <div className='submenu'>
                                {
                                    productPath[5].childs.map((item, index) => {
                                        return (
                                            <Link href={item.url} passHref key={"headthuvienanh" + index}>
                                                <div className="single_list">{item.title}</div>
                                            </Link>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="search">
                            <div className="search-icon" onClick={toggleSearhBar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </div>
                            <div style={{ fontWeight: 'bold' }}>Tìm Kiếm</div>
                            <div className="search-bar" style={{ display: searchBarOpen ? 'block' : 'none' }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", color: "#d61c1f", fontWeight: 'bold' }}>
                                    <span>TÌM KIẾM</span>
                                    <FontAwesomeIcon onClick={toggleSearhBar} icon={faTimes}></FontAwesomeIcon>
                                </div>
                                <div style={{ height: '40px' }}>
                                    <input ref={searchParams} style={{ height: 'inherit', border: "0.5px solid gray", width: "240px", fontSize: 'initial', padding: '0 10px' }} type="text" placeholder="Tìm kiếm sản phẩm..." />
                                    <span
                                        style={{ height: 'inherit', display: 'inline-block', width: '40px', borderRadius: '5px', background: '#22232b', textAlign: 'center', lineHeight: '40px', color: 'white' }}
                                        onClick={search}
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="toggle_mobile">
                        <label htmlFor="toogleSidebar"><FontAwesomeIcon icon={faBars} /></label>
                    </div>
                </div>
            </Container>


            <input id='toogleSidebar' type='checkbox' style={{ display: 'none' }} />
            <Sidebar />
        </header >
    )
}
export default Header;