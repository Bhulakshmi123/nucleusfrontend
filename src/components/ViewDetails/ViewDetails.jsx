import React, { Component } from 'react';
import SideArticle from '../../components/SideArticle/SideArticle';
class ViewDetails extends Component {
    constructor(props) {
        super(props)
        let url = window.location.href.split('/')
        this.state = {
            unqId: url[url.length - 1]
        };
    }
    render() {
        // console.log('Help',this.props);
        // const {match:{params}, }=this.props;
        // console.log('Help2',params);
        return (
            <div>
                <SideArticle id={this.state.unqId}></SideArticle>
            </div>
        )
    }
}

export default ViewDetails
