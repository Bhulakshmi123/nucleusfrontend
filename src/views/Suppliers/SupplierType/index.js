import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import './style.css';

class SupplierType extends Component{

    state = {
        'workedWithUs' : [
            {id: 1, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 2, name: 'Govardhan Kohli', contact: '7001629244', 'state': 'West bengal'},
            {id: 3, name: 'Bhulakshmi', contact: '7001629244', 'state': 'West bengal'},
            {id: 4, name: 'Bhavani', contact: '7001629244', 'state': 'West bengal'},
            {id: 5, name: 'Mai hu na', contact: '7001629244', 'state': 'West bengal'},
        ],
        'neverWorkedWithUs' : [
            {id: 6, name: 'Khan Abc', contact: '7001629244', 'state': 'West bengal'},
            {id: 7, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 8, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 9, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 10, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
        ],
    }

    render(){

        console.log({'supplierType': this.props});

        return (
            <div>
                <Link className={`manpower-link`} to={`${this.props.match.url}/124`}>
                        <div className="card my-card" style={{'width':'100%'}}>
                            <div className="row no-gutters align-items-center">
                                <div className="col-sm-3 person-name">
                                    <span> df </span>
                                </div>
                                <div className="col-sm-3 text-style">
                                    <span>VIP Road, Kolkata</span>
                                </div>
                                <div className="col-sm-3 text-style">
                                    <span>7001629244</span>
                                </div>
                                <div className="col-sm-3 text-style">
                                    <span>Engaged</span>
                                </div>
                            </div>
                            
                        </div>
                    </Link>
            </div>
        );
    }
}

export default SupplierType;