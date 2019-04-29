import React, { Component } from 'react';
import Header from '../../components/Header';

import '../../assets/css/common.css';


import './style.css';
import SubSidebar from '../../components/SubSidebar';


class ManpowerProfile extends Component{

    componentDidMount() {
        document.body.classList.add('details-page');
    }
    
    componentWillUnmount() {
        document.body.classList.remove('details-page');
    }

    render() {

        return (
            <div>
                <Header />
                <SubSidebar {...this.props} />


                <div className="inner-page">
                    <div className="container-fluid">
                        
                        <div className="row no-gutters">
                            <div className="col-sm-4">
                                <h2 className="inner-page-title">Profile</h2>
                            </div>
                        </div>
                        
                        <div className="row no-gutters manpower-profile-card">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <h4 style={{ 'margin': '10px 20px' }}>Document</h4>
                                    </div>
                                </div>
                                <div className="row no-gutters" style={{ 
                                    'padding': '20px',
                                    'border-bottom': '1px solid #eee' }}>
                                    <div className="col-sm-3">
                                        <span>Driving License</span>
                                    </div>
                                    <div className="col-sm-3">
                                        <span>Heavy License</span>
                                    </div>
                                    <div className="col-sm-3">
                                        <span>Aadhar Card</span>
                                    </div>
                                </div>
                                
                                <div className="row no-gutters" style={{ 'padding': '20px' }}>
                                    <div className="col">
                                        <h5>Work History</h5>
                                    </div>
                                </div>

                                <div className="row no-gutters card-header-titles" style={{ 'padding': '0 20px' }}>
                                    <div className="col-sm-3 element">
                                        <span>Company</span>
                                    </div>
                                    <div className="col-sm-2 element">
                                        <span>Duration</span>
                                    </div>
                                    <div className="col-sm-2 element">
                                        <span>Start Date</span>
                                    </div>
                                    <div className="col-sm-2 element">
                                        <span>Salary</span>
                                    </div>
                                    <div className="col-sm-2 element">
                                        <span>Equipment</span>
                                    </div>
                                </div>

                                <div className="company-card">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-sm-3 element">
                                            <span>Shapoorji Pallonji</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>10 months</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>03 Feb 2019</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>Rs. 11,00,000</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>Self Loading Concrete Mixer</span>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="company-card">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-sm-3 element">
                                            <span>Shapoorji Pallonji</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>10 months</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>03 Feb 2019</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>Rs. 11,00,000</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>Self Loading Concrete Mixer</span>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div className="company-card">
                                    <div className="row no-gutters align-items-center">
                                        <div className="col-sm-3 element">
                                            <span>Shapoorji Pallonji</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>10 months</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>03 Feb 2019</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>Rs. 11,00,000</span>
                                        </div>
                                        <div className="col-sm-2 element">
                                            <span>Self Loading Concrete Mixer</span>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        );
    }
}

export default ManpowerProfile;