import React from 'react';
const FileInput = props => {


    return(
        <div className="form-modal">
            <label>{props.name}</label>
            <input name="name" type="text" class="form-control" value={props.value} />
        </div>
    );

}
export default FileInput;