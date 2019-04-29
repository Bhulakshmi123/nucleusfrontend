import React,  { Component } from 'react';
import { Link } from 'react-router-dom';

class LeadType extends Component{
    
    state = {
        'newLead' : [
            { id: 1, companyName: 'Shapoorji Paloonji Pvt. Ltd', location: 'Kolkata, West Bengal' },
            { id: 2, companyName: 'Shapoorji Paloonji Pvt. Ltd', location: 'Kolkata, West Bengal' },
        ],
        'activeLead' : [
            { id: 3, companyName: 'Rizwan Khan Pvt. Ltd', location: 'Kolkata, West Bengal' },
            { id: 4, companyName: 'Shapoorji Paloonji Pvt. Ltd', location: 'Kolkata, West Bengal' },
        ]
    }
    
    render(){

        const leads = this.state[this.props.match.params.lead];

        const leadList = leads.map((lead) => (
            <Link key={lead.id}>
                <div className="card my-card">
                    <div className="row">
                        <div className="col-sm-3">
                            <h5>{ lead.companyName }</h5>
                        </div>
                    </div>
                </div>
            </Link>
        ))

        return (
            <div>{leadList}</div>
        );
    }
}

export default LeadType;