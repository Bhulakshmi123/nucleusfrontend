
import React, { Component } from 'react'
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { getNewLeads, getActiveLeads, getPendingLeads, getRejectedLeads, getLeads } from '../../views/Business/actions';
import { getDateFormat_4 } from '../../commonFunctions/dates';
class BusinessMCard extends Component {
    constructor(props) {
        super(props)
        let url = window.location.href.split('/')[window.location.href.split('/').length - 1]
        let token = localStorage.getItem("tokenId");
        this.state = {
            "isApiCallSuccessfull": false,
            "urlofPage": url,
            "token": token,
            "sidebarView": false,
            "leadType": 'new',
            "newresponse": [],
            "activeresponse": [],
            "pendingresponse": [],
            "rejectedresponse": [],
            'finalresponse': []
        }
    }
    componentDidMount() {
        this.getLeads(this.state.leadType)
    }
    getLeads = async (leadType) => {
        let response = await getLeads(leadType, this.state.token);
        if (response) {
            this.setState({ "finalresponse": response.data })
        }
    }
    newDataChangeHandler = () => {
        this.setState({ leadType: "new" });
        this.getLeads(this.state.leadType);
    }
    activeDataChangeHandler = () => {
        this.setState({ leadType: "active" })
        this.getLeads(this.state.leadType);
    }
    pendingDataChangeHandler = () => this.setState({ leadType: "pending" })
    rejectedDataChangeHandler = () => this.setState({ leadType: "rejected" })
    render() {
        return (
            <React.Fragment>
                {/* {console.log(this.state.leadType)} */}
                <div className={this.state.sidebarView ? "mainContent mainContentMini" : "mainContent"}>
                    <Container fluid className="my-5 pb-5">
                        <Row>
                            <Col md={12}>
                                <ArticleHeader heading='Leads' buttonName='Add New'></ArticleHeader>
                                <Nav className="justify-content-around verticalNavLink mb-4">
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/new" onClick={this.newDataChangeHandler}>New</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/active" onClick={this.activeDataChangeHandler} >Active</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/pending" onClick={this.pendingDataChangeHandler} >Pending</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/rejected" onClick={this.rejectedDataChangeHandler} >Rejected</NavLink>
                                </Nav>
                            </Col>
                        </Row>
                        {this.state.isApiCallSuccessfull ===true}
                        <div>
                        {this.state.finalresponse.map((prop, key) => {
                            return (
                                <Container key={key}>
                                    <Row>
                                        <Col md={2} className="card text-center py-2 mb-auto whiteOpaque">{getDateFormat_4(prop.lead_date)}</Col>
                                        <Col md={10}>
                                            <Link to={`/business/leads/lead/${this.state.urlofPage}/${prop.lead_uuid}`} >
                                                <Container fluid className="card p-3 mb-4" onClick={this.dataMapper}>
                                                    <Row>
                                                        <Col md={5} className="my-auto text-dark">
                                                            <div className="font-size-12 text-capitalize">{prop.companyName}</div>
                                                            <div><i className="fas fa-map-marked-alt mr-2 text-primary"></i>{prop.lead_uuid}</div>
                                                        </Col>
                                                        <Col md={3} className="my-auto text-dark">
                                                            <div className="text-capitalize font-size-10"><i className="fas fa-user-alt mr-2 text-primary"></i>{prop.lead_contactPerson}</div>
                                                            <div><i className="fas fa-phone-square mr-2 text-primary"></i>{prop.lead_contactNumber}</div>
                                                        </Col>
                                                        <Col md={2} className="my-auto">
                                                            {prop.lead_isActive === 1 ? <div className="card text-center bg-dark py-1 mx-4 text-white text-uppercase">ACTIVE</div> : <div className="card text-center bg-dark py-1 mx-4 text-white text-uppercase" value={prop.lead_uuid}>OFFLINE</div>}
                                                        </Col>
                                                        <Col md={2} className="my-auto text-dark text-center">
                                                            <h1 className="mb-0 text-primary">{prop.totalEquipment}</h1>
                                                            <div className="mtn-5">Equipment</div>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            </Link>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        })}
                        </div>
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
export default BusinessMCard;



