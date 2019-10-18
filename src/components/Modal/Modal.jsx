import React from 'react';
import Button from '../CustomButton/CustomButton'
import './Modal.css';
const modal = (props) => {
    return (
        <div>
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <span class="modalName">Add Project</span>
                    {/* <span className="close-modal-btn" onClick={props.close}>×</span> */}
                    <span className="modalClose" onClick={props.close}><i class="fas fa-times-circle"></i></span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <Button bsStyle="danger" fill pullLeft onClick={props.close}>Close</Button>
                    <Button bsStyle="primary" fill pullRight>Submit</Button>
                    {/* <button className="btn-cancel" onClick={props.close}>CLOSE</button> */}
                    {/* <button className="btn-continue">CONTINUE</button> */}
                </div>
            </div>
        </div>
    )
}

export default modal;