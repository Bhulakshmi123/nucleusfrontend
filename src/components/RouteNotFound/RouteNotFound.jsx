import React from 'react';
import Error404 from '../../assets/img/Error404.png'
const RouteNotFound = () => {
    return (
        <React.Fragment>
            <img className="ErrorStyles" src={Error404} alt="Error 404 Not Found"></img>
        </React.Fragment>
    )
}
export default RouteNotFound;
