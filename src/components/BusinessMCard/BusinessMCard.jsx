
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Container, Row, Col, Nav, InputGroup, FormControl } from 'react-bootstrap';
import { FaMapMarkedAlt, FaPhoneSquare } from "react-icons/fa";
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { getLeads } from '../../views/Business/actions';
import { getDateFormat_4 } from '../../commonFunctions/dates';
import { sidebarViewAction } from '../../redux/actions';
import { DefaultCard } from '../DefaultCard/DefaultCard';
class BusinessMCard extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        let leadType = window.location.href.split('/');
        this.state = {
            isApiCallSuccessful: false,
            token: token,
            sidebarView: false,
            leadType: leadType[leadType.length - 1],
            leadsInformation: [],
            leadDate: '',
            dummyDataHolder: []
        }
    }
    componentDidMount () {
        this.props.sidebarViewAction(false);
        this.getLeads(this.state.leadType)
    }
    getLeads = async (leadType) => {
        let response = await getLeads(leadType, this.state.token);
        if (response) {
            this.setState({ "leadsInformation": response.data })
            this.setState({ "dummyDataHolder": response.data })
            // console.log("This.State", this.state);
        }
    }
    dataChangeHandler = (e) => {
        this.getLeads(e.target.name)
        this.setState({ 'leadType': e.target.name })
    }
    handleChange (e) {
        let currentList = []
        let displayedLeads;
        if (e.target.value !== '') {
            let searchQuery = e.target.value.toLowerCase();
            currentList = this.state.leadsInformation;
            displayedLeads = currentList.filter(item => {
                console.log('each Item', item);
            })
        }
    }
    render () {
        return (
            <React.Fragment>
                <div className={this.state.sidebarView ? "mainContent mainContentMini" : "mainContent"}>
                    <Container fluid className="my-5 pb-5">
                        <Row>
                            <Col md={12}>
                                <ArticleHeader heading='Leads' buttonName='Add New'></ArticleHeader>
                            </Col>
                        </Row>
                        <Row className="mb-3 mt-2">
                            <Col md={8} className="my-auto">
                                <Nav className=" d-flex justify-content-between w-45">
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-3" to="/business/leads/new" name="new" onClick={this.dataChangeHandler}>New</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-3" to="/business/leads/active" name="active" onClick={this.dataChangeHandler} >Active</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-3" to="/business/leads/pending" name="pending" onClick={this.dataChangeHandler} disabled>Pending</NavLink>
                                    <NavLink activeClassName="activeNavLink" className="unActiveNavLink px-3" to="/business/leads/rejected" name="rejected" onClick={this.dataChangeHandler} disabled>Rejected</NavLink>
                                </Nav>
                            </Col>
                            <Col md={4} className="my-auto">
                                <InputGroup className="searchBarStyle">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text className="searchBarPrepend"><i className="fas fa-search"></i></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl aria-label="Text input with checkbox" placeholder="Search" className="formControlSearch" onChange={this.handleChange} />
                                </InputGroup>
                            </Col>
                        </Row>
                        {this.state.isApiCallSuccessful === true}
                        <div>
                            {this.state.leadsInformation.length === 0 ?
                                <DefaultCard md={5}>No Leads Available to Display</DefaultCard> :
                                this.state.leadsInformation.map((prop, key) => {
                                    return (
                                        <Container key={key}>
                                            <Row>
                                                <Col md={2} className="card text-center py-2 mb-auto whiteOpaque">{getDateFormat_4(prop.lead_date)}</Col>
                                                <Col md={10} className="pr-0">
                                                    <Link to={`/business/leads/lead/${this.state.leadType}/${prop.lead_uuid}`} >
                                                        <Container fluid className="card p-3 mb-4" onClick={this.dataMapper}>
                                                            <Row>
                                                                <Col md={5} className="my-auto text-dark">
                                                                    <div className="font-size-12 text-capitalize">{prop.companyName} <small className="text-danger">[leadid: {prop.lead_id}]</small> </div>
                                                                    <div><FaMapMarkedAlt className="mr-2 text-primary" />{prop.lead_uuid}</div>
                                                                </Col>
                                                                <Col md={3} className="my-auto text-dark">
                                                                    <div className="text-capitalize font-size-10"><i className="fas fa-user-alt mr-2 text-primary"></i>{prop.lead_contactPerson}</div>
                                                                    <div><FaPhoneSquare className="mr-2 text-primary" />{prop.lead_contactNumber}</div>
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
                                })
                            }
                        </div>
                    </Container>
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
export default connect(mapStateToProps, mapDispatchToProps())(BusinessMCard);



