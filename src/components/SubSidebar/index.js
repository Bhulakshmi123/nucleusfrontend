import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './style.css';


const SubSidebar = (props) => {
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
                            <img src={require('../../assets/icons/money-bag.svg')} alt=""/>
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
                                <NavLink to={`${props.match.url}/profile`}>Profile</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Subsidebar */}

            </div>
        );
    
}

export default SubSidebar;