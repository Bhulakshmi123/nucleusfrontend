import React from 'react';
import Error404 from '../../assets/img/Error404.png'
import './RouteNotFound.css';
const RouteNotFound = () => {
    return (
        <React.Fragment>
            <img className="ErrorStyles" src={Error404}></img>
        </React.Fragment>
    )
}
export default RouteNotFound;
