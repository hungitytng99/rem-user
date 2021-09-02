import React from 'react'
import { SRLWrapper } from "simple-react-lightbox";
import Gallery from "react-photo-gallery";

const options = {
    settings: {
        overlayColor: "rgb(0, 0, 0, 0.75)",
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

    return (
        <div className="gallery_wrapper">
            <SRLWrapper options={options} >
                <Gallery photos={photos} />
            </SRLWrapper>
        </div>

    )
}
