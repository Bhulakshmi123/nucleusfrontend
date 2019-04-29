import React from 'react';
import '../../assets/css/Widgets.css';
import plusIcon from '../../assets/icons/circle-plus.svg';


const AddButton = (props) => {
    return (
        <button className="add-new-btn" type="button" data-toggle="modal" data-target={props.modalId}>
            <img src={plusIcon} alt=""/>
            <span>Add New</span>
        </button>
    );
}

export default AddButton;