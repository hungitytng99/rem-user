import React from 'react'
import { danhMuc } from 'constants/danhMuc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';

function renderItemHTML(obj) {

    return (
        <ul>
            {
                obj.map((item, index) => {
                    let id = uuidv4()
                    return (
                        <li key={uuidv4()}>
                            <Link href={item.url} passHref>
                                <a className="title_item">{item.title}</a>
                            </Link>
                            {
                                item.childs.length == 0 ? "" : <>
                                    <span className="drop_icon">
                                        <label htmlFor={id}>
                                            <FontAwesomeIcon icon={faCaretDown} />
                                        </label>
                                    </span>
                                    <input style={{ display: "none" }} id={id} type='checkbox' />
                                </>
                            }
                            {
                                item.childs.length == 0 ? "" : renderItemHTML(item.childs)
                            }
                        </li>
                    )
                })
            }
        </ul>
    )


}

export default function SidebarMenu(props) {
    return (
        <div className={props.className}>
            {renderItemHTML(props.data)}
        </div>
    )
}
