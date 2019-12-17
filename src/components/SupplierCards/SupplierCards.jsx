import React, { Component } from 'react';
import { Container, Row, Col, Card, Button, InputGroup } from 'react-bootstrap';
import { IoMdPerson, IoMdMenu } from "react-icons/io";
import { MdPhone } from "react-icons/md";
import { FaMapMarkedAlt, FaGripLinesVertical, FaTruckMonster } from "react-icons/fa";
class SupplierCards extends Component {
    render(props) {
        return (
            <React.Fragment>
                <Container fluid className="w-95 mt-3">
                    <Row>
                        <Col md={1}>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" className="mx-auto text-center bor-rad-0" />
                        </Col>
                        <Col md={1} className="my-auto">Equipment</Col>
                        <Col md={1} className="my-auto">Location</Col>
                        <Col md={2} className="my-auto">Equipment Status</Col>
                    </Row>
                </Container>
                <Container fluid className="w-95">
                    <Row className="mt-2">
                        <Col md={1} className="my-auto">
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" className="mx-auto text-center bor-rad-0" />
                        </Col>
                        <Col md={11} className="pr-0">
                            <Card className="my-2 p-3">
                                <Row>
                                    <Col md={3} className="my-auto">
                                        <div className="font-size-10"><IoMdPerson className="text-primary mr-2 font-size-12" />{this.props.name}</div>
                                        <div className="font-size-9"><MdPhone className="text-primary mr-2" />{this.props.phoneNumber}</div>
                                    </Col>
                                    <Col md={1} className="my-auto">
                                        <div className="text-center"><IoMdMenu className="font-size-15 text-dark" /></div>
                                    </Col>
                                    <Col md={2} className="my-auto">
                                        <div className="font-size-10">UnMandded</div>
                                        <div className="">{this.props.companyId}</div>
                                    </Col>
                                    <Col md={4} className="my-auto">
                                        <div className="font-size-10"><FaMapMarkedAlt className="text-primary mr-2 font-size-12" />Hyderabad, Telangana</div>
                                        <div className=""><FaTruckMonster className="text-primary mr-2 font-size-10" />12 Equipments</div>
                                    </Col>
                                    <Col md={2} className="my-auto text-center">
                                        <div className="font-size-20 text-primary">21</div>
                                        <div className="w-100 text-center mtn-10">Equipments</div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}
export default SupplierCards;
