import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sidebarViewAction } from '../../redux/actions';
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
        this.props.sidebarViewAction(true);
    }
    getLeadInformation = async () => {
        let url = window.location.href.split('/');
        let finalPayload = url[url.length - 1] + '/' + url[url.length - 2];
        console.log('finalPayload', finalPayload)
        let response = await getLeadInformation(finalPayload, this.state.token);
        if (response) {
            this.setState({ "leadInformation": response.data })
            this.setState({ "isApiCallSuccessfull": true })
            console.log('ViewDetails', response)
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className={this.props.sidebarView ? "mainContent mainContentMini d-flex" : "mainContent"}>
                    {this.state.isApiCallSuccessfull === true ? <SideArticle leadinfo={this.state.leadInformation}></SideArticle> : null}
                </div>
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        sidebarView: state.sidebarView
    }
}
const mapDispatchToProps = () => {
    return {
        sidebarViewAction
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(ViewDetails)
