import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

import { sideBarData } from 'constants/sidebar';
import { sanpham } from 'constants/sanpham';
import { thuVienAnh } from 'constants/thuvienanhLink';
import DanhMucMenu from 'ui-source/DropdownMenu/DanhMucMenu';
import SidebarMenu from 'ui-source/DropdownMenu/SidebarMenu';

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
            <SidebarMenu data={sideBarData} className="sidebar_body" />

        </div>
    )
}
