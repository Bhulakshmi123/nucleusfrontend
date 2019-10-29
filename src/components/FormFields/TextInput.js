import React from 'react';

const TextInput = props => {
    return(
        <div className="form-modal">
            <label>{props.label}</label>
            <input name={props.name} type="text" className="form-control" value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
        </div>
    );

}
export default TextInput;