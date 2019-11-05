import React, { Component } from 'react';
import { Grid, Col, Row, Button } from 'react-bootstrap';
import './EqSuppliers.css';
class EqSuppliers extends Component {
    constructor(props) {
        super(props)
        let url = window.location.href.split('/')
        this.state = {
            eqId: url[url.length - 1],
            supId: url[url.length - 2]
        };
    }
    render() {
        return (
            <React.Fragment>
                <Grid className="fluidContainer">
                    <Row>
                        <Col md={3} className="Sidebar">
                            <div className="pd-5 Sidebar1">
                                <h5 className="viewHeadingTitle">Leads</h5>
                                <h3 className="viewHeading">Hyderabad Metro Rail Corporation [{this.state.supId}]</h3>
                                <Button className="btnLeft" bsSize="small"><i className="fas fa-edit nbSpan"></i>Edit</Button>
                            </div>
                        </Col>
                        <Col md={9}>
                            <Grid className="fluidContainer2">
                                <Row className="mt-5">
                                    <Col md={6} className="ActiveHeadingTitle">
                                        <h3><b>Single Lane Tipper Crane</b></h3>
                                    </Col>
                                    <Col md={1}><i className="fab fa-gg-circle icon-fs"></i></Col>
                                    <Col md={2}>
                                        <Button className="btn-danger-overRide" bsStyle="danger" block><i class="fas fa-ban nbSpan"></i>Reject</Button>
                                    </Col>
                                    <Col md={3}>
                                        <Button className="btn-dark-overRide" bsStyle="dark" block>Move To Projects</Button>
                                    </Col>
                                </Row>
                            </Grid>
                            <Grid className="fluidContainer">
                                <Row className="Middlebar mt-2">
                                    <Col md={1} className="MiddlebarInner">
                                        <h3>
                                            <i className="fas fa-arrow-left"></i>
                                        </h3>
                                    </Col>
                                    <Col md={11} className="MiddlebarInner">
                                        <h3>
                                            <b>Suppliers List</b>
                                        </h3>
                                    </Col>
                                </Row>
                            </Grid>
                        </Col>
                    </Row>
                </Grid>
            </React.Fragment>
        )
    }
}

export default EqSuppliers
