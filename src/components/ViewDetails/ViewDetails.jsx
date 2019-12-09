import React, { Component } from 'react'
import { getLeadInformation } from '../../views/Business/actions';
import SideArticle from '../../components/SideArticle/SideArticle';
class ViewDetails extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        localStorage.setItem('SidebarMinized', true);
        this.state = { "token": token, leadInformation: [] }
    }
    componentDidMount() {
        this.getLeadInformation();
    }
    getLeadInformation = async () => {
        let url = window.location.href.split('/');
        let response = await getLeadInformation(url[url.length - 1], this.state.token);
        if (response) {
            localStorage.setItem('urlInfo', JSON.stringify(response.data));
            this.setState({ "leadInformation": response.data })
            // console.log('LeadInformation',response.data)
        }
    }
    render() {
        return (
            <React.Fragment>
                <SideArticle leadinfo={this.state.leadInformation}></SideArticle>
                {/* <SideArticle leadinfo={JSON.parse(localStorage.getItem('urlInfo'))}></SideArticle> */}
            </React.Fragment>
        )
    }
}
export default ViewDetails
