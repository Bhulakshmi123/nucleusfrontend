import React, { Component } from 'react';
import { Row, Col, Button, Container, Modal, ButtonGroup } from 'react-bootstrap';
import { randomHeaderColorGenerator } from '../../commonFunctions/randomColorGenerator';
import { Link } from 'react-router-dom';
import Renter from '../Renter/Renter';
import FinalizedSupplier from '../Supplier/FinalizedSupplier';
import AddFieldsPro from '../FormFields/AddFieldsPro';
import ShortListedSupplier from '../Supplier/ShortListedSupplier';
import { DefaultCard } from '../DefaultCard/DefaultCard';
class AddViewTwo extends Component {
    constructor(props) {
        super(props)
        let userUuid = localStorage.getItem("uuid"),
            token = localStorage.getItem("tokenId");
        this.state = {
            isModalShowing: false,
            userUuid: userUuid,
            token: token,
        }
    }

    openModalHandler = () => { this.setState({ "isModalShowing": true }) }

    closeModalHandler = () => { this.setState({ "isModalShowing": false }) }

    render () {
        return (
            <React.Fragment>
                <Container className="mt-5">
                    <Row className="mb-4">
                        <Col md={6} className="my-auto">
                            <h3 className="m-0 text-capitalize">{this.props.formData.equipmentName}</h3>
                        </Col>
                        <Col md={6} className={`my-auto ${this.props.buttonStatus}`}>
                            <ButtonGroup className="float-right my-auto">
                                <i className="fab fa-gg-circle text-center font-size-20 hovertext-bluefuchisa cursor-pointer mr-3" onClick={this.openModalHandler}></i>
                                <Link to={`/business/leads/lead/active/suppliersList`}>
                                    <Button variant="primary" className="mx-1 px-3 bor-rad-03" size="sm" >Supplier List</Button>
                                </Link>
                                <Button variant="danger" className="mx-1 px-3 bor-rad-03" size="sm" name="CLOSED" onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'REJECTED', 'ACTIVE', this.props.formData.equipmentName)}>Reject</Button>
                                <Button variant="info" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.props.moveToProjects(this.state.userUuid, this.props.formData.lead_id, this.props.formData.leadDet_id, this.props.formData.equipmentName)}>Move to Projects</Button>
                            </ButtonGroup>
                        </Col>
                        <Col md={2} className={`my-auto ${this.props.labelStatus}`}></Col>
                        <Col md={4} className={`my-auto ${this.props.labelStatus}`}>
                            <div className="text-white bg-brickRed text-center p-1 bor-rad-30 text-uppercase">This Lead Was Rejected</div>
                        </Col>
                    </Row>
                    <div className="text-center text-white w-25 bg-moodIndigo  py-1 bor-rad-02 boxShadow-4bpx">RENTER INFORMATION</div>
                    <div className="my-3">
                        <Renter editFunction={this.openModalHandler} formData={this.props.formData}></Renter>
                    </div>
                    <div className="mt-3 text-center text-white w-25 bg-bloodIndigo py-1 bor-rad-02 boxShadow-4bpx">FINALIZED SUPPLIERS</div>
                    <div>
                        {
                            this.props.supplierData.finalized.length === 0 ?
                                <div>
                                    <DefaultCard md={12}>No Finalized Suppliers are Available to Display</DefaultCard>
                                </div> :
                                this.props.supplierData.finalized.map((prop, key) => {
                                    return (
                                        <FinalizedSupplier data={prop} key={key}></FinalizedSupplier>
                                    )
                                })
                        }
                    </div>
                    <div className="text-center text-white w-25 bg-brickRed py-1 bor-rad-02 boxShadow-4bpx">SHORTLISTED SUPPLIERS</div>
                    <div className="mb-5 pb-5">
                        {
                            this.props.supplierData.shortlisted.length === 0 ?
                                <DefaultCard md={12}>No Shortlisted Suppliers are Available to Display</DefaultCard> :
                                this.props.supplierData.shortlisted.map((prop, key) => {
                                    return (
                                        <ShortListedSupplier data={prop} key={key} finalize={this.props.statusChanger.bind(this)}></ShortListedSupplier>
                                    )
                                })
                        }
                    </div>
                </Container>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="xl">
                    <Modal.Header closeButton className={`text-white ${randomHeaderColorGenerator()}`}>
                        <Modal.Title id="contained-modal-title-md">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddFieldsPro leadUuid={this.props.formData.lead_uuid} leadDetUuid={this.props.formData.leadDet_uuid}></AddFieldsPro>
                    </Modal.Body>
                </Modal>
            </React.Fragment >
        )
    }
}
export default AddViewTwo;
