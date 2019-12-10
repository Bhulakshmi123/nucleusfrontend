import React, { Component } from 'react';
import { Button, Container, Row, Col, InputGroup, FormControl, Modal } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import AddViewOne from '../AddViewOne/AddViewOne';
import AddViewTwo from '../AddViewTwo/AddViewTwo';
import AddViewThree from '../AddViewThree/AddViewThree';
import AddFeilds3 from '../../components/FormFields/AddFeilds3.jsx';
import { getLeadEquipmentDetails } from '../../views/Business/actions'
class SideArticle extends Component {
    constructor(props) {
        super(props)
        // console.log('SideArticle Proops', this.props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            isApiCallSuccessfull: false,
            isModalShowing: false,
            token: token,
            leadEquipmentsInformation: this.props.leadinfo,
            leadUuid: this.props.leadinfo[0].lead_uuid,
            leadEquipmentUid: this.props.leadinfo[0].leadDet_uuid,
            equipmentName: this.props.leadinfo[0].equipmentName,
            equipmentType: this.props.leadinfo[0].leadDet_equipmentType,
            specificEquipmentsDetails: [],
            leadDetId: 0
        }
    }

    componentDidMount() {
        this.getLeadEquipmentDetails(this.state.leadUuid, this.state.leadEquipmentUid, this.state.token);
    }

    openModalHandler = () => {
        this.setState({ "isModalShowing": true })
    }

    closeModalHandler = () => {
        this.setState({ "isModalShowing": false })
    }

    equipmentDataChangeHandler = (leadId, leadDetUuid) => {
        this.setState({ leadUuid: leadId, leadEquipmentUid: leadDetUuid })
        this.getLeadEquipmentDetails(leadId, leadDetUuid, this.state.token);
    }

    getLeadEquipmentDetails = async (leadUuid, leadDetUuid, token) => {
        let response = await getLeadEquipmentDetails(leadUuid + "/" + leadDetUuid, token);
        if (response) {
            this.setState({ "specificEquipmentsDetails": response.data[0], "leadDetId": response.data[0].leadDet_id })
            this.setState({ "isApiCallSuccessfull": true })
        }
    }

    render() {
        return (
            <React.Fragment>
                <Col md={3} className="backgroundColor1 viewHeight px-0">
                    <div className="mb-5 pb-5">
                        <div className="mt-4 px-4 mb-4">
                            <Link to="/business/leads/new" className="text-white mln-2"><i className="far fa-arrow-alt-circle-left mr-1"></i><u>Go Back</u></Link>
                            <h6 className="pl-1 text-white opct-5 mb-1 mt-3">New Lead</h6>
                            <h3 className="text-white pl-1">{this.state.leadEquipmentsInformation[0].companyName}</h3>
                            <Button variant="light" size="sm" className="px-3 ml-1 text-primary" onClick={this.openModalHandler}><i className="far fa-edit mr-1"></i>Edit</Button>
                        </div>
                        <div className="px-3 mx-0">
                            <InputGroup className="pl-2 ml-1 searchBarStyle">
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
                                        <Row className="text-white borderedRow px-0 py-2 mx-0" key={key} onClick={() => this.equipmentDataChangeHandler(prop.lead_uuid, prop.leadDet_uuid)}>
                                            <Col md={9} className="pl-4">
                                                <div className="pl-1 text-capitalize">{prop.equipmentName}</div>
                                                <div className="pl-1 font-size-07">{prop.leadDet_year}</div>
                                            </Col>
                                            <Col md={3} className="my-auto">
                                                <div className="text-white equipmentCount p-1 text-center">{prop.leadDet_quantity}</div>
                                            </Col>
                                        </Row>
                                    )
                                })
                            }
                        </Container>
                    </div>
                </Col>
                <Col md={7} className="viewHeight mx-0">
                    {this.state.isApiCallSuccessfull === true ?
                        <Switch>
                            <Route path="/business/leads/lead/active/:id/premium">
                                <AddViewThree
                                    uid={this.state.leadUuid}
                                    leaduid={this.state.leadEquipmentUid}
                                    equipment={this.state.equipmentName}
                                    equipmentType={this.state.equipmentType}>
                                </AddViewThree>
                            </Route>
                            <Route path="/business/leads/lead/active/:id/discovery">
                                <AddViewThree
                                    uid={this.state.leadUuid}
                                    leaduid={this.state.leadEquipmentUid}
                                    equipment={this.state.equipmentName}
                                    equipmentType={this.state.equipmentType}>
                                </AddViewThree>
                            </Route>
                            <Route path="/business/leads/lead/active/:id/basic">
                                <AddViewThree
                                    uid={this.state.leadUuid}
                                    leaduid={this.state.leadEquipmentUid}
                                    equipment={this.state.equipmentName}
                                    equipmentType={this.state.equipmentType}>
                                </AddViewThree>
                            </Route>
                            <Route path="/business/leads/lead/new/:id">
                                <AddViewOne formData={this.state.specificEquipmentsDetails}></AddViewOne>
                            </Route>
                            <Route path="/business/leads/lead/active/:id">
                                <AddViewTwo
                                    uid={this.state.leadUuid}
                                    leaduid={this.state.leadEquipmentUid}
                                    equipment={this.state.equipmentName}>
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
                        <AddFeilds3></AddFeilds3>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
export default SideArticle;