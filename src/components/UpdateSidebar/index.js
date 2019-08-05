import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const UpdateSidebar = (SubSidebar) => {

    

    class FullSidebar extends Component{
        
        render() {
            console.log({'updateSidebar': this.props})
            return (
                <div className="sidebar">
                    <ul>
                        <li>
                            <NavLink to="/home/business">
                                <img src={require('../../assets/icons/money-bag.svg')} alt=""/>
                                {/* <span>Business</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/projects">
                                <img src={require('../../assets/icons/money-bag-1.svg')} alt=""/>
                                {/* <span>Projects</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/rmp-users">
                                <img src={require('../../assets/icons/money-bag-1.svg')} alt=""/>
                                {/* <span>RMP Users</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/suppliers">
                                <img src={require('../../assets/icons/money-bag.svg')} alt=""/>
                                {/* <span>Suppliers</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/contractors">
                                <img src={require('../../assets/icons/money-bag.svg')} alt=""/>
                                {/* <span>Contractors</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/equipment">
                                <img src={require('../../assets/icons/money-bag.svg')} alt=""/>
                                {/* <span>Equipment</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/manpower">
                                <img src={require('../../assets/icons/money-bag-1.svg')} alt=""/>
                                {/* <span>Manpower</span> */}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/home/subscriptions">
                                <img src={require('../../assets/icons/money-bag.svg')} alt=""/>
                                {/* <span>Subscriptions</span> */}
                            </NavLink>
                        </li>
                    </ul>
                
                {/* Subsidebar */}
                <SubSidebar {...this.props} />
                {/* Subsidebar */}

            </div>
            );
        }
    }
    
    return FullSidebar;
}

export default UpdateSidebar;