import React, { Component } from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import MainContent from './MainContent';


class DefaultLayout extends Component{
    
    render() {
        return (
            <div className="container-fluid" style={{ 'padding':'0' }}>
                <Header />
                <Sidebar />

                <MainContent />

            </div>  
        );
    }
}

export default DefaultLayout;