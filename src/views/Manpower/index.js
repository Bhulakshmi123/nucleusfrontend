import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import TabHeader from '../../components/TabHeader';
import SearchInput from '../../components/Inputs/SearchInput';
import ManpowerType from './ManpowerType';
import AddManpower from './AddManpower';


class Manpower extends Component{

    state = {
        searchKeyword: '',
    }
    
    handleChange = (e) => {
        this.setState({
            searchKeyword : e.target.value
        })
    }
    
    render(){
    
        return (
            <div>
                <div className="container">
                    <TabHeader headerTitle={`Manpower`} modalId={`#add_manpower_modal`} />                    

                    <div className="row align-items-center" style={{'padding':'20px 0'}}>
                        <div className="col-sm-auto">
                            <nav className="tab-link">
                                <NavLink to={`/home/manpower/operator`}>Operator</NavLink>
                                <NavLink to={`/home/manpower/helper`}>Helper</NavLink>
                                <NavLink to={`/home/manpower/service`}>Service</NavLink>
                                <NavLink to={`/home/manpower/others`}>Others</NavLink>
                            </nav>
                        </div>
                        <div className="col">
                            <SearchInput value={this.state.searchKeyword} handleChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                           <Route path={`${this.props.match.url}/:manpowerType`} render={(props) => <ManpowerType {...props} searchKeyword={this.state.searchKeyword} />}  />
                        </div>
                    </div>



                </div>

             
                <AddManpower />

            </div>
        );
    }
}

export default Manpower;