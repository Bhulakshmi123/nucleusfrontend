import React from 'react';

const TextInput = props => {
    return(
        <div className="form-modal">
            <label>{props.name}</label>
            <input name="name" type="text" className="form-control" value={props.value} />
        </div>
    );

}
export default TextInput;