import Link from 'next/link'
import React from 'react'
import Pagination from 'react-bootstrap/Pagination'

export default function PaginationCustom(props) {
    const { active = 1, totalPage = 0 } = props
    let items = [];
    for (let number = 1; number <= totalPage; number++) {
        items.push(
            <Link href={"/cong-trinh?page=" + number} passHref>
                <Pagination.Item key={number} active={number === active}>
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
