import React, { Component } from 'react';
import { Row, Col, Button, Container, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Renter from '../Renter/Renter';
import FinalizedSupplier from '../Supplier/FinalizedSupplier';
import AddFields2 from '../FormFields/AddFields2';
import ShortListedSupplier from '../Supplier/ShortListedSupplier';
import { DefaultCard } from '../DefaultCard/DefaultCard.jsx';
class AddViewTwo extends Component {
    constructor(props) {
        super(props)
        // console.log('AddViewTwo',this.props);
        let token = localStorage.getItem("tokenId");
        this.state = {
            isModalShowing: false,
            token: token,
        }
    }
    openModalHandler = () => {
        this.setState({ "isModalShowing": true })
    }
    closeModalHandler = () => {
        this.setState({ "isModalShowing": false })
    }
    testChanger = (e, a, b, c, d) => {
        // console.log('name', e.currentTarget.dataset.id, a, b, c, d);
    }
    render () {
        return (
            <React.Fragment>
                <Container className="mt-5">
                    <Row className="mb-4">
                        <Col md={4}>
                            <h3 className="m-0">{this.props.formData.equipmentName}</h3>
                        </Col>
                        <Col md={1} className="my-auto">
                            <i className="fab fa-gg-circle text-center font-size-20 hovertext-bluefuchisa cursor-pointer" onClick={this.openModalHandler}></i>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Link to={`/business/leads/lead/active/premium`}>
                                <Button variant="primary" size="sm" block>Suppliers List</Button>
                            </Link>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="danger" size="sm" block name="DELETED" onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'DELETED', 'ACTIVE')}>Reject</Button>
                        </Col>
                        <Col md={3} className="my-auto">
                            <Link to='/business/new'>
                                <Button variant="secondary" size="sm" block disabled>Move to Projects</Button>
                            </Link>
                        </Col>
                    </Row>

                    <div className="renterName">RENTER</div>
                    <div className="my-3">
                        <Renter RenterApproved="#" QuotationLink="#" WorkOrderLink="#" editFunction={this.openModalHandler} formData={this.props.formData}></Renter>
                    </div>

                    <div className="renterName mt-3">FINALIZED SUPPLIER</div>
                    <div>
                        {
                            this.props.supplierData.finalized.length === 0 ?
                                <div>
                                    <DefaultCard md={12}>No Finalized Suppliers are Available to Display</DefaultCard>
                                </div> :
                                this.props.supplierData.finalized.map((prop, key) => {
                                    return (
                                        <FinalizedSupplier data={prop} key={key} testChanger={this.testChanger.bind(this)}></FinalizedSupplier>
                                    )
                                })
                        }
                    </div>

                    <div className="renterName mt-3">SHORTLISTED SUPPLIER</div>
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
