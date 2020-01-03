import React, { Component } from 'react';
import AddFields2 from '../FormFields/AddFields2.jsx';
import { Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { changeServiceStatus } from '../../views/Business/actions'
class FinalisedSupplier extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            token: token,
            isModalShowing: false,
            isEditbidShowing : false,
            isServiceModalShowing: false,
            leadid: '',
            leaddetid: '',
            leaddetuuid: '',
            newstatus: '',
            createdby: '',
            finalizedStatus: true,
            inspectionStatus: true,
            feildVisitStatus: true,
            agreementStatus: '',
            signedAgreementStatus: '',
            supplierData: [],
            isApiCallSuccessful: false,
        }
    }
    statusSorter = () => {
        this.props.data.transactions.map((prop, index) => {
            if (prop === 'FINALIZED') { this.setState({ finalizedStatus: true }) }
            if (prop === 'INSPECTION') { this.setState({ inspectionStatus: true }) }
            if (prop === 'FIELDVISIT') { this.setState({ feildVisitStatus: true }) }
            if (prop === 'AGREEMENT') { this.setState({ agreementStatus: true }) }
            if (prop === 'SIGNEDAGREEMENT') { this.setState({ signedAgreementStatus: true }) }
        })
    }
    serviceChanger = () => {
        let data = {
            "leadId": this.state.leadid,
            "leadDetId": this.state.leaddetid,
            "leadDetUuid": this.state.leaddetuuid,
            "newStatus": this.state.newstatus,
            "createdBy": this.state.createdby
        }
        changeServiceStatus(data, this.state.token).then((res) => {
            // console.log(res);
        })
    }
    getServiceData = (leadid, leaddetid, leaddetuuid, newstatus, createdby) => {
        this.setState({
            leadid: leadid.toString(),
            leaddetid: leaddetid.toString(),
            leaddetuuid: leaddetuuid,
            newstatus: newstatus.currentTarget.dataset.id,
            createdby: createdby
        })
        this.isServiceModalShowing()
    }
    isServiceModalShowing = () => this.setState({ "isServiceModalShowing": true })
    closeServiceModalHandler = () => this.setState({ "isServiceModalShowing": false })
    openModalHandler = () => this.setState({ "isModalShowing": true })
    closeModalHandler = () => this.setState({ "isModalShowing": false })
    render() {
        return (
            <React.Fragment>
                <Card className="mx-auto p-3 my-4">
                    <Row>
                        <Col md={3} className="text-left my-auto">
                            <div className="text-dark font-size-10 text-capitalize">{this.props.data.companyName}
                                <small className="text-danger"> [{this.props.data.equipmentName}]</small>
                            </div>
                            <div className="font-size-08 text-dark">Priority : <span className="text-primary text-capitalize">{this.props.data.leadDet_priority}</span></div>
                        </Col>
                        <Col md={9} className=" my-auto">
                            <Row>
                                <Col md={1} className="text-center my-auto">
                                    <div><AiOutlineMenu className="font-size-16 text-dark" /></div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-bluefuchisa" data-id="FINALIZED" onClick={(newstatus) => this.getServiceData(this.props.data.lead_id, this.props.data.leadDet_id, this.props.data.leadDet_uuid, newstatus, this.props.data.leadDet_createdBy)}>
                                    <div><FaRegCheckCircle className={this.state.finalizedStatus ? "text-success text-center font-size-22" : "text-center font-size-22"} /></div>
                                    <div className={this.state.finalizedStatus ? "text-success font-size-07" : "font-size-07"}>Finalised</div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-bluefuchisa" data-id="INSPECTION" onClick={(newstatus) => this.getServiceData(this.props.data.lead_id, this.props.data.leadDet_id, this.props.data.leadDet_uuid, newstatus, this.props.data.leadDet_createdBy)}>
                                    <div><FaRegCheckCircle className={this.state.inspectionStatus ? "text-success text-center font-size-22" : "text-center font-size-22"} /></div>
                                    <div className={this.state.inspectionStatus ? "text-success font-size-07" : "font-size-07"}>Inspection</div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-bluefuchisa" data-id="FIELDVISIT" onClick={(newstatus) => this.getServiceData(this.props.data.lead_id, this.props.data.leadDet_id, this.props.data.leadDet_uuid, newstatus, this.props.data.leadDet_createdBy)}>
                                    <div><FaRegCheckCircle className={this.state.feildVisitStatus ? "text-success text-center font-size-22" : "text-center font-size-22"} /></div>
                                    <div className={this.state.feildVisitStatus ? "text-success font-size-07" : "font-size-07"}>Feild Visit</div>
                                </Col>
                                <Col md={2} className="text-center my-auto  hovertext-bluefuchisa" data-id="AGREEMENT" onClick={(newstatus) => this.getServiceData(this.props.data.lead_id, this.props.data.leadDet_id, this.props.data.leadDet_uuid, newstatus, this.props.data.leadDet_createdBy)}>
                                    <div><FaRegCheckCircle className={this.state.agreementStatus ? "text-success text-center font-size-22" : "text-center font-size-22"} /></div>
                                    <div className={this.state.agreementStatus ? "text-success font-size-07" : "font-size-07"}>Agreement</div>
                                </Col>
                                <Col md={3} className="text-center my-auto  hovertext-bluefuchisa" data-id="SIGNEDAGREEMENT" onClick={(newstatus) => this.getServiceData(this.props.data.lead_id, this.props.data.leadDet_id, this.props.data.leadDet_uuid, newstatus, this.props.data.leadDet_createdBy)}>
                                    <div><FaRegCheckCircle className={this.state.signedAgreementStatus ? "text-success text-center font-size-22" : "text-center font-size-22"} /></div>
                                    <div className={this.state.signedAgreementStatus ? "text-success font-size-07" : "font-size-07"}>Signed Agreement</div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col md={2}>
                            <div className="text-primary font-size-08">Bid Price</div>
                            <div className="text-dark font-size-09">Rs. {this.props.data.leadDet_price === null ? '-NA-' : this.props.data.leadDet_price} </div>
                        </Col>
                        <Col md={1}>
                            <div className="text-primary font-size-08">Battha</div>
                            <div className="text-dark font-size-09">{this.props.data.leadDet_operatorBattha === null ? '-NA-' : this.props.data.leadDet_operatorBatha}</div>
                        </Col>
                        <Col md={1}>
                            <div className="text-primary font-size-08">Year</div>
                            <div className="text-dark font-size-09">{this.props.data.leadDet_year === null ? '-NA-' : this.props.data.leadDet_year}</div>
                        </Col>
                        <Col md={3}>
                            <div className="text-primary font-size-08">Location</div>
                            <div className="text-dark font-size-09 text-capitalize">{this.props.data.leadDet_location === null ? '-NA-' : this.props.data.leadDet_location}</div>
                        </Col>
                        <Col md={3}>
                            <div className="text-primary font-size-08">Supplier Remarks</div>
                            <div className="text-dark font-size-09 text-capitalize">{this.props.data.leadDet_remarks === null ? '-NA-' : this.props.data.leadDet_remarks}</div>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="primary" size="sm" block  onClick={this.openModalHandler}><i className="fas fa-edit mr-2"></i>Edit Bid</Button>
                        </Col>
                    </Row>
                </Card>
                <Modal show={this.state.isModalShowing}  onHide={this.closeModalHandler} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFields2></AddFields2>
                    </Modal.Body>
                </Modal>
                <Modal show={this.state.isServiceModalShowing} onHide={this.closeServiceModalHandler} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Upload Documents</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Button variant="outline-danger" size="sm" block onClick={this.serviceChanger}>Submit</Button>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

export default FinalisedSupplier
