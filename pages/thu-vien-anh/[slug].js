import React from 'react'
import SimGalleryLightBox from 'ui-source/lightGallery/SimGalleryLightBox'
// import dynamic from 'next/dynamic';
// import LightGalleryCustom from 'ui-source/lightGallery/lightGalleryCustom'
// const LightGalleryCustom = dynamic(import('ui-source/lightGallery/lightGalleryCustom'), { ssr: false });
import ImgGallery from '.'

import { photos } from 'constants/constTest'

export default function RemVai(props) {
    // console.log(props)
    const { title, listImg } = props;
    return (
        <>
            <ImgGallery title={title}>
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
    if (slug === "rem-vai") {
        return {
            props: {
                title: "Rèm vải",
                listImg: photos
            },
        };
    }
    if (slug === "rem-cau-vong") {
        return {
            props: {
                title: "Rèm cầu vồng",
                listImg: []
            },
        };
    }
    if (slug === "rem-go") {
        return {
            props: {
                title: "Rèm gỗ",
                listImg: []
            },
        };
    }
    if (slug === "rem-van-phong") {
        return {
            props: {
                title: "Rèm văn phòng",
                listImg: []
            },
        };
    }
    return {
        props: {
            title: "nodata",
            listImg: []
        },
    }
}