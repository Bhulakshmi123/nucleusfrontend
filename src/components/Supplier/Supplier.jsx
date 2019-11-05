import React, { Component } from 'react'
import './Supplier.css'
import { Row, Col, Button } from 'react-bootstrap'
class Supplier extends Component {
    render() {
        return (
            <div className="card cardPadding">
                <Row className="padCard">
                    <Col lg={3} className="text-left">
                        <div className="supplierClientName text-primary">Lorem Epsum Doloris</div>
                        <div className="supplierClientPhone">98482-58987</div>
                    </Col>

                    <Col lg={9}>
                        <Row>
                            <Col lg={1} className="text-center">
                                <div><i className="fas fa-ellipsis-v icon-fs2"></i></div>
                            </Col>
                            <Col lg={2} className="text-center">
                                <div><i className="fab fa-gg-circle icon-fs"></i></div>
                                <div className="fontSize">Finalised</div>
                            </Col>
                            <Col lg={2} className="text-center">
                                <div><i className="fab fa-gg-circle text-center icon-fs"></i></div>
                                <div className="fontSize">Inspection</div>
                            </Col>
                            <Col lg={2} className="text-center">
                                <div><i className="fab fa-gg-circle text-center icon-fs"></i></div>
                                <div className="fontSize">Feild Visit</div>
                            </Col>
                            <Col lg={2} className="text-center">
                                <div><i className="fab fa-gg-circle text-center icon-fs"></i></div>
                                <div className="fontSize">Agreement</div>
                            </Col>
                            <Col lg={3} className="text-center">
                                <div className="lastIcon"><i className="fab fa-gg-circle text-center icon-fs"></i></div>
                                <div className="fontSize">Signed Agreement</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row className="padCard">
                    <Col lg={2}>
                        <div className="subCardHeading text-primary">Bid Price</div>
                        <div className="subCardContext">Rs. 1,16,00,000</div>
                    </Col>
                    <Col lg={1}>
                        <div className="subCardHeading text-primary">Battha</div>
                        <div className="subCardContext">Rs. 200</div>
                    </Col>
                    <Col lg={1}>
                        <div className="subCardHeading text-primary">Year</div>
                        <div className="subCardContext">2012</div>
                    </Col>
                    <Col lg={3}>
                        <div className="subCardHeading text-primary">Location</div>
                        <div className="subCardContext">Hyderabad, Telangana, India 500055</div>
                    </Col>
                    <Col lg={3}>
                        <div className="subCardHeading text-primary">Supplier Remarks</div>
                        <div className="subCardContext">Equipment Working Properly</div>
                    </Col>
                    <Col lg={2}>
                        <Button bsStyle="primary" className="btn-primary-overRide btn-right-overRide"><i className="fas fa-edit nbSpan"></i>Edit</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Supplier
