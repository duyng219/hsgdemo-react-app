import React, { useState } from 'react'

import './formInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)
    const {label,errorMessage, onChange, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true)
    }
    return (
            <div className='form__input'>
                <label>{label}</label>
                <input 
                    {...inputProps}
                    onChange={onChange} 
                    onBlur={handleFocus} 
                    onFocus={() => 
                        inputProps.name === "confirmPassword" && setFocused(true)}
                    focused={focused.toString()}
                />
                <span className='span__message'>{errorMessage}</span>
            </div>
    )
}

export default FormInput