import React, { Component } from 'react';
import { Row, Col, Button, Container, Modal } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Renter from '../Renter/Renter';
import Supplier from '../Supplier/Supplier';
import AddFields2 from '../FormFields/AddFields2';
import { getLeadEquipmentDetails, changeLeadStatus } from '../../views/Business/actions';
class AddViewTwo extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            "isApiCallSuccessfull": false,
            "isModalShowing": false,
            "token": token,
            "redirect": false,
            "leadDetId": 0,
            "formDetails": []
        }
    }
    setRedirect = () => { this.setState({ redirect: true }) }
    openModalHandler = () => this.setState({ "isModalShowing": true })
    closeModalHandler = () => this.setState({ "isModalShowing": false })
    renderRedirect = () => {
        if (this.state.redirect) {
            return (<Redirect to="/business/leads/new"></Redirect>)
        }
    }
    componentDidMount() {
        this.getLeadEquipmentDetails();
    }
    getLeadEquipmentDetails = async () => {
        let response = await getLeadEquipmentDetails(this.props.uid + '/' + this.props.leaduid, this.state.token);
        if (response) {
            this.setState({ "formDetails": response.data[0], "leadDetId": response.data[0].leadDet_id })
            this.setState({ "isApiCallSuccessfull": true })
        }
    }
    statusChanger = (e) => {
        let data = { "leadDetId": this.state.leadDetId.toString(), "newStatus": e.target.name }
        changeLeadStatus(data, this.state.token).then((res) => {
            if (data.newStatus === "CLOSED") { this.setRedirect() }
            else { alert('Something Went Wrong Please try After Sometime') }
        });
    }
    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Container className="mt-5">
                    <Row>
                        <Col lg={4}><h4>{this.props.equipment}</h4></Col>
                        <Col lg={1}>
                            <i className="fab fa-gg-circle text-center  text-dark font-size-20" onClick={this.openModalHandler}></i>
                        </Col>
                        <Col lg={2}>
                            <Link to={`/business/leads/lead/active/${this.props.uid}/premium`}>
                                <Button variant="primary" size="sm" block>Suppliers List</Button>
                            </Link>
                        </Col>
                        <Col lg={2}><Button variant="danger" size="sm" block name="CLOSED" onClick={this.statusChanger}><i className="fas fa-ban mr-2"></i>Reject</Button></Col>
                        <Col lg={3}>
                            <Link to='/business/new'>
                                <Button variant="secondary" size="sm" block disabled><i className="fas fa-arrow-circle-right mr-2" ></i>Move to Projects</Button>
                            </Link>
                        </Col>
                    </Row>
                    <div className="renterName mt-5">RENTER</div>
                    <Renter ApprovalPrice="4,16,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#" editFunction={this.openModalHandler}></Renter>
                    <div className="renterName mt-5">FINALISED SUPPLIER</div>
                    {this.state.isApiCallSuccessfull === true ? <Supplier details={this.state.formDetails}></Supplier> : null}
                    <div className="renterName mt-5">SHORTLISTED SUPPLIER</div>
                    {/* <Supplier></Supplier> */}
                </Container>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        {this.state.isApiCallSuccessfull === true ? <AddFields2 formData={this.state.formDetails}></AddFields2> : null}
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
export default AddViewTwo;
