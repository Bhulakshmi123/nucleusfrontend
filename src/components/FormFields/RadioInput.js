import React from 'react';
const RadioInput = props => {
    return (
        <span>
            <input name={props.name} value="Single Shift" id="shift1" className="with-gap pe_shift" type="radio"></input><label>{props.label}</label>
        </span>
    )
}
export default RadioInput;