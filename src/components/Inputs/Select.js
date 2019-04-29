import React from 'react';
import '../../assets/css/common.css';

const Select = (props) => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <select required={props.required} name={props.name} className={`form-control my-form-control ${props.className}`}>
                <option>Select Manpower Type</option>
                <option>Manpower 1</option>
                <option>Manpower 1</option>
                <option>Manpower 1</option>
            </select>
        </div>
    );
}

export default Select;