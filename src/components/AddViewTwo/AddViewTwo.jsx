import React, { Component } from 'react';
import { Row, Col, Button, Container, Modal } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Renter from '../Renter/Renter';
import Supplier from '../Supplier/Supplier';
import AddFields2 from '../FormFields/AddFields2';
import { changeLeadStatus } from '../../views/Business/actions';
class AddViewTwo extends Component {
    constructor(props) {
        super(props)
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
            return (<Redirect to="/business/leads/new"></Redirect>)
        }
    }
    statusChanger = (e) => {
        let data = { "leadDetId": this.props.formData.leadDet_id.toString(), "newStatus": e.target.name }
        changeLeadStatus(data, this.state.token).then((res) => {
            if (data.newStatus === "CLOSED") {
                this.setRedirect()
            }
            else {
                alert('Something Went Wrong Please try After Sometime')
            }
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Container className="mt-5">
                    <Row>
                        <Col md={4}>
                            <h4>{this.props.formData.equipmentName}</h4>
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
                            <Button variant="danger" size="sm" block name="CLOSED" onClick={this.statusChanger}><i className="fas fa-ban mr-2"></i>Reject</Button>
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
                    <Supplier formData={this.props.formData}></Supplier>
                    <div className="renterName mt-5">SHORTLISTED SUPPLIER</div>
                    {/* <Supplier></Supplier> */}
                </Container>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-md">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddFields2 formData={this.props.formData}></AddFields2>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
export default AddViewTwo;
