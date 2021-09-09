import React, { useEffect, useState } from 'react'
import SimGalleryLightBox from 'ui-source/lightGallery/SimGalleryLightBox'
import ImgGallery from '.'
import { findNameProductByRouter } from '../danh-muc/[category]'
import { productPath } from 'constants/productPath'

import { useRouter } from 'next/router'
import { galleryService } from 'data-services/thu-vien-anh'

export default function RemVai(props) {
    const router = useRouter();
    const slug = router.query.slug
    const [titleData, setTitleData] = useState("Không có dữ liệu")

    useEffect(() => {
        let obj = findNameProductByRouter(slug, productPath[5].childs)
        setTitleData(obj.title)
    }, [slug])

    return (
        <>
            <ImgGallery title={titleData}>
                <div>
                    <SimGalleryLightBox photos={props.dataShowOnScreen} />
                </div>
            </ImgGallery>
        </>
    )
}

export async function getServerSideProps(context) {
    const { slug } = context.params;
    console.log(slug)
    let dataShowOnScreen = []
    try {
        let result = await galleryService.listImgByMainCategorySlug(slug);
        dataShowOnScreen = [...result.data]
        // console.log(dataShowOnScreen)
        return {
            props: {
                dataShowOnScreen: dataShowOnScreen,
            },
        };
    } catch (error) {
        console.log(error)
        return {
            notFound: true
        };
    }


}