import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import Renter from '../Renter/Renter';
import Supplier from '../Supplier/Supplier';
class AddViewTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="activeContainer">
                    <div>
                        <Row className="ActiveHeading">
                            <Col lg={4} className="ActiveHeadingTitle">[{this.props.selectedEquipment}]</Col>
                            <Col lg={1}><i className="fab fa-gg-circle icon-fs"></i></Col>
                            <Col lg={2}><Button bsStyle="primary" className="btn-primary-overRide btn-modified" block>Suppliers List</Button></Col>
                            <Col lg={2}><Button bsStyle="danger" className=" btn-danger-overRide btn-modified" block><i className="fas fa-ban nbSpan"></i>Reject</Button></Col>
                            <Col lg={3}><Button bsStyle="secondary" className="btn-info-overRide" block>Move to Projects</Button></Col>
                        </Row>
                    </div>
                    <div className="renterName">RENTER</div>
                    <Renter ApprovalPrice="4,16,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#"></Renter>
                    <div className="renterName">FINALISED SUPPLIER</div>
                    <Supplier></Supplier>
                    <div className="renterName">SHORTLISTED SUPPLIER</div>
                    <Supplier></Supplier>
                </div>
            </React.Fragment>
        )
    }
}
export default AddViewTwo;
