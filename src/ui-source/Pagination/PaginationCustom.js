import Link from 'next/link'
import React from 'react'
import Pagination from 'react-bootstrap/Pagination'
import { v4 as uuidv4 } from 'uuid';

export default function PaginationCustom(props) {
    const { active = 1, totalPage = 0, baseUrl = "#" } = props
    let items = [];
    const urlConection = baseUrl.includes('?') ? "&page=" : "?page=";
    for (let number = 1; number <= totalPage; number++) {
        items.push(
            <Link key={uuidv4()} href={baseUrl + urlConection + number} passHref>
                <Pagination.Item active={number === active}>
                    {number}
                </Pagination.Item>
            </Link>
        );
    }
    return (
        <div style={{ width: 'fit-content', margin: "0 auto" }}>
            <Pagination>{items}</Pagination>
        </div>
    )
}
