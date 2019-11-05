import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Renter from '../Renter/Renter';
import Supplier from '../Supplier/Supplier';
class AddViewTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="activeContainer">
                    <div>
                        <Row className="ActiveHeading">
                            <Col lg={4} className="ActiveHeadingTitle">[{this.props.supplierId}], [{this.props.selectedEquipment}]</Col>
                            <Col lg={1}><i className="fab fa-gg-circle icon-fs"></i></Col>
                            <Col lg={2}>
                                <Link to={`/business/eqsuppliers/${this.props.supplierId}/${this.props.selectedEquipment}`}>
                                    <Button bsStyle="primary" className="btn-primary-overRide" block>Suppliers List</Button>
                                </Link>
                            </Col>
                            <Col lg={2}><Button bsStyle="danger" className=" btn-danger-overRide" block><i className="fas fa-ban nbSpan"></i>Reject</Button></Col>
                            <Col lg={3}>
                                <Link to='/business/new'>
                                    <Button bsStyle="secondary" className="btn-dark-overRide" block><i class="fas fa-arrow-circle-right nbSpan"></i>Move to Projects</Button>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                    <div className="renterName mt-5">RENTER</div>
                    <Renter ApprovalPrice="4,16,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#"></Renter>
                    <div className="renterName mt-5">FINALISED SUPPLIER</div>
                    <Supplier></Supplier>
                    <div className="renterName mt-5">SHORTLISTED SUPPLIER</div>
                    <Supplier></Supplier>
                </div>
            </React.Fragment>
        )
    }
}
export default AddViewTwo;
