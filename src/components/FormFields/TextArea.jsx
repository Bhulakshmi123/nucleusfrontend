import React from 'react';
const TextArea = props => {
    return(
        <span>
            <label>{props.label}</label>
            <textarea type="text" className="form-control" name={props.name} id="paymentterms" placeholder={props.placeholder} rows="5"></textarea>
        </span>
    );
}
export default TextArea;