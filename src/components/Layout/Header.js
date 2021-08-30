import React, { useEffect, useState } from 'react'
import { ImagesPath } from 'constants/ImagesPath';
import Link from 'next/link'
import Image from 'next/image'
import Modal from 'react-modal'
import { faCameraRetro, faPhoneVolume, faEnvelope, faAngleDown, faSearch, faBars, faTimes, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { categoryService } from 'data-services/category';
import { useRouter } from 'next/router'
import Sidebar from './Sidebar';


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

const sanpham = [
    {
        title: "Rèm vải",
        childs: [
            "Rèm vải một màu",
            "Rèm vải hoa văn",
            "Rèm voan",
            "Rèm vải cao cấp",
            "Rèm yếm võng"
        ]
    },
    {
        title: "Rèm văn phòng",
        childs: [
            'Rèm cuốn',
            'Rèm cuốn Hàn Quốc',
            'Rèm cuốn in tranh',
            'Rèm cuốn xuyên sáng',
            'Rèm sáo nhôm',
            'Rèm lá dọc'
        ]
    },
    {
        title: 'Rèm cầu vồng',
        childs: [
            'Rèm cầu vồng giá rẻ',
            'Rèm cầu vồng cản sáng',
        ]
    },
    {
        title: 'Rèm Roman',
        childs: [
            'Rèm Roman Hàn Quốc',
            'Rèm Roman thanh kẹp',
        ]
    },
    {
        title: 'Sản Phẩm khác',
        childs: [
            'Bạt che nắng',
            'Giàn phơi thông minh',
            'Cửa lưới chống muỗi',
            'Lưới an toàn',
            'Rèm ngăn lạnh PVC',
            'Phụ kiện kèm cửa'
        ]
    },
    {
        title: 'Rèm Gỗ',
        childs: []
    },
    {
        title: 'Động cơ rèm',
        childs: []
    },
    {
        title: 'Rèm Hội Trường',
        childs: []
    },
    {
        title: 'Thảm',
        childs: []
    },
    {
        title: 'Rèm y tế kháng khuẩn',
        childs: []
    }
]

const Header = () => {
    const [searchBarOpen, setSearchBarOpen] = useState(false)
    const [categoryIsOpen, setCategoryIsOpen] = useState(false);
    const [listCategory, setListCategory] = useState([]);
    const [searchParams, setSearchParams] = useState('');
    const [collapseCategory, setCollapseCategory] = useState(false);
    const router = useRouter()
    function toggleSearhBar() {
        setSearchBarOpen(!searchBarOpen)
    }
    function openCategoryModal() {
        setCategoryIsOpen(true);
    }
    function closeCategoryModal() {
        setCategoryIsOpen(false);
    }
    const search = () => {
        if (searchParams) {
            location.href = "/tim-kiem/" + searchParams;
        }
    }
    const searchParamsChange = (e) => {
        setSearchParams(e.target.value);
    }

    const handlePressEnter = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }
    // const listCategory = useSelector(state => state.category.current)
    useEffect(() => {

        const getListCategory = async () => {
            const listCategoryTmp = await categoryService.listCategory();
            setListCategory(listCategoryTmp.data);
        }
        getListCategory();
    }, [])
    return (
        <header className="header">
            {/* {isShowLoading && <FullPageLoading opacity={0.5} />} */}
            <div className="header-top">
                <div className="contact">
                    <Link href={{ pathname: 'tel:84966854224' }}>
                        <a className="contact-item">
                            <div className="contact-item-icon">
                                <FontAwesomeIcon icon={faMobileAlt} />
                            </div>
                            <div className="contact-item-title">
                                0982.345.6789
                            </div>
                        </a>
                    </Link>
                    <Link href={{ pathname: 'mailto:sales@giangminhviet.com' }} >
                        <a target="_blank" data-tip="Mail: sales@giangminhviet.com" className="contact-item">
                            <div className="contact-item-icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className="contact-item-title">
                                rem@gmail.com
                            </div>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="header-body">
                <Link href="/">
                    <div className="logo">
                        <Image src={ImagesPath.LOGO} alt="Trang Chủ" />
                    </div>

                </Link>
                <div className="nav">
                    <div className='nav-item'>
                        <span className='title'>Giới thiệu</span>
                    </div>
                    <div className='nav-item'>
                        <span className='title'>Sản Phẩm</span>
                        <div className='submenu submenu_max_width'>
                            {
                                sanpham.map(item => {
                                    return (
                                        <div className="menu_list">
                                            <Link href="#"><div className="title">{item.title}</div></Link>
                                            {item.childs.map(sp => {
                                                return (
                                                    <Link href="#"><div className="subTitle">{sp}</div></Link>
                                                )
                                            })}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='nav-item'>
                        <span className='title'>Tư vấn</span>
                    </div>
                    <div className='nav-item'>
                        <span className='title'>Báo Giá</span>
                        <div className='submenu submenu_max_width'>
                            <div className="menu_list">
                                <Link href="#"><div className="title">Báo giá rèm vải</div></Link>
                            </div>
                            <div className="menu_list">
                                <Link href="#"><div className="title">Báo giá Rèm Cầu Vồng</div></Link>
                            </div>
                            <div className="menu_list">
                                <Link href="#"><div className="title">Báo giá rèm cuốn</div></Link>
                            </div>
                            <div className="menu_list" style={{ width: "40%", color: "red", textAlign: 'center', fontSize: "18px" }}>
                                <Link href="#"><div className="title">Mới nhất hôm nay</div></Link>
                                <div>
                                    Chưa có sản phẩm nào trong này.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='nav-item'>
                        <span className='title'>Công trình</span>
                    </div>
                    <div className='nav-item'>
                        <span className='title'>Tuyển dụng</span>
                        <div className='submenu '>
                            <Link href="#"><div className="single_list">Tuyển dụng nhân viên kinh doanh</div></Link>
                        </div>
                    </div>
                    <div className='nav-item'>
                        <span className='title'>Liên Hệ</span></div>
                    <div className='nav-item'>
                        <span className='title'>Thư Viện Ảnh</span>
                        <div className='submenu'>
                            <Link href="#"><div className="single_list">Rèm vải</div></Link>
                            <Link href="#"><div className="single_list">Rèm cầu vồng</div></Link>
                            <Link href="#"><div className="single_list">Rèm Gỗ</div></Link>
                            <Link href="#"><div className="single_list">Rèm văn phòng</div></Link>
                        </div>
                    </div>
                    <div className="search">
                        <div className="search-icon" onClick={toggleSearhBar}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
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
                                <select style={{ height: 'inherit', border: "0.5px solid gray", width: "80px", outline: 'none' }}>
                                    <option>Tất cả</option>
                                </select>
                                <input style={{ height: 'inherit', border: "0.5px solid gray", width: "240px", fontSize: 'initial' }} type="text" placeholder="Tìm kiếm sản phẩm..." />
                                <span style={{ height: 'inherit', display: 'inline-block', width: '40px', borderRadius: '5px', background: '#22232b', textAlign: 'center', lineHeight: '40px', color: 'white' }}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="toggle_mobile">
                    <label for="toogleSidebar"><FontAwesomeIcon icon={faBars} /></label>
                </div>
            </div>
            <input id='toogleSidebar' type='checkbox' style={{ display: 'none' }} />
            <Sidebar />
        </header >
    )
}
export default Header;