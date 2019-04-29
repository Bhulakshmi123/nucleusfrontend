import React from 'react';

import '../../../assets/css/common.css';

const ModalHeader = (props) => {
    return (
        <div class="modal-header my-modal-header">
            <h5 class="modal-title my-modal-title">{props.modalTitle}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );
}

export default ModalHeader;