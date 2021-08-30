import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export default function Sidebar() {
    return (
        <div className='sidebar'>
            MENU <label for="toogleSidebar"><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></label>
        </div>
    )
}
