import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Header';
import SubSidebar from './SubSidebar';
import Equipment from './SubSidebarTabs/Equipment';
import Projects from './SubSidebarTabs/Projects';
import SupplierProfile from './SubSidebarTabs/SupplierProfile';

class SupplierDetails extends Component{

    componentDidMount() {
        document.body.classList.add('details-page');
    }
    
    componentWillUnmount() {
        document.body.classList.remove('details-page');
    }

    render() {

        console.log({'sd': this.props})

        return (
            <div>
                <Header/>
                <SubSidebar {...this.props} />

                <div className='inner-page'>
                    <div className='container-fluid'>
                        <Route path={`${this.props.match.url}/equipment`} component={Equipment} />
                        <Route path={`${this.props.match.url}/projects`} component={Projects} />
                        <Route path={`${this.props.match.url}/supplierProfile`} component={SupplierProfile} />
                    </div>
                </div>

            </div>
        );
    }
}

export default SupplierDetails;