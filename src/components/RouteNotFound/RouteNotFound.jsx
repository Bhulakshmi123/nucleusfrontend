import React from 'react';
import Error404 from '../../assets/img/Error404.png'
const RouteNotFound = () => {
    return (
        <React.Fragment>
            <img className="vh-50 vw-50 d-block m-auto" src={Error404} alt="Error 404 Not Found"></img>
        </React.Fragment>
    )
}
export default RouteNotFound;
