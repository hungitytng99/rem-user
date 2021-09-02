import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImagesPath } from 'constants/ImagesPath';
import Image from 'next/image'

//https://www.npmjs.com/package/react-multi-carousel

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 7,
        slidesToSlide: 1 // chuyển n item mỗi lần.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // 
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 1 // 
    }
};
export default function SmallBanner(props) {

    return (
        <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            // customTransition="all .5"
            transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
        // itemClass="carousel-item-padding-40-px"
        >
            <div className="thin_branner_img">
                <Image src={ImagesPath.BRAND_IMG2} alt="giang minh viet banner" />
            </div>
            <div className="thin_branner_img">
                <Image src={ImagesPath.BRAND_IMG3} alt="giang minh viet banner" />
            </div>
            <div className="thin_branner_img">
                <Image src={ImagesPath.BRAND_IMG4} alt="giang minh viet banner" />
            </div>
            <div className="thin_branner_img">
                <Image src={ImagesPath.BRAND_IMG5} alt="giang minh viet banner" />
            </div>
            <div className="thin_branner_img">
                <Image src={ImagesPath.BRAND_IMG6} alt="giang minh viet banner" />
            </div>
            <div className="thin_branner_img">
                <Image src={ImagesPath.BRAND_IMG7} alt="giang minh viet banner" />
            </div>
            <div className="thin_branner_img">
                <Image src={ImagesPath.BRAND_IMG9} alt="giang minh viet banner" />
            </div>
        </Carousel>
    )
}
