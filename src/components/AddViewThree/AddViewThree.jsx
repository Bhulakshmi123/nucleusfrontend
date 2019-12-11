
import React, { Component } from 'react'
import { changeLeadStatus } from '../../views/Business/actions';
import { Container, Col, Row, Button, Badge, InputGroup, Card, Modal } from 'react-bootstrap';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft, FaRegStopCircle } from 'react-icons/fa';
import { IoMdPerson, IoMdMailOpen, IoMdMenu } from "react-icons/io";
import { NavLink, Redirect } from 'react-router-dom';
import { MdTextsms } from 'react-icons/md';
import { MdPhone } from "react-icons/md";
import AddFields2 from '../FormFields/AddFields2';
class AddViewThree extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            isApiCallSuccessfull: false,
            token: token,
            response: this.props.supplierData,
            categoryNames: this.props.categoryNames,
            selectedCategory: this.props.selectedCategory,
            dataToRender: this.props.dataToRender,
            checkedProjects: [],
            checked: true,
            redirect: false,
            leadDetId: 0,
            isModalShowing: false
        }
        console.log('thisState', this.state)
    }
    openModalHandler = () => {
        this.setState({ "isModalShowing": true });
    }
    closeModalHandler = () => {
        this.setState({ "isModalShowing": false })
    }
    setRedirect = () => {
        this.setState({ redirect: true })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return (<Redirect to="/business/leads/new"></Redirect>)
        }
    }
    statusChanger = (e) => {
        let data = { "leadDetId": this.props.formData.leadDet_id.toString(), "newStatus": e.target.name };
        changeLeadStatus(data, this.state.token).then((res) => {
            if (data.newStatus === "CLOSED") {
                this.setRedirect()
            }
            else {
                alert('Something Went Wrong Please try After Sometime')
            }
        });
    }
    handleCheck = (e) => {
        this.setState({ checked: !this.state.checked });
        if (this.state.checkedProjects[this.state.checkedProjects.length - 1] === e.target.value) { }
        else { this.setState({ checkedProjects: [...this.state.checkedProjects, e.target.value] }); }
    }
    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Container className="mt-5 pl-0" fluid>
                    <Row>
                        <Col md={6} className="my-auto"><h3 className="my-auto">{this.props.formData.equipmentName}</h3></Col>
                        <Col md={1} className="my-auto">
                            <i className="fab fa-gg-circle text-center  text-dark font-size-20" onClick={this.openModalHandler}></i>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="danger" size="sm" block name="CLOSED" onClick={this.statusChanger}><FaRegStopCircle className="mr-1" />Reject</Button>
                        </Col>
                        <Col md={3} className="my-auto">
                            <Button variant="secondary" size="sm" block disabled><FaRegArrowAltCircleRight className="mr-1" />Move to Projects</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="my-4 bg-lightgray mx-auto">
                            <h2 className="py-4 m-0"><FaRegArrowAltCircleLeft className="mr-5" />Suppliers List</h2>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md={7} className="text-left">
                            {
                                this.state.categoryNames.map((prop, key) => {
                                    return (<NavLink key={key} activeClassName="linkStateActive" className="mx-3 font-size-10 linkStateHover text-capitalize" onClick={
                                        () => {
                                            this.setState({ 'selectedCategory': prop });
                                            this.setState({ 'dataToRender': this.state.response[prop] })
                                        }}
                                        to={`/business/leads/lead/active/${prop}`} >{prop}</NavLink>)
                                })
                            }
                        </Col>
                        <Col md={3} className="my-auto"><Button variant="primary" size="sm" block>Request Bids <Badge pill variant="primary">13</Badge></Button></Col>
                        <Col md={2} className="my-auto"><Button variant="info" size="sm" block><MdTextsms className="mr-1" />SMS</Button></Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            {
                                this.state.dataToRender.map((prop, key) => {
                                    return (
                                        <Container fluid className="w-95" key={key}>
                                            <Row className="mt-2">
                                                <Col md={1} className="my-auto">
                                                    <InputGroup.Checkbox aria-label="Checkbox for following text input" className="mx-auto text-center bor-rad-0" value={prop.uuid} onChange={this.handleCheck} />
                                                </Col>
                                                <Col md={11} className="pr-0">
                                                    <Card className="my-2 p-3">
                                                        <Row>
                                                            <Col md={3} className="my-auto">
                                                                <div className="font-size-10 text-capitalize"><IoMdPerson className="text-primary mr-1 font-size-12" />{prop.name}</div>
                                                                <div className="font-size-09"><MdPhone className="text-primary mr-2 text-center font-size-10" />{prop.phoneNumber}</div>
                                                            </Col>
                                                            <Col md={1} className="my-auto">
                                                                <div className="text-center"><IoMdMenu className="font-size-15 text-dark" /></div>
                                                            </Col>
                                                            <Col md={2} className="my-auto">
                                                                <div className="font-size-10 text-capitalize text-primary">{prop.accountCategory}</div>
                                                                <div className="">{prop.companyId}</div>
                                                            </Col>
                                                            <Col md={4} className="my-auto px-0">
                                                                <div className="font-size-10">{prop.companyName}</div>
                                                                <div className="font-size-09"><IoMdMailOpen className="text-primary mr-2 font-size-10" />{prop.emailId}</div>
                                                            </Col>
                                                            <Col md={2} className="my-auto text-center">
                                                                <div className="font-size-18 text-primary">{prop.year}</div>
                                                                <div className="w-100 text-center mtn-10">Year</div>
                                                            </Col>
                                                        </Row>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </Container>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Container>
                <Modal show={this.state.isModalShowing} onHide={this.closeModalHandler} size="xl">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFields2 formData={this.props.formData}></AddFields2>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }

}
export default AddViewThree;