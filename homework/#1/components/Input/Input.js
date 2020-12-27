import React from 'react';

function isInvalid({valid, touched, shouldValidate}) {
    return !valid && shouldValidate && touched
}

const Input = props => {
    const inputType = props.type || 'text'
    const htmlFor = `${inputType}-${Math.random()}`
    return (
        <div className={isInvalid(props) ? `${props.cssClass} invalid` : `${props.cssClass}` }>
            <label>{props.label}</label>
            <input type={inputType} id={htmlFor} value={props.value} onChange={props.onChange} className={isInvalid(props) ? "invalid-input" : null}/>
            {
                isInvalid(props) ? <span>{props.errorMessage || "Введите верное значение"}</span> : null
            }
        </div>
    );
}

export default Input;
