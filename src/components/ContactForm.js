import React, { useEffect, useState } from 'react';
import { NextPage } from "next";
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import InputField from 'ui-source/Form/InputField';
// import FullPageLoading from 'ui-source/Loading/FullPageLoading';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Configs } from 'app-configs';
import { inquiryService } from 'data-services/inquiry';


const phoneReg = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
const contactSchema = Yup.object().shape({
    name: Yup.string()
        .required('This field is required'),
    phone: Yup.string()
        .matches(phoneReg, "Please enter a valid phone number")
        .required('This field is required'),
    email: Yup.string().email('Please enter a valid email').required('This field is required'),
});

const ContactForm = (props) => {
    const { productSlug, productId, productName, closeContact = () => { } } =  props;
    const [isShowLoading, setIsShowLoading] = useState(false);
    const [messageAfterValidate, setMessageAfterValidate] = useState('');
    const sendContact = async (values) => {
        try {
            const inquiryBody = {
                customer_name: values.name,
                email: values.email,
                phone: values.phone,
                message: values.message,
                product_id: productId,
                product_link: Configs.DOMAIN + productSlug,
                product_name: productName
            }
            const response = await inquiryService.sendCustomerInquiry(inquiryBody);
            setMessageAfterValidate(response.message);
        } catch (error) {
            setMessageAfterValidate('An error occurs when you send your information. Please try again later!');
        }
    }

    useEffect(() => {
        return () => {
            // clean
        }
    },[])

    return (
        <div className="contact-form">
            {/* {isShowLoading && <FullPageLoading opacity={0.5} />} */}
            <Formik
                initialValues={{
                    name: '',
                    phone: '',
                    email: '',
                    // message: '',
                }}
                validationSchema={contactSchema}
                onSubmit={sendContact}
            >
                {({ errors, touched }) => (
                    <Form>
                        {
                            productName &&
                            <InputField
                                errors={errors}
                                touched={touched}
                                label="Sản phẩm"
                                name="product"
                                placeholder="Tên sản phẩm"
                                isRequired={true}
                                value={productName}
                                disabled={true}
                            />
                        }

                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Tên"
                            name="name"
                            placeholder="Tên của bạn"
                            isRequired={true}
                        />
                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Điện thoại"
                            name="phone"
                            placeholder="Số điện thoại"
                            isRequired={true}

                        />
                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Email"
                            name="email"
                            placeholder="Email"
                            isRequired={true}

                        />
                        <InputField
                            errors={errors}
                            touched={touched}
                            label="Lời nhắn"
                            name="message"
                            placeholder="Để lại lời nhắn của bạn"
                            type="textarea"
                            rows={3}
                        />
                        <div className="contact-form__btn-group">
                            <div className="contact-form__message-submit">{messageAfterValidate}</div>
                            <button className="contact-form__btn send" type="submit">Gửi đi</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default ContactForm;