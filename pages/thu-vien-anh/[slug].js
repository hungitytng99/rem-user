import React, { useEffect, useState } from 'react'
import SimGalleryLightBox from 'ui-source/lightGallery/SimGalleryLightBox'
import ImgGallery from '.'
import { findNameProductByRouter } from '../danh-muc/[category]'
import { productPath } from 'constants/productPath'
import { photos } from 'constants/constTest'
import { useRouter } from 'next/router'

export default function RemVai(props) {
    const router = useRouter();
    const slug = router.query.slug
    const [titleData, setTitleData] = useState("Không có dữ liệu")

    useEffect(() => {
        let obj = findNameProductByRouter(slug, productPath[5].childs)
        setTitleData(obj.title)
    }, [slug])

    const { listImg } = props;
    return (
        <>
            <ImgGallery title={titleData}>
                <div>
                    <SimGalleryLightBox photos={listImg} />
                </div>
            </ImgGallery>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.params;
    console.log(slug)

    return {
        props: {
            listImg: photos
        },
    };


}