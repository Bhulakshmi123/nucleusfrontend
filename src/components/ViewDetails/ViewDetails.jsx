import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sidebarViewAction } from '../../redux/actions';
import { getLeadInformation } from '../../views/Business/actions';
import { DefaultCard } from '../DefaultCard/DefaultCard';
import SideArticle from '../../components/SideArticle/SideArticle';
class ViewDetails extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            token: token,
            leadInformation: [],
            isApiCallSuccessful: false
        }
    }

    componentDidMount () {
        this.getLeadInformation();
        this.props.sidebarViewAction(true);
    }

    getLeadInformation = async () => {
        let browserUrl = window.location.href.split('/'),
            joinedUrlPayload = browserUrl[browserUrl.length - 1] + '/' + browserUrl[browserUrl.length - 2],
            response = await getLeadInformation(joinedUrlPayload, this.state.token);
        // console.log('getLeadInformation', joinedUrlPayload);
        // console.log('getLeadInformation', response);
        if (response) {
            this.setState({
                leadInformation: response.data,
                isApiCallSuccessful: true
            })
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className={this.props.sidebarView ? "mainContent mainContentMini d-flex" : "mainContent"}>
                    {
                        this.state.isApiCallSuccessful === true ?
                            <SideArticle
                                leadinfo={this.state.leadInformation}
                                getLeadInformation={this.getLeadInformation.bind(this)}>
                            </SideArticle>
                            :
                            <DefaultCard md={4} className={'mt-25'}>
                                <i className="fas fa-cog font-size-50 rotateCog mb-2"></i>
                                <div>Fetching Projects Information ...</div>
                            </DefaultCard>
                    }
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
