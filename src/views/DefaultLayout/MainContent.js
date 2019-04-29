import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Business from '../Business';
import Manpower from '../Manpower';
import Projects from '../Projects';

class MainContent extends Component{
    
    render(){
        return (
            <div className="route-content">
                <Route exact path='/home' component={Business} />
                <Route path={`/home/business`} component={Business} />
                <Route path={`/home/projects`} component={Projects} />
                <Route path={`/home/manpower`} component={Manpower} />
            </div>
        );
    }
}

export default MainContent;