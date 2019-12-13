import React, { Component } from 'react'
import { getLeadInformation } from '../../views/Business/actions';
import SideArticle from '../../components/SideArticle/SideArticle';
class ViewDetails extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            "token": token,
            "leadInformation": [],
            "isApiCallSuccessfull": false,
        }
    }
    componentDidMount() {
        this.getLeadInformation();
    }
    getLeadInformation = async () => {
        let url = window.location.href.split('/');
        let response = await getLeadInformation(url[url.length - 1], this.state.token);
        if (response) {
            this.setState({ "leadInformation": response.data })
            this.setState({ "isApiCallSuccessfull": true })
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.state.isApiCallSuccessfull === true ? <SideArticle leadinfo={this.state.leadInformation}></SideArticle> : null}
            </React.Fragment>
        )
    }
}
export default ViewDetails;
