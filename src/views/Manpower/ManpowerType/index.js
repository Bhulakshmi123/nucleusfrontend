import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

class ManpowerType extends Component{

    state = {
        'operator' : [
            {id: 1, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 2, name: 'Govardhan Kohli', contact: '7001629244', 'state': 'West bengal'},
            {id: 3, name: 'Bhulakshmi', contact: '7001629244', 'state': 'West bengal'},
            {id: 4, name: 'Bhavani', contact: '7001629244', 'state': 'West bengal'},
            {id: 5, name: 'Mai hu na', contact: '7001629244', 'state': 'West bengal'},
        ],
        'helper' : [
            {id: 6, name: 'Khan Abc', contact: '7001629244', 'state': 'West bengal'},
            {id: 7, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 8, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 9, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 10, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
        ],
        'service' : [
            {id: 11, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 12, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 13, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 14, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 15, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
        ],
        'others' : [
            {id: 16, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 17, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 18, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 19, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
            {id: 20, name: 'Rizwan Khan', contact: '7001629244', 'state': 'West bengal'},
        ]
    }

    render(){

        console.log(this.props.searchKeyword);

        const manpowerList = this.state[this.props.match.params.manpowerType];
        


        let searchQuery = this.props.searchKeyword;

        const result = manpowerList.map((manpower, index) => { 
            if(manpower.name.indexOf(searchQuery) !== -1){
                return (
                    <Link className={`manpower-link`} to={`${this.props.match.url}/${manpower.id}`} key={manpower.id}>
                        <div className="card my-card" style={{'width':'100%'}}>
                            <div className="row no-gutters align-items-center">
                                <div className="col-sm-3 person-name">
                                    <span> {manpower.name} </span>
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
                )
            }
        });


        return (
            <div>
                {result}
            </div>
        );
    }
}

export default ManpowerType;