import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import TabHeader from '../../components/TabHeader';
import SearchInput from '../../components/Inputs/SearchInput';

import './style.css';
import LeadType from './LeadType';


class Business extends Component{
    render(){

        console.log(this.props);

        return (
            <div>
                <div className="container">
                    <TabHeader headerTitle={`Business`} />

                    <div className="row align-items-center" style={{'padding':'20px 0'}}>
                        <div className="col-sm-auto">
                            <nav className="tab-link">
                                <NavLink to={`/home/business/newLead`}>New</NavLink>
                                <NavLink to={`/home/business/activeLead`}>Active</NavLink>
                            </nav>
                        </div>
                        <div className="col">
                            <SearchInput />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                            <Route path={`${this.props.match.url}/:lead`} component={LeadType} />
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Business;