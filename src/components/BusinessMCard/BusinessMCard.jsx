
import React, { Component } from 'react'
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { getNewLeads, getActiveLeads, getPendingLeads, getRejectedLeads } from '../../views/Business/actions';
import { getDateFormat_4 } from '../../commonFunctions/dates';
class BusinessMCard extends Component {
    constructor(props) {
        super(props)
        let url = window.location.href.split('/')[window.location.href.split('/').length - 1]
        let token = localStorage.getItem("tokenId");
        localStorage.setItem('SidebarMinized', false);
        this.state = { "urlofPage": url, "token": token, "sidebarView": false, "newresponse": [], "activeresponse": [], "pendingresponse": [], "rejectedresponse": [], 'finalresponse': [] }
    }
    componentDidMount() {
        this.getNewLeads();
        this.getActiveLeads();
        // this.getPendingLeads();
        // this.getRejectedLeads();
    }
    getNewLeads = async () => {
        let response = await getNewLeads(this.state.token);
        if (response) {
            this.setState({ "newresponse": response.data, "finalresponse": response.data })
            // console.log(this.state.newresponse);
        }
    }
    getActiveLeads = async () => {
        let response = await getActiveLeads(this.state.token);
        if (response) {
            this.setState({ "activeresponse": response.data })
            // console.log('Active Leads', this.state.activeresponse);
        }
    }
    getPendingLeads = async () => {
        let response = await getPendingLeads(this.state.token);
        if (response) {
            this.setState({ "pendingresponse": response.data })
            // console.log(this.state.pendingresponse);
        }
    }
    getRejectedLeads = async () => {
        let response = await getRejectedLeads(this.state.token);
        if (response) {
            this.setState({ "rejectedresponse": response.data })
            // console.log(this.state.rejectedresponse);
        }
    }
    dataChangeHandler = () => {
        let url = window.location.href.split('/')[window.location.href.split('/').length - 1];
        if (url === 'new') { this.setState({ 'finalresponse': this.state.newresponse }) }
        if (url === 'active') { this.setState({ 'finalresponse': this.state.activeresponse }) }
        if (url === 'pending') { this.setState({ 'finalresponse': this.state.pendingresponse }) }
        if (url === 'rejected') { this.setState({ 'finalresponse': this.state.rejectedresponse }) }
    }
    render() {
        return (
            <React.Fragment>
                <div className={this.state.sidebarView ? "mainContent mainContentMini" : "mainContent"}>
                    <Container fluid className="my-5 pb-5">
                        <Row>
                            <Col md={12}>
                                <ArticleHeader heading='Leads' buttonName='Add New'></ArticleHeader>
                                <Nav className="justify-content-around verticalNavLink mb-4">
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/new" onClick={this.dataChangeHandler}>New</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/active" onClick={this.dataChangeHandler} >Active</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/pending" onClick={this.dataChangeHandler} >Pending</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-2" to="/business/leads/rejected" onClick={this.dataChangeHandler} >Rejected</NavLink>
                                </Nav>
                            </Col>
                        </Row>
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
                                                            {prop.lead_isActive == 1 ? <div className="card text-center bg-dark py-1 mx-4 text-white text-uppercase">ACTIVE</div> : <div className="card text-center bg-dark py-1 mx-4 text-white text-uppercase" value={prop.lead_uuid}>OFFLINE</div>}
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
                    </Container>
                </div>
            </React.Fragment>
        )
    }
}
export default BusinessMCard;



