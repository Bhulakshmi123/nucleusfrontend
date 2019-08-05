import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectType extends Component{

    state = {
        'ongoing' : [
            {id: 1, projectName: 'Rizwan Khan Project', projectLocation: 'West Bengal, Kolkata'},
            {id: 2, projectName: 'Rizwan Khan Project', projectLocation: 'West Bengal, Kolkata'},
            {id: 3, projectName: 'Rizwan Khan Project', projectLocation: 'West Bengal, Kolkata'},
        ],
        'completed' : [
            {id: 4, projectName: 'Govardhan Project', projectLocation: 'Telangana, Hyderabad'},
            {id: 5, projectName: 'Govardhan Project', projectLocation: 'Telangana, Hyderabad'},
            {id: 6, projectName: 'Govardhan Project', projectLocation: 'Telangana, Hyderabad'},
        ]
    }

    render() {

        console.log(this.props);

        return (
            <div>
                <Link className={`project-link`}>
                    <div className="card my-card" style={{'width':'100%'}}>
                        <div className="row no-gutters align-items-center">
                            <div className="col-sm-3 person-name">
                                <span> Project Name </span>
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

export default ProjectType;