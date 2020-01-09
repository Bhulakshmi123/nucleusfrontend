import React, { Component } from 'react';
import { Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { FaRegCheckCircle } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import AddFieldsPro from '../../components/FormFields/AddFieldsPro';
class ShortListedSupplier extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        // console.log('ShortListed Supplier',this.props)
        this.state = {
            token: token,
            leadUuid: '',
            isModalShowing: false,
            isShortlistedShowing: false,
            leadId: '',
            leadDetUuid: '',
        }
    }
    isFinalizedOpen = (bidId, editBid) => {
        this.setState({ "isEditBidShowing": true });
        this.setState({
            leadUuid: bidId,
            leadDetUuid: editBid
        })
    }
    isFinalizedClose = () => {
        this.setState({
            "isEditBidShowing": false
        })
    }
    render () {
        return (
            <React.Fragment>
                <Card className="mx-auto p-3 my-3">
                    <small>
                        <Row>
                            <Col md={3} className="text-left my-auto">
                                <div className="text-dark font-size-10 text-capitalize">{this.props.data.companyName}
                                    <small className="text-danger"> [{this.props.data.equipmentName}]</small>
                                </div>
                                <div className="font-size-08 text-dark">Priority : <span className="text-primary text-capitalize">{this.props.data.leadDet_priority}</span></div>
                            </Col>
                            <Col md={9} className=" my-auto">
                                <Row>
                                    <Col md={1} className="text-center my-auto">
                                        <div><AiOutlineMenu className="font-size-16 text-dark" /></div>
                                    </Col>
                                    <Col md={2} className="text-center my-auto hovertext-brickRed cursor-pointer">
                                        <div><FaRegCheckCircle className="text-center font-size-22" onClick={() => this.props.finalize(this.props.data.leadDet_id, 'FINALIZED', 'ACTIVE')} /></div>
                                        <div className="font-size-07">Finalize</div>
                                    </Col>
                                    <Col md={9} className="my-auto text-center">
                                        <div>lead_uuid</div>
                                        <span className="px-4 py-2 bor-rad-05 font-size-10 text-primary text-underline">{this.props.data.lead_uuid}</span>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col md={2}>
                                <div className="text-primary font-size-08">Bid Price</div>
                                <div className="text-dark font-size-08 fontGilroyMedium">Rs. {this.props.data.leadDet_price === null ? '-NA-' : this.props.data.leadDet_price} </div>
                            </Col>
                            <Col md={1}>
                                <div className="text-primary font-size-08">Battha</div>
                                <div className="text-dark font-size-08 fontGilroyMedium">{this.props.data.leadDet_operatorBatha === null ? '-NA-' : this.props.data.leadDet_operatorBatha}</div>
                            </Col>
                            <Col md={1}>
                                <div className="text-primary font-size-08">Year</div>
                                <div className="text-dark font-size-08 fontGilroyMedium">{this.props.data.leadDet_year === null ? '-NA-' : this.props.data.leadDet_year}</div>
                            </Col>
                            <Col md={3}>
                                <div className="text-primary font-size-08">Location</div>
                                <div className="text-dark font-size-08 fontGilroyMedium text-capitalize">{this.props.data.leadDet_location === null ? '-NA-' : this.props.data.leadDet_location}</div>
                            </Col>
                            <Col md={3}>
                                <div className="text-primary font-size-08">Supplier Remarks</div>
                                <div className="text-dark font-size-08 fontGilroyMedium text-capitalize">{this.props.data.leadDet_remarks === null ? '-NA-' : this.props.data.leadDet_remarks}</div>
                            </Col>
                            <Col md={2} className="my-auto">
                                <Button variant="primary" size="sm" block onClick={() => this.isFinalizedOpen(this.props.data.lead_uuid, this.props.data.leadDet_uuid)}><i className="fas fa-edit mr-2"></i>Edit Bid</Button>
                            </Col>
                        </Row>
                    </small>
                </Card>
                <Modal show={this.state.isEditBidShowing} onHide={this.isFinalizedClose} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg" className="my-auto">
                            <h6 className="mb-0 text-white">Lead Details [{this.state.leadUuid}]</h6>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFieldsPro leadUuid={this.state.leadUuid} leadDetUuid={this.state.leadDetUuid}></AddFieldsPro>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}
export default ShortListedSupplier