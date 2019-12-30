import React, { Component } from 'react';
import { Button, Container, Row, Col, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import AddViewOne from '../AddViewOne/AddViewOne';
import AddViewTwo from '../AddViewTwo/AddViewTwo';
import AddViewThree from '../AddViewThree/AddViewThree';
import AddFields3 from '../../components/FormFields/AddFields3.jsx';
import { getLeadEquipmentDetails, getSupplierList, changeLeadStatus, moveToProjects } from '../../views/Business/actions';
class SideArticle extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            isApiCallSuccessful: false,
            isModalShowing: false,
            token: token,
            leadUuid: this.props.leadinfo[0].lead_uuid,
            leadEquipmentUid: this.props.leadinfo[0].leadDet_uuid,
            specificEquipmentsDetails: [],
            specificEquipmentSupplierDetails: [],
            categoryNames: [],
            selectedCategory: [],
            dataToRender: [],
            chosen: 0,
            placeOfAction: '',
            supplierData: [],
            redirect: false
        }
    }

    componentDidMount () {
        this.getLeadEquipmentDetails(this.state.leadUuid, this.state.leadEquipmentUid, this.state.token);
    }
    testAddViewThree = () => {
        this.getLeadEquipmentDetails(this.state.leadUuid, this.state.leadEquipmentUid, this.state.token);
    }
    setRedirect = (action) => {
        this.setState({
            redirect: true,
            placeOfAction: action
        })
    }
    renderBasedOnRedirect = () => {
        if (this.state.redirect && this.state.placeOfAction === 'ACTIVATED') {
            return (<Redirect to="/business/leads/active"></Redirect>)
        }
        if (this.state.redirect && this.state.placeOfAction === 'DELETEDNEW') {
            return (<Redirect to="/business/leads/new"></Redirect>)
        }
        if (this.state.redirect && this.state.placeOfAction === 'DELETEDACTIVE') {
            return (<Redirect to="/business/leads/active"></Redirect>)
        }
    }

    changeLeadStatus (leaddetid, newstatus, source) {
        let data = { "leadDetId": leaddetid.toString(), "newStatus": newstatus }
        changeLeadStatus(data, this.state.token).then((res) => {
            if (data.newStatus === "DELETED") { //! Change Later to CLOSED
                this.setRedirect(data.newStatus + source)
            }
            if (data.newStatus === "ACTIVATED") {
                this.setRedirect(data.newStatus)
            }
            if (data.newStatus === "FINALIZED") {
                this.getLeadEquipmentDetails(this.state.leadUuid, this.state.leadEquipmentUid, this.state.token);
            }
        });
    }

    openModalHandler = () => {
        this.setState({ "isModalShowing": true })
    }

    closeModalHandler = () => {
        this.setState({ "isModalShowing": false })
    }

    equipmentDataChangeHandler = (leadId, leadDetUuid, key) => {
        this.setState({ leadUuid: leadId, leadEquipmentUid: leadDetUuid })
        this.getLeadEquipmentDetails(leadId, leadDetUuid, this.state.token);
        this.setState({ chosen: key })
    }

    getLeadEquipmentDetails = async (leadUuid, leadDetUuid, token) => {
        let response = await getLeadEquipmentDetails(leadUuid + "/" + leadDetUuid, token);
        if (response) {
            this.setState({ "specificEquipmentsDetails": response.data[0] })
            this.setState({ 'supplierData': response.supplierData })
            this.getSupplierList(response.data[0].leadDet_equipmentType);
            this.setState({ "isApiCallSuccessful": true })
        }
    }
    getSupplierList = async (equipmentType) => {
        let data = { "equipmentType": equipmentType.toString() }
        let response = await getSupplierList(data, this.state.token);
        if (response) {
            let categoryName = [];
            this.setState({ specificEquipmentSupplierDetails: response.data })
            for (let categoryType in response.data) {
                categoryName.push(categoryType);
            }
            this.setState({ 'categoryNames': categoryName, 'selectedCategory': categoryName[0] });
            this.setState({ "dataToRender": response.data[this.state.selectedCategory] });
        }
    }
    moveToProjects = async (userUuid, leadId, leadDetId) => {
        let data = {
            "userUuid": userUuid,
            "leadId": leadId.toString(),
            "leadDetId": [leadDetId.toString()]
        }
        // console.log('moveToProjects',data)
        let response = await moveToProjects(data, this.state.token);
        if (response) {
            // console.log('moveToProjects', response)
            alert('Project Moved to New')
        }
        else {
            alert('Project Failed to Moved to New')
        }
    }
    render () {
        return (
            <React.Fragment>
                {this.renderBasedOnRedirect()}
                <Col md={3} className="bg-bluefuchsia vh-100 bg-light overflow-auto px-0">
                    <div className="mb-5 pb-5">
                        <div className="mt-4 px-3 mb-4">
                            <Link to="/business/leads/new" className="text-white mln-2"><i className="far fa-arrow-alt-circle-left mr-1"></i><u>Go Back</u></Link>
                            <h6 className="pl-1 text-white opct-05 mb-1 mt-3">New Lead</h6>
                            <h3 className="text-white pl-1">{this.props.leadinfo[0].companyName}</h3>
                            <Button variant="light" size="sm" className="px-3 ml-1 text-primary" onClick={this.openModalHandler}><i className="far fa-edit mr-1"></i>Edit</Button>
                        </div>
                        <div className="px-3 mx-0">
                            <InputGroup className="searchBarStyle">
                                <InputGroup.Prepend>
                                    <InputGroup.Text className="searchBarPrepend"><i className="fas fa-search"></i></InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Text input with checkbox" placeholder="Search" className="formControlSearch" />
                            </InputGroup>
                        </div>
                        <Container fluid className="mt-3 px-0">
                            {
                                this.props.leadinfo.map((prop, key) => {
                                    return (
                                        <Row
                                            className={`text-white borderedRow px-0 py-2 mx-0 ${this.state.chosen === key ? "borderedRowActive bor-rad-1" : "null"}`}
                                            key={key}
                                            onClick={() => this.equipmentDataChangeHandler(prop.lead_uuid, prop.leadDet_uuid, key)}>
                                            <Col md={9} className="pl-3">
                                                <div className="pl-1 text-capitalize">{prop.equipmentName}</div>
                                                <div className="pl-1 font-size-07">{prop.leadDet_year}</div>
                                            </Col>
                                            <Col md={3} className="my-auto">
                                                <div className="text-white equipmentCount bor-rad-3 p-1 text-center">{prop.leadDet_quantity}</div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </Container>
                    </div>
                </Col>
                <Col md={9} className="vh-100 bg-light overflow-auto mx-0">
                    {this.state.isApiCallSuccessful === true ?
                        <Switch>
                            <Route path="/business/leads/lead/active/premium">
                                <AddViewThree
                                    formData={this.state.specificEquipmentsDetails}
                                    supplierData={this.state.specificEquipmentSupplierDetails}
                                    categoryNames={this.state.categoryNames}
                                    selectedCategory={this.state.selectedCategory}
                                    dataToRender={this.state.dataToRender}
                                    leadUuid={this.state.leadUuid}
                                    leadDetUuid={this.state.leadEquipmentUid}
                                    token={this.state.token}
                                    statusChanger={this.changeLeadStatus.bind(this)}
                                    funFunction={this.testAddViewThree}
                                    moveToProjects={this.moveToProjects}>
                                </AddViewThree>
                            </Route>
                            <Route path="/business/leads/lead/active/discovery">
                                <AddViewThree
                                    formData={this.state.specificEquipmentsDetails}
                                    supplierData={this.state.specificEquipmentSupplierDetails}
                                    categoryNames={this.state.categoryNames}
                                    selectedCategory={this.state.selectedCategory}
                                    dataToRender={this.state.dataToRender}
                                    statusChanger={this.changeLeadStatus.bind(this)}
                                    funFunction={this.testAddViewThree}
                                    moveToProjects={this.moveToProjects}>
                                </AddViewThree>
                            </Route>
                            <Route path="/business/leads/lead/active/basic">
                                <AddViewThree
                                    formData={this.state.specificEquipmentsDetails}
                                    supplierData={this.state.specificEquipmentSupplierDetails}
                                    categoryNames={this.state.categoryNames}
                                    selectedCategory={this.state.selectedCategory}
                                    dataToRender={this.state.dataToRender}
                                    statusChanger={this.changeLeadStatus.bind(this)}
                                    funFunction={this.testAddViewThree}
                                    moveToProjects={this.moveToProjects}>
                                </AddViewThree>
                            </Route>
                            <Route path="/business/leads/lead/new/:id">
                                <AddViewOne
                                    formData={this.state.specificEquipmentsDetails}
                                    statusChanger={this.changeLeadStatus.bind(this)}>
                                </AddViewOne>
                            </Route>
                            <Route path="/business/leads/lead/active/:id">
                                <AddViewTwo
                                    formData={this.state.specificEquipmentsDetails}
                                    supplierData={this.state.supplierData}
                                    statusChanger={this.changeLeadStatus.bind(this)}>
                                </AddViewTwo>
                            </Route>
                        </Switch>
                        : null
                    }
                </Col>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFields3></AddFields3>
                    </Modal.Body>
                </Modal>
            </React.Fragment >
        )
    }
}
export default SideArticle;