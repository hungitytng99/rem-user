import React, { useEffect, useRef, useState } from 'react'
import SimGalleryLightBox from 'ui-source/lightGallery/SimGalleryLightBox'
import ImgGallery from '.'
import { findNameProductByRouter } from '../danh-muc/[category]'
import { productPath } from 'constants/productPath'

import { useRouter } from 'next/router'
import { galleryService } from 'data-services/thu-vien-anh'
import LoadingApart from 'ui-source/Loading/LoadingApart'

function calculateRatio(num_1, num_2) {
    for (let num = num_2; num > 1; num--) {
        if ((num_1 % num) == 0 && (num_2 % num) == 0) {
            num_1 = num_1 / num;
            num_2 = num_2 / num;
        }
    }
    let ratio = [num_1, num_2];
    return ratio;
}
export default function RemVai(props) {
    const router = useRouter();
    const slug = router.query.slug
    const [titleData, setTitleData] = useState("Không có dữ liệu")
    const [gallery, setGallery] = useState([])
    const [loading, setLoading] = useState(true)
    const listimg = useRef([])
    listimg.current.length = props.dataShowOnScreen.length
    useEffect(() => {
        let obj = findNameProductByRouter(slug, productPath[5].childs)
        setTitleData(obj.title)
    }, [slug])

    useEffect(() => {
        setTimeout(() => {
            let data = props.dataShowOnScreen.map((item, index) => {
                let ratio = calculateRatio(listimg.current[index].width, listimg.current[index].height)
                return {
                    ...item,
                    width: ratio[0],
                    height: ratio[1]
                }
            })
            setGallery(data)
            setLoading(false)

        }, 2500)
    }, [props.dataShowOnScreen])

    return (
        <>
            <ImgGallery title={titleData}>
                <div style={{ display: 'none' }}>
                    {
                        props.dataShowOnScreen.map((item, index) => {
                            return (
                                <img ref={el => listimg.current[index] = el} key={"thuvienanh" + index} src={item.src}></img>
                            )
                        })
                    }
                </div>
                <div style={{ display: loading ? "block" : "none", margin: '30px 0px' }}>
                    <LoadingApart />
                </div>
                <div style={{ display: loading ? "none" : "block" }}>
                    <SimGalleryLightBox photos={gallery} />
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