import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { productPath } from 'constants/productPath';
import SidebarMenu from 'ui-source/DropdownMenu/SidebarMenu';
import { getListCategory } from 'constants/productPath';

export default function Sidebar() {

    const [menu, setMenu] = useState(productPath)
    useEffect(() => {
        setMenu(productPath)
    }, [])

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
            <SidebarMenu data={menu} className="sidebar_body" />

        </div>
    )
}
