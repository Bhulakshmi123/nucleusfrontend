import React from 'react';
const Checkbox = props => {
    return(
        <span>
            <label className="check"><input type="checkbox"></input><span className="checkmark"></span></label><label>{props.label}</label>
        </span>
    )
}
export default Checkbox;