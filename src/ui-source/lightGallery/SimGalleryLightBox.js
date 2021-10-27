import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'

const options = {
    settings: {
        overlayColor: "rgb(0, 0, 0, 0.9)",
        autoplaySpeed: 1500,
        transitionSpeed: 900,
        slideAnimationType: "both",
        slideSpringValues: [300, 50],
        slideTransitionSpeed: 1,
        slideTransitionTimingFunction: 'linear',
        usingPreact: false
    },
    buttons: {
        backgroundColor: "#000",
        iconColor: "rgba(255, 255, 255, 0.8)",
    },
    caption: {
        captionColor: "#fff",
        captionFontFamily: "Roboto, sans-serif",
        captionFontWeight: "300",
        captionTextTransform: "uppercase",
    }
};
export default function SimGalleryLightBox(props) {

    const { photos = [] } = props

    if (photos.length == 0) {
        return (
            <img
                src='https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png'
                alt='Rèm Vương Hồng'
            />
        )
    } else {

        return (
            <div className="gallery_wrapper">
                <SRLWrapper options={options} >
                    <Gallery photos={photos} />
                </SRLWrapper>
            </div>

        )
    }
}
