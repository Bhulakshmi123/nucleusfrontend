import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UpdateSidebar from '../../components/UpdateSidebar';

class SubSidebar extends Component{
    render(){

        console.log({'ss': this.props});

        return (
            <div className="sub-sidebar">
                    
                    <div className="sub-sidebar-el">
                        <div>
                            <Link to={`/home/manpower/operator`}>Back to Manpower List</Link>
                        </div>
                        <p className="sidebar-title">Manpower</p>
                        <h2 className="sidebar-person-name">Rizwan Khan</h2>
                        <p className="person-contact">7001629244</p>
                        <div className="person-status">
                            <span>Available</span>
                        </div>
                    </div>

                    <div className="financial-status">
                        <div>
                            <p>Salary (INR per Month)<br /><strong>15,000</strong></p>
                        </div>
                        <div>
                            <p>Salary (INR per Month)<br /><strong>15,000</strong></p>
                        </div>
                    </div>

                    <div className="sub-sidebar-menu">
                        <ul>
                            <li>
                                <NavLink to={`${this.props.match.url}/equipment`} >Equipment</NavLink>
                            </li>
                            <li>
                                <NavLink to={`${this.props.match.url}/projects`}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={`${this.props.match.url}/supplierProfile`}>Supplier Profile</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
        );
    }
}

export default UpdateSidebar(SubSidebar);