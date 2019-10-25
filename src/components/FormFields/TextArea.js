import React from 'react';
const TextArea = props => {
    return(
        <span>
            <label>{props.name}</label>
            <textarea type="text" class="form-control" name="add_equipment_payment_terms" id="paymentterms" placeholder={props.placeholder} rows="5"></textarea>
        </span>
    );
}
export default TextArea;