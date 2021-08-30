import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
// [{ src: ImagesPath.PRODUCT.src, alt: "" }, { src: ImagesPath.PRODUCT_2.src, alt: "" }, { src: ImagesPath.SP.src, alt: "" }]
const ImagesThumb = ({ listImages = [] }) => {
    const [currentImageSelected, setCurrentImageSelected] = useState(listImages[0]);
    const selectImage = (e) => {
        let indexImgSelected = Number(e.target.dataset.imgid);
        listImages = listImages.map((img, index) => {
            img.isSelected = index == indexImgSelected
            return img;
        });
        setCurrentImageSelected(listImages[indexImgSelected]);
        // setCurrentImageSelected(newListImage[indexImgSelected]);
    }

    useEffect(() => {
        setCurrentImageSelected(listImages[0]);
    },[listImages])

    return (
        <div className="images-thumb">
            <Row className="images-thumb__row">
                <Col >
                    <div className="img-box">
                        <div className="img">
                            <Zoom>
                                <img
                                    alt={currentImageSelected?.alt}
                                    src={currentImageSelected?.src}
                                    width="100%"
                                />
                            </Zoom>
                        </div>

                    </div>
                </Col>
            </Row>
            <Row className="images-thumb__center">
                <div className="images-thumb__list">
                    {listImages.map((image) => {
                        return (
                            <div key={image.id} className={`images-thumb__item ${image.isSelected && 'selected'}`}>
                                <img onClick={selectImage} data-imgid={image.id} className="images-thumb__item-img" src={image.src} alt={image.alt} />
                            </div>
                        )
                    })}
                </div>
            </Row>
        </div >
    );
}

export default ImagesThumb;