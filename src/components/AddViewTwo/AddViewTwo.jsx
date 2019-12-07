import React, { Component } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Renter from '../Renter/Renter';
import Supplier from '../Supplier/Supplier';
import AddViewModal from './AddViewModal';
class AddViewTwo extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={4}><h4>Single Drum Roller</h4></Col>
                        <Col lg={1}><AddViewModal /></Col>
                        <Col lg={2}>
                            <Link to={`/business/leads/lead/active/eqsupplier/25411b26-1738-11ea-8889-040118b51101`}>
                                <Button variant="outline-primary" size="sm" block>Suppliers List</Button>
                            </Link>
                        </Col>
                        <Col lg={2}><Button variant="outline-danger" size="sm" block><i className="fas fa-ban mr-2"></i>Reject</Button></Col>
                        <Col lg={3}>
                            <Link to='/business/new'>
                                <Button variant="outline-success" size="sm" block><i className="fas fa-arrow-circle-right mr-2"></i>Move to Projects</Button>
                            </Link>
                        </Col>
                    </Row>
                    <div className="renterName mt-5">RENTER</div>
                    <Renter ApprovalPrice="4,16,00,000" RenterApproved="#" QuotationLink="#" WorkOrderLink="#"></Renter>
                    <div className="renterName mt-5">FINALISED SUPPLIER</div>
                    <Supplier></Supplier>
                    <div className="renterName mt-5">SHORTLISTED SUPPLIER</div>
                    <Supplier></Supplier>
                </Container>
            </React.Fragment>
        )
    }
}
export default AddViewTwo;
