import React from 'react';
const RadioInput = props => {
    return (
        <span>
            <input name="pe_shift" value="Single Shift" id="shift1" className="with-gap" type="radio"></input><label>{props.name}</label>
        </span>
    )
}
export default RadioInput;