import React from 'react';

const AuthButton = (props) => {
    return(
        <div class="buttonbox">
            <button class="btn btn-primary btn-block sign-btn">{props.label}</button>
        </div>
    );
}

export default AuthButton;