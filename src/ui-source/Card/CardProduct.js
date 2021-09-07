import React, { useState } from 'react'
import Link from 'next/link'
import Modal from 'react-modal';
import ContactForm from 'components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const attr = {
    img: "",
    title: "Rem vai mot lop SV1113"
}
Modal.setAppElement('#__next');
export default function CardProduct(props) {
    const { product } = props;
    const [contactModal, setContactModal] = useState(false);
    const showContactModal = (e) => {
        e.stopPropagation();
        setContactModal(true);
    }
    const hideContactModal = () => {
        setContactModal(false);
    }
    const closeContactForm = (e) => {
        e.preventDefault();
        setContactModal(false);
    }
    return (
        <>
            <div className="card_hpd">
                <Link href={product.slug}>
                    <a>
                        <div>
                            <img src={product.image[0].src} alt="slug product" />
                        </div>
                        <p className="card_hpd-text text_over_flow_1">
                            {product.name}
                        </p>
                    </a>
                </Link>
                <div className="card_hpd-contact">
                    <p onClick={showContactModal}>Liên hệ ngay</p>
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
                        <span>Chúng tôi sẽ liên lạc với bạn sớm nhất có thể</span>
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
        </>
    )
}
