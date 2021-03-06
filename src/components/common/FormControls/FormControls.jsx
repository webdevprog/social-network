import React from 'react';
import style from './formControls.scss';
import { Field } from 'redux-form';

const FormControls = ({ input, meta, ...props }) => {
    const hasError = (meta.touched && meta.error);
    return (
        <div className={style.formControl}>
            {props.children}
            {hasError &&
                <div>
                    <span>{meta.error}</span>
                </div>
            }
        </div>
    );
}

export const Textarea = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControls {...props}><textarea {...input} {...restProps} /></FormControls>
}

export const Input = (props) => {
    const { input, meta, ...restProps } = props;
    return <FormControls {...props}><input {...input} {...restProps} /></FormControls>
}

export const createField = (placeholder, name, component, validation = [], props = {}, text = "") => {
    return (
        <div>
            {text && <label htmlFor={name}>{text}</label>}
            <Field placeholder={placeholder} name={name} component={component} validate={validation} {...props} />
        </div>
    )
}