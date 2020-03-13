import React, { Component } from 'react';
import { Row, Col, Button, Container, Modal, ButtonGroup } from 'react-bootstrap';
import { randomHeaderColorGenerator } from '../../commonFunctions/randomColorGenerator';
import { Link } from 'react-router-dom';
import Renter from '../Renter/Renter';
import FinalizedSupplier from '../Supplier/FinalizedSupplier';
import AddFieldsPro from '../FormFields/AddFieldsPro';
import ShortListedSupplier from '../Supplier/ShortListedSupplier';
import { DefaultCard } from '../DefaultCard/DefaultCard';
import SweetAlert from 'react-bootstrap-sweetalert';
class AddViewTwo extends Component {
    constructor(props) {
        super(props)
        // console.log('AddViewTwoProps',this.props);
        let userUuid = localStorage.getItem("uuid"),
            token = localStorage.getItem("tokenId");
        this.state = {
            isModalShowing: false,
            userUuid: userUuid,
            token: token,
            isSweetAlertShowing: false,
            btnTitle: '',
            propsCommandText: '',
            btnDisabledStatus: null
        }
    }

    componentDidMount () {
        this.btnStatusChecker();
    }

    btnStatusChecker = () => {
        if (this.props.btnDisabled === 'false') {
            this.setState({
                btnDisabledStatus: false
            });
        }
        else {
            this.setState({
                btnDisabledStatus: true
            });
        }
    }

    modalHandler = (modalStatus) => {
        this.setState({
            isModalShowing: modalStatus
        });
    }

    openSweetAlert = (btnTitleValue, propsCommandTextValue) => {
        this.setState({
            isSweetAlertShowing: true,
            btnTitle: btnTitleValue,
            propsCommandText: propsCommandTextValue
        });
    }

    closeSweetAlert = () => {
        this.setState({
            isSweetAlertShowing: false
        });
    }

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
                                <i className="fab fa-gg-circle text-center font-size-20 hovertext-bluefuchisa cursor-pointer mr-3" onClick={() => this.modalHandler(true)}></i>
                                <Link to={`/business/leads/lead/suppliersList/active/${this.props.formData.lead_uuid}`}>
                                    <Button variant="primary" className="mx-1 px-3 bor-rad-03" size="sm">Supplier List</Button>
                                </Link>
                                <Button variant="danger" className="mx-1 px-3 bor-rad-03" size="sm" name="CLOSED" onClick={() => this.openSweetAlert('Reject', 'REJECTED')}>Reject</Button>
                                <Button variant="info" className="mx-1 px-3 bor-rad-03" size="sm" name="CLOSED" onClick={() => this.openSweetAlert('Move', 'MOVED')}>Move To Projects</Button>
                                {/* <Button variant="danger" className="mx-1 px-3 bor-rad-03" size="sm" name="CLOSED" onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'REJECTED', 'ACTIVE', this.props.formData.equipmentName)}>Reject</Button> */}
                                {/* <Button variant="info" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.props.moveToProjects(this.state.userUuid, this.props.formData.lead_id, this.props.formData.leadDet_id, this.props.formData.equipmentName)}>Move to Projects</Button> */}
                            </ButtonGroup>
                        </Col>
                        <Col md={2} className={`my-auto ${this.props.labelStatus}`}></Col>
                        <Col md={4} className={`my-auto ${this.props.labelStatus}`}>
                            <div className="text-white bg-brickRed text-center p-1 bor-rad-30 text-uppercase">{this.props.labelText}</div>
                        </Col>
                    </Row>
                    <div className="text-center text-white w-25 bg-bluefuchsia  py-1 bor-rad-02 boxShadow-4bpx text-uppercase">Renter Information</div>
                    <div className="my-3">
                        <Renter editFunction={() => this.modalHandler(true)} formData={this.props.formData} btnDisabled={this.state.btnDisabledStatus}></Renter>
                    </div>
                    <div className="mt-3 text-center text-white w-25 bg-bluefuchsia py-1 bor-rad-02 boxShadow-4bpx text-uppercase">Finalised Supplier's</div>
                    <div>
                        {
                            this.props.supplierData.finalized.length === 0 ?
                                <div>
                                    <DefaultCard md={12}>No Finalised Suppliers are Available to Display</DefaultCard>
                                </div> :
                                this.props.supplierData.finalized.map((prop, key) => {
                                    return (
                                        <FinalizedSupplier data={prop} key={key} btnDisabled={this.state.btnDisabledStatus}></FinalizedSupplier>
                                    )
                                })
                        }
                    </div>
                    <div className="text-center text-white w-25 bg-bluefuchsia py-1 bor-rad-02 boxShadow-4bpx text-uppercase">Shortlisted Supplier's</div>
                    <div className="mb-5 pb-5">
                        {
                            this.props.supplierData.shortlisted.length === 0 ?
                                <DefaultCard md={12}>No Shortlisted Suppliers are Available to Display</DefaultCard> :
                                this.props.supplierData.shortlisted.map((prop, key) => {
                                    return (
                                        <ShortListedSupplier data={prop} key={key} finalize={this.props.statusChanger.bind(this)} btnDisabled={this.state.btnDisabledStatus}></ShortListedSupplier>
                                    )
                                })
                        }
                    </div>
                </Container>

                <Modal show={this.state.isModalShowing} onHide={() => this.modalHandler(false)} size="xl">
                    <Modal.Header closeButton className={`text-white ${randomHeaderColorGenerator()}`}>
                        <Modal.Title id="contained-modal-title-md">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddFieldsPro leadUuid={this.props.formData.lead_uuid} leadDetUuid={this.props.formData.leadDet_uuid}></AddFieldsPro>
                    </Modal.Body>
                </Modal>

                {
                    this.state.isSweetAlertShowing ?
                        <SweetAlert
                            warning
                            title="Are You Sure ?"
                            onConfirm={this.closeSweetAlert}
                            onCancel={this.closeSweetAlert}
                            timeout={5000}
                            customButtons={
                                <React.Fragment>
                                    <Button variant="danger" className="w-30 m-2" size="sm" onClick={this.closeSweetAlert}>Close</Button>
                                    {
                                        this.state.btnTitle === 'Reject' ?
                                            <Button variant="primary" className="w-30 m-2" size="sm" onClick={() => { this.props.statusChanger(this.props.formData.leadDet_id, this.state.propsCommandText, 'NEW', this.props.formData.equipmentName); this.closeSweetAlert() }}>{this.state.btnTitle}</Button>
                                            :
                                            <Button variant="primary" className="w-30 m-2" size="sm" onClick={() => { this.props.moveToProjects(this.state.userUuid, this.props.formData.lead_id, this.props.formData.leadDet_id, this.props.formData.equipmentName); this.closeSweetAlert() }}>{this.state.btnTitle}</Button>
                                    }
                                </React.Fragment>
                            }
                        >
                            Please Click {this.state.btnTitle} Button to {this.state.btnTitle} the Lead
                        </SweetAlert>
                        : null
                }
            </React.Fragment >
        )
    }
}
export default AddViewTwo;
