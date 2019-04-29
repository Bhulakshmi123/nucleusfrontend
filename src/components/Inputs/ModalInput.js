import React from 'react';
import '../../assets/css/common.css';

const ModalInput = (props) => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input 
                type={props.type} 
                name={props.name} 
                className={`form-control my-form-control ${props.className}`}
                value={props.value}
                required={props.required}
                placeholder={props.placeholder}
            />
        </div>
    );
}

export default ModalInput;