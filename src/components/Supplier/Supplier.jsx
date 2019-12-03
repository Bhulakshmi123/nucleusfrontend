import React, { Component } from 'react'
import './Supplier.css'
import { Row, Col, Button, Container, Card } from 'react-bootstrap'
class Supplier extends Component {
    render() {
        return (
            <React.Fragment>
                <Card className="mx-auto p-3">
                    <Container>
                        <Row>
                            <Col md={3} className="text-left my-auto">
                                <div className="text-primary">Lorem Epsum Doloris</div>
                                <div className="font-size-11 text-dark">98482-58987</div>
                            </Col>

                            <Col md={9} className=" my-auto">
                                <Row>
                                    <Col md={1} className="text-center my-auto">
                                        <div><i className="fas fa-ellipsis-v font-size-20"></i></div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center text-dark font-size-25"></i></div>
                                        <div className="font-size-08">Finalised</div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center  text-dark font-size-25"></i></div>
                                        <div className="font-size-08">Inspection</div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center  text-dark font-size-25"></i></div>
                                        <div className="font-size-08">Feild Visit</div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center  text-dark font-size-25"></i></div>
                                        <div className="font-size-08">Agreement</div>
                                    </Col>
                                    <Col md={3} className="text-center my-auto">
                                        <div className="lastIcon"><i className="fab fa-gg-circle text-center  text-dark font-size-25"></i></div>
                                        <div className="font-size-08">Signed Agreement</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="">
                            <Col md={2} className="my-auto">
                                <div className="text-primary">Bid Price</div>
                                <div className="text-dark">Rs. 1,16,00,000</div>
                            </Col>
                            <Col md={1} className="my-auto">
                                <div className="text-primary">Battha</div>
                                <div className="text-dark">Rs. 200</div>
                            </Col>
                            <Col md={1} className="my-auto">
                                <div className="text-primary">Year</div>
                                <div className="text-dark">2012</div>
                            </Col>
                            <Col md={3} className="my-auto">
                                <div className="text-primary">Location</div>
                                <div className="text-dark">Hyderabad, Telangana, India 500055</div>
                            </Col>
                            <Col md={3} className="my-auto">
                                <div className="text-primary">Supplier Remarks</div>
                                <div className="text-dark">Equipment Working Properly</div>
                            </Col>
                            <Col md={2} className="my-auto">
                                <Button variant="primary" size="sm" block><i className="fas fa-edit mr-2"></i>Edit</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
            </React.Fragment>
        )
    }
}

export default Supplier
