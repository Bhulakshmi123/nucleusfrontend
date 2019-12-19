import React, { Component } from 'react';
import AddFeilds3 from '../../components/FormFields/AddFeilds3.jsx';
import { Row, Col, Button, Container, Card, Modal } from 'react-bootstrap';
class Supplier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "isModalShowing": false
        }
    }
    openModalHandler = () => this.setState({ "isModalShowing": true })
    closeModalHandler = () => this.setState({ "isModalShowing": false })
    render() {
        return (
            <React.Fragment>
                <Card className="mx-auto p-3">
                    <Container>
                        <Row>
                            <Col md={3} className="text-left my-auto">
                                <div className="text-primary font-size-08 text-capitalize">{this.props.formData.leadDet_companyType}</div>
                                <div className="font-size-09 text-dark">{this.props.formData.equipmentName}</div>
                            </Col>
                            <Col md={9} className=" my-auto">
                                <Row>
                                    <Col md={1} className="text-center my-auto">
                                        <div><i className="fas fa-ellipsis-v font-size-20"></i></div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center text-dark font-size-22"></i></div>
                                        <div className="font-size-07">Finalised</div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center  text-dark font-size-22"></i></div>
                                        <div className="font-size-07">Inspection</div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center  text-dark font-size-22"></i></div>
                                        <div className="font-size-07">Feild Visit</div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto">
                                        <div><i className="fab fa-gg-circle text-center  text-dark font-size-22"></i></div>
                                        <div className="font-size-07">Agreement</div>
                                    </Col>
                                    <Col md={3} className="text-center my-auto">
                                        <div className="lastIcon"><i className="fab fa-gg-circle text-center  text-dark font-size-22"></i></div>
                                        <div className="font-size-07">Signed Agreement</div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row className="">
                            <Col md={2} className="my-auto">
                                <div className="text-primary font-size-07">Bid Price</div>
                                <div className="text-dark font-size-08">Rs. {this.props.formData.leadDet_price}</div>
                            </Col>
                            <Col md={1} className="my-auto">
                                <div className="text-primary font-size-07">Battha</div>
                                <div className="text-dark font-size-08">{this.props.formData.leadDet_operatorBatha}</div>
                            </Col>
                            <Col md={1} className="my-auto">
                                <div className="text-primary font-size-07">Year</div>
                                <div className="text-dark font-size-08">{this.props.formData.leadDet_year}</div>
                            </Col>
                            <Col md={3} className="my-auto">
                                <div className="text-primary font-size-07">Location</div>
                                <div className="text-dark font-size-08 text-capitalize">{this.props.formData.leadDet_location}</div>
                            </Col>
                            <Col md={3} className="my-auto">
                                <div className="text-primary font-size-07">Supplier Remarks</div>
                                <div className="text-dark font-size-08 text-capitalize">{this.props.formData.leadDet_remarks}</div>
                            </Col>
                            <Col md={2} className="my-auto">
                                <Button variant="primary" size="sm" block onClick={this.openModalHandler}><i className="fas fa-edit mr-2"></i>Edit</Button>
                            </Col>
                        </Row>
                    </Container>
                </Card>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="md">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFeilds3></AddFeilds3>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

export default Supplier
