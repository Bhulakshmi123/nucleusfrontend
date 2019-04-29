import React from 'react';
import AddButton from './Buttons/AddButton';

const TabHeader = (props) => {
    
    return (
        <div className="row justify-content-between align-items-center">
            <div className="col-sm-3">
                <h1 className="tab-heading">{props.headerTitle}</h1>
            </div>
            
            <div className="col-auto">
                <AddButton modalId={props.modalId} />
            </div>
        </div>
    );
}

export default TabHeader;