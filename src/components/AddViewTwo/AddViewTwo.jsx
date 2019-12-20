import React, { Component } from 'react';
import { Row, Col, Button, Container, Modal } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Renter from '../Renter/Renter';
import FinalisedSupplier from '../Supplier/FinalisedSupplier';
import AddFields2 from '../FormFields/AddFields2';
import ShortListedSupplier from '../Supplier/ShortListedSupplier';
import { DefaultCard } from '../DefaultCard/DefaultCard.jsx';
import { changeLeadStatus, changeServiceStatus } from '../../views/Business/actions';
class AddViewTwo extends Component {
    constructor(props) {
        super(props)
        console.log('AddViewTwo', this.props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            "isModalShowing": false,
            "token": token,
            "redirect": false,
        }
    }
    setRedirect = () => {
        this.setState({ redirect: true })
    }
    openModalHandler = () => {
        this.setState({ "isModalShowing": true })
    }
    closeModalHandler = () => {
        this.setState({ "isModalShowing": false })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return (<Redirect to="/business/leads/active"></Redirect>)
        }
    }
    statusChanger = (e) => {
        let data = { "leadDetId": this.props.formData.leadDet_id.toString(), "newStatus": e.target.name }
        changeLeadStatus(data, this.state.token).then((res) => {
            if (data.newStatus === "DELETED") { //! Change Later to CLOSED
                this.setRedirect()
            }
            else {
                alert('Something Went Wrong Please try After Sometime')
            }
        });
    }
    serviceChanger = (leadId, leadDetId, leadDetUuid, newStatus, createdBy, key) => {
        let data = {
            "leadId": leadId.toString(),
            "leadDetId": leadDetId.toString(),
            "leadDetUuid": leadDetUuid,
            "newStatus": newStatus,
            "createdBy": createdBy
        }
        console.log(data, key)
        changeServiceStatus(data, this.state.token).then((res) => {
            console.log(res);
        })
    }
    testChanger = (a, b, c, d, e) => {
        console.log('name', a, b, c, d, e);
    }
    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Container className="mt-5">
                    <Row>
                        <Col md={4} className="font-size-20">
                            <p>{this.props.formData.equipmentName}</p>
                        </Col>
                        <Col md={1}>
                            <i className="fab fa-gg-circle text-center  text-dark font-size-20" onClick={this.openModalHandler}></i>
                        </Col>
                        <Col md={2}>
                            <Link to={`/business/leads/lead/active/premium`}>
                                <Button variant="primary" size="sm" block>Suppliers List</Button>
                            </Link>
                        </Col>
                        <Col md={2}>
                            <Button variant="danger" size="sm" block name="DELETED" onClick={this.statusChanger}><i className="fas fa-ban mr-2"></i>Reject</Button>
                        </Col>
                        <Col md={3}>
                            <Link to='/business/new'>
                                <Button variant="secondary" size="sm" block disabled><i className="fas fa-arrow-circle-right mr-2" ></i>Move to Projects</Button>
                            </Link>
                        </Col>
                    </Row>
                    <div className="renterName mt-5">RENTER</div>
                    <Renter ApprovalPrice="4,16,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#" editFunction={this.openModalHandler}></Renter>
                    <div className="renterName mt-5">FINALISED SUPPLIER</div>
                    <div>
                        {
                            this.props.supplierData.finalized.length === 0 ?
                                <div>
                                    <DefaultCard md={12}>No Finalised Suppliers are Availbale to Display</DefaultCard>
                                    <FinalisedSupplier formData={this.props.formData} testChanger={this.testChanger.bind(this)}></FinalisedSupplier>
                                </div> :
                                <FinalisedSupplier formData={this.props.formData}></FinalisedSupplier>
                        }
                    </div>
                    <div className="renterName mt-5">SHORTLISTED SUPPLIER</div>
                    <div className="mb-5 pb-5">
                        {
                            this.props.supplierData.shortlisted.length === 0 ?
                                <DefaultCard md={12}>No Shortlisted Suppliers are Availbale to Display</DefaultCard> :
                                this.props.supplierData.shortlisted.map((prop, key) => {
                                    return (
                                        <ShortListedSupplier data={prop} key={key} finalise={() => this.serviceChanger(prop.lead_id, prop.leadDet_id, prop.leadDet_uuid, 'FINALIZED', prop.leadDet_createdBy, key)}></ShortListedSupplier>
                                    )
                                })
                        }
                    </div>
                </Container>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-md">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddFields2 formData={this.props.formData}></AddFields2>
                    </Modal.Body>
                </Modal>
            </React.Fragment >
        )
    }
}
export default AddViewTwo;
