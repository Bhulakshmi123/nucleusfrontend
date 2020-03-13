
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaMapMarkedAlt, FaPhoneSquare } from "react-icons/fa";
import { ArticleHeader } from '../ArticleHeader/ArticleHeader';
import { getLeads, getProjectsOfNucleus } from '../../views/Business/actions';
import { getDateFormat_4 } from '../../commonFunctions/dates';
import { sidebarViewAction } from '../../redux/actions';
import { DefaultCard } from '../DefaultCard/DefaultCard';
class BusinessMCard extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId"),
            leadType = window.location.href.split('/');
        this.state = {
            isApiCallSuccessful: false,
            token: token,
            sidebarView: false,
            leadType: leadType[leadType.length - 1],
            leadsInformation: [],
            leadDate: '',
            dummyDataHolder: [],
            selectedState: 'clientName'
        }
        this.searchBoxHandler = this.searchBoxHandler.bind(this)
        this.selectHandler = this.selectHandler.bind(this)
    }

    componentDidMount () {
        this.props.sidebarViewAction(false);
        this.getLeads(this.state.leadType);
    }

    getLeads = async (leadType) => {
        if (leadType === 'moved') {
            let response = await getProjectsOfNucleus(this.state.token);
            if (response) {
                this.setState({
                    leadsInformation: response.data,
                    dummyDataHolder: response.data,
                    isApiCallSuccessful: true
                });
            }
        }
        else {
            let response = await getLeads(leadType, this.state.token);
            if (response) {
                this.setState({
                    leadsInformation: response.data,
                    dummyDataHolder: response.data,
                    isApiCallSuccessful: true
                });
            }
        }
    }

    selectHandler (e) {
        this.setState({
            selectedState: e.target.value
        });
    }

    dataChangeHandler = (e) => {
        this.getLeads(e.target.name)
        this.setState({
            leadType: e.target.name
        });
    }

    searchBoxHandler (e) {
        let currentList, displayedLeads;
        if (e.target.value !== '') {
            let searchQuery;
            currentList = this.state.dummyDataHolder;
            displayedLeads = currentList.filter(item => {
                if (this.state.selectedState === 'companyName' || this.state.selectedState === 'selectedBy') {
                    searchQuery = e.target.value.toLowerCase();
                    let searchValue = item.companyName.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                }
                if (this.state.selectedState === 'phoneNumber') {
                    searchQuery = e.target.value;
                    let searchValue = item.lead_contactNumber.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                }
                if (this.state.selectedState === 'equipmentCount') {
                    searchQuery = e.target.value.toLowerCase();
                    let searchValue = item.totalEquipment.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                }
                if (this.state.selectedState === 'location') {
                    searchQuery = e.target.value.toLowerCase();
                    let searchValue = item.lead_uuid.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                }
                if (this.state.selectedState === 'clientName') {
                    searchQuery = e.target.value.toLowerCase();
                    let searchValue = item.lead_contactPerson.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                }
                if (this.state.selectedState === 'leadStatus') {
                    searchQuery = e.target.value.toLowerCase();
                    let searchValue = item.lead_date.toLowerCase();
                    return searchValue.indexOf(searchQuery) !== -1;
                }
                else {
                    window.alert('Something Went Wrong please Try Again Later');
                    return 0;
                }
            })
            this.setState({
                leadsInformation: displayedLeads
            });
        }
        else {
            this.setState({
                leadsInformation: this.state.dummyDataHolder
            });
        }
    }

    render () {
        return (
            <React.Fragment>
                <div className={this.state.sidebarView ? "mainContent mainContentMini" : "mainContent"}>
                    <Container className="my-5 pb-5">
                        <Row>
                            <Col md={12}>
                                <ArticleHeader heading='Leads' buttonName='Add New' getLeads={this.getLeads.bind(this)}></ArticleHeader>
                            </Col>
                        </Row>
                        <Row className="mb-3 mt-2">
                            <Col md={7} className="my-auto">
                                <Nav className="">
                                    <NavLink activeClassName="border-bottom-white" className="text-white px-3 mr-2 hovertext-white-border" to="/business/leads/new" name="new" onClick={this.dataChangeHandler}>New</NavLink>
                                    <NavLink activeClassName="border-bottom-white" className="text-white px-3 mr-2 hovertext-white-border" to="/business/leads/active" name="active" onClick={this.dataChangeHandler} >Active</NavLink>
                                    <NavLink activeClassName="border-bottom-white" className="text-white px-3 mr-2 hovertext-white-border" to="/business/leads/deleted" name="deleted" onClick={this.dataChangeHandler}>Deleted</NavLink>
                                    <NavLink activeClassName="border-bottom-white" className="text-white px-3 mr-2 hovertext-white-border" to="/business/leads/rejected" name="rejected" onClick={this.dataChangeHandler}>Rejected</NavLink>
                                    <NavLink activeClassName="border-bottom-white" className="text-white px-3 mr-2 hovertext-white-border" to="/business/leads/moved" name="moved" onClick={this.dataChangeHandler}>Moved To Projects</NavLink>
                                </Nav>
                            </Col>
                            <Col md={5} className="my-auto">
                                <div className="input-group w-100">
                                    <select className="customSelect w-35" value={this.state.selectedState} onChange={this.selectHandler}>
                                        <option value="searchBy">Search by</option>
                                        <option value="clientName">Client Name</option>
                                        {/* <option value="phoneNumber">Phone Number</option> */}
                                        {/* <option value="equipmentCount">Equipment Count</option> */}
                                        <option value="location">lead_uuid</option>
                                        <option value="companyName">Company Name</option>
                                        <option value="leadStatus">Lead Date</option>
                                    </select>
                                    <div className="input-group-append w-65">
                                        <input type="text" className="customInput w-100" onChange={this.searchBoxHandler} placeholder="Search Here"></input>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div>
                            {
                                this.state.isApiCallSuccessful === false ?
                                    <DefaultCard md={5}>Fetching {this.state.leadType} Leads Information ....</DefaultCard> :
                                    this.state.leadsInformation.length === 0 ?
                                        <DefaultCard md={5}>No {this.state.leadType} Leads Available to Display</DefaultCard> :
                                        <div>
                                            {
                                                this.state.leadsInformation.map((prop, key) => {
                                                    return (
                                                        <Container key={key}>
                                                            <Row>
                                                                <Col md={2} className="card text-center py-2 mb-auto whiteOpaque">
                                                                    {getDateFormat_4(prop.lead_date)}
                                                                </Col>
                                                                <Col md={10} className="pr-0">
                                                                    <Link to={`/business/leads/lead/${this.state.leadType}/${prop.lead_uuid}`} >
                                                                        <Container fluid className="card p-3 mb-4">
                                                                            <Row>
                                                                                <Col md={5} className="my-auto text-dark">
                                                                                    <div className="font-size-12 text-capitalize">{prop.companyName} <small className="text-danger font-size-08">[{prop.lead_id}]</small> </div>
                                                                                    <div className="text-capitalize">
                                                                                        <FaMapMarkedAlt className="mr-2 text-primary" />{prop.lead_location ? null : 'Location is Not Available'}
                                                                                    </div>
                                                                                </Col>
                                                                                <Col md={3} className="my-auto text-dark">
                                                                                    <div className="text-capitalize font-size-10">
                                                                                        <i className="fas fa-user-alt mr-2 text-primary"></i>{prop.lead_contactPerson}
                                                                                    </div>
                                                                                    <div>
                                                                                        <FaPhoneSquare className="mr-2 text-primary" />{prop.lead_contactNumber}
                                                                                    </div>
                                                                                </Col>
                                                                                <Col md={2} className="my-auto">
                                                                                    <div className="card text-center py-1 mx-2 text-white text-uppercase bg-bluefuchsia">{this.state.leadType}</div>
                                                                                </Col>
                                                                                <Col md={2} className="my-auto text-dark text-center">
                                                                                    <h1 className="mb-0 text-primary">{prop.totalEquipment}</h1>
                                                                                    <h1 className="mb-0 text-primary">{prop.equipmentCount}</h1>
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



