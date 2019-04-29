import React from 'react';
import '../../assets/css/common.css';

const AuthInput = (props) => {
    return (
        <div className="auth-input-group">
            <label>{props.label}</label>
            <input type={props.type} name={props.name} class="form-control auth-input" placeholder={props.placeholder}/>
        </div>
    );   
}

export default AuthInput;