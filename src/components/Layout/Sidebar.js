import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { productPath } from 'constants/productPath';
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
            <SidebarMenu data={productPath} className="sidebar_body" />

        </div>
    )
}
