import React from 'react';

const SingleFileUpload = (props) => {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <div className="upload-group">
                <label>
                    <input type="text" className={`form-control my-form-control ${props.className}`} placeholder={props.placeholder} />
                    <input type="file" name={props.name} className={`file-upload-input`} />
                    <img className="upload-btn-icon" src={require('../../assets/icons/grey-600.svg')} alt="" />
                </label>
            </div>
        </div>
    );
}

export default SingleFileUpload;