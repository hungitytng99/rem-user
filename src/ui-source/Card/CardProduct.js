import { ImagesPath } from 'constants/ImagesPath';
import React, { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTimes } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import ContactForm from 'components/ContactForm';


Modal.setAppElement('#__next');
const defaultProduct = {
    id: 0,
    name: "",
    description: "",
    image: [""],
    price: 0,
    new_price: 0,
    discount: 0,
    material: "",
    category_id: 0,
    slug: "/"
}
function CardProduct(props) {
    const { product = defaultProduct,
        contactText = "Liên hệ" } = props;
    const [contactModal, setContactModal] = useState(false);
    const [productName, setProductName] = useState("");
    const showContactModal = (e) => {
        e.stopPropagation();
        setContactModal(true);
    }

    const hideContactModal = () => {
        setContactModal(false);
    }

    const closeContactForm = (e) => {
        setContactModal(false);
    }

    return (
        <div className="card-product">
            <div className="card-product__item-order ">
                <div className="card-product__item-order-product ">
                    <Link href={product.slug} passHref>
                        <a className="card-product__img">
                            {product.image[0] && <Image src={product.image[0]} layout="fill" objectFit="cover" alt="product" />}
                        </a>
                    </Link>
                    <button onClick={showContactModal} className="card-product__item-order-btn">
                        {contactText}
                    </button>
                    {
                        product.discount > 0 &&
                        <div className="card-product__item-discount">
                            GIẢM {product.discount}%
                        </div>
                    }

                </div>

            </div>
            <div className="card-product__item-price ">
                <Link href={product.slug} passHref>
                    <a className="card-product__item-price-title text_over_flow_1 ">{product.name}</a>
                </Link>
                <div className="card-product__item-price-favor">
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                    <FontAwesomeIcon className="card-product__item-price-favor -item --active" icon={faStar} />
                </div>
                <div className="card-product__item-price-wrap ">
                    {product.discount > 0 && <div className="card-product__item-price-old ">{product.price}<span>đ</span></div>}
                    <div className="card-product__item-price-new ">{product.new_price}<span>đ</span></div>
                </div>

            </div>
            <Modal
                isOpen={contactModal}
                onRequestClose={hideContactModal}
                className="Modal"
                overlayClassName="Overlay"
            >
                <div className="contact-form__header">
                    <div className="contact-form__header-text">
                        Để lại thông tin của bạn
                        <span>Chúng tôi sẽ liên hệ với bạn sớm nhất có thể</span>
                    </div>
                    <div onClick={hideContactModal} className="contact-form__header-close">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                </div>
                <div className="contact-form__form">
                    <ContactForm closeContact={closeContactForm} productName={product.name}
                        productId={product.id} productSlug={product.slug} />
                </div>
            </Modal>
        </div>
    );
}

export default CardProduct;