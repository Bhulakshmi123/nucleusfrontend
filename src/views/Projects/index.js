import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import TabHeader from '../../components/TabHeader';
import SearchInput from '../../components/Inputs/SearchInput';
import ProjectType from './ProjectType';

class Projects extends Component{

    state = {
        searchKeyword: '',
    }
    
    handleChange = (e) => {
        this.setState({
            searchKeyword : e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <TabHeader headerTitle="Projects" modalId={`#add_project_modal`} />
                </div>

                <div className="row align-items-center" style={{'padding':'20px 0'}}>
                    <div className="col-sm-auto">
                        <nav className="tab-link">
                            <NavLink to={`/home/projects/ongoing`}>Ongoing</NavLink>
                            <NavLink to={`/home/projects/completed`}>Completed</NavLink>
                        </nav>
                    </div>
                    <div className="col">
                        <SearchInput value={this.state.searchKeyword} handleChange={this.handleChange} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <Route path={`${this.props.match.url}/:projectType`} render={(props) => <ProjectType {...props} searchKeyword={this.state.searchKeyword} />}  />
                    </div>
                </div>


            </div>
        );
    }
}

export default Projects;