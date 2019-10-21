import React from 'react';
import Button from '../CustomButton/CustomButton'
import './Modal.css';
const modal = (props) => {
    return (
        <div className="modal-wrapper" style={{ transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)', opacity: props.show ? '1' : '0', display:props.show ? 'block':'none', minWidth: props.minWidth, minHeight:props.minHeight}}>
            <div className="modal-header">
                <span className="modalName">Add Project</span>
                <span className="modalClose" onClick={props.close}><i className="fas fa-times-circle"></i></span>
            </div>
            <div className="modal-body">
                <div>
                    {props.children}
                </div>
            </div>
            <div className="modal-footer">
                <Button bsStyle="primary" fill pullRight ><i className="fas fa-plus-circle nbSpan"></i>Add Project</Button>
            </div>
        </div>
    )
}

export default modal;