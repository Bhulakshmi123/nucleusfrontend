import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Business from '../Business';
import Manpower from '../Manpower';
import Projects from '../Projects';
import Suppliers from '../Suppliers';

class MainContent extends Component{
    
    render(){
        return (
            <div className="route-content">
                <Route exact path='/home' component={Business} />
                <Route path={`/home/business`} component={Business} />
                <Route path={`/home/projects`} component={Projects} />
                <Route path={`/home/manpower`} component={Manpower} />
                <Route path={`/home/suppliers`} component={Suppliers} />
                <Route path={`/home/contractors`} component={Manpower} />
                <Route path={`/home/rmpUsers`} component={Manpower} />
            </div>
        );
    }
}

export default MainContent;