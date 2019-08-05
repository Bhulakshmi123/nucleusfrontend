import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import TabHeader from '../../components/TabHeader';
import SearchInput from '../../components/Inputs/SearchInput';
import SupplierType from './SupplierType';



class Suppliers extends Component{

    state = {
        searchKeyword: '',
    }
    
    handleChange = (e) => {
        this.setState({
            searchKeyword : e.target.value
        })
    }
    
    render(){
    
        console.log({'suppliers': this.props});

        return (
            <div>
                <div className="container">
                    <TabHeader headerTitle={`Suppliers`} modalId={`#add_manpower_modal`} />                    

                    <div className="row align-items-center" style={{'padding':'20px 0'}}>
                        <div className="col-sm-auto">
                            <nav className="tab-link">
                                <NavLink to={`${this.props.match.url}/workedWithUs`}>Worked With Us</NavLink>
                                <NavLink to={`${this.props.match.url}/neverWorkedWithUs`}>Never Worked With Us</NavLink>
                            </nav>
                        </div>
                        <div className="col">
                            <SearchInput value={this.state.searchKeyword} handleChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12">
                           <Route path={`${this.props.match.url}/:supplierType`} render={(props) => <SupplierType {...props} searchKeyword={this.state.searchKeyword} />}  />
                        </div>
                    </div>



                </div>

             

            </div>
        );
    }
}

export default Suppliers;