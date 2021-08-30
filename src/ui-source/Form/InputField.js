import React from 'react';
import { NextPage } from "next";
import * as Yup from 'yup';
import { ErrorMessage, Field } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'



const InputField = (props) => {
    const { disabled, rows, type = "input", errors, label, name, touched, placeholder, isRequired, value } = props;
    const hasError = errors[name] && touched[name];

    return (
        <>
            <div className="input-field">
                <div className="input-field__box">
                    <div className="input-field__label">
                        {label}
                        {isRequired ? <span className="input-field__required">*</span> : ''}
                    </div>
                    <Field
                        className={`input-field__input text_over_flow_1 ${hasError && "error"} ${disabled && "disabled"}`}
                        placeholder={placeholder}
                        name={name}
                        autoComplete="off"
                        as={type}
                        value={value}
                        rows={rows}
                        disabled={disabled}
                    />
                </div>
                {
                    errors[name] && touched[name] &&
                    <div className="input-field__error">
                        <FontAwesomeIcon className="input-field__error-icon" icon={faInfoCircle} />
                        <span>{errors[name]}</span>
                    </div>
                }
            </div>
        </>

    );
}

export default InputField;