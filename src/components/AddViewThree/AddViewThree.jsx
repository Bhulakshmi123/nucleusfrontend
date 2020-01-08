import React, { Component } from 'react'
import { makeRequestBid } from '../../views/Business/actions';
import { Container, Col, Row, Button, InputGroup, Card, Modal, ButtonGroup } from 'react-bootstrap';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { IoMdPerson, IoMdMailOpen, IoMdMenu } from "react-icons/io";
import { NavLink, Redirect } from 'react-router-dom';
import { MdTextsms } from 'react-icons/md';
import { MdPhone } from "react-icons/md";
import { DefaultCard } from '../DefaultCard/DefaultCard';
import AddFieldsPro from '../FormFields/AddFieldsPro';
class AddViewThree extends Component {
    constructor(props) {
        super(props)
        // console.log('Add v3', this.props);
        let token = localStorage.getItem("tokenId");
        let userUuid = localStorage.getItem("uuid");
        this.state = {
            token: token,
            userUuid: userUuid,
            response: this.props.supplierData,
            categoryNames: this.props.categoryNames,
            selectedCategory: this.props.selectedCategory,
            dataToRender: this.props.dataToRender,
            checkedProjects: [],
            checked: true,
            redirect: false,
            isModalShowing: false,
            redirectPath: '',
            checkBoxData: []
        }
    }
    componentDidMount() {
        this.state.dataToRender.map((checky, index) => {
            this.state.checkBoxData.push({ ...checky, 'key': index, 'isChecked': false })
        })
        // console.log('checkBoxData', this.state.checkBoxData)
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            response: newProps.supplierData,
            categoryNames: newProps.categoryNames,
            selectedCategory: newProps.selectedCategory,
            dataToRender: newProps.dataToRender,
            checkedProjects: [],
            checked: true,
            redirect: false,
            isModalShowing: false,
            redirectPath: '',
            checkBoxData: []
        })
    }

    test = () => {
        this.setState({ redirect: true, redirectPath: 'leaduuid' })
    }
    openModalHandler = () => {
        this.setState({ "isModalShowing": true });
    }
    closeModalHandler = () => {
        this.setState({ "isModalShowing": false })
    }
    renderRedirect = () => {
        if (this.state.redirect && this.state.redirectPath === 'active') {
            return (<Redirect to="/business/leads/active"></Redirect>)
        }
        else {
            if (this.state.redirect && this.state.redirectPath === 'leaduuid') {
                this.props.funFunction()
                return (<Redirect to={`/business/leads/lead/active/${this.props.formData.lead_uuid}`}></Redirect>)
            }
        }
    }
    letsMakeaRequestBid = async () => {
        let data = {
            "bidInfo": [
                {
                    "leadDet_leadId": this.props.formData.leadDet_leadId.toString(),
                    "leadDet_companyUuid": this.props.formData.leadDet_companyUuid,
                    "leadDet_equipmentType": this.props.formData.leadDet_equipmentType.toString(),
                    "leadDet_createdBy": this.props.formData.leadDet_createdBy
                }
            ]
        }
        let urlPayload = this.props.leadUuid + '/' + this.props.leadDetUuid;
        let response = await makeRequestBid(urlPayload, data, this.state.token);
        if (response) {
            // console.log(response);
            this.test();
        }
    }
    handleCheck = (e) => {
        this.setState({ checked: !this.state.checked });
        if (this.state.checkedProjects[this.state.checkedProjects.length - 1] === e.target.value) { }
        else { this.setState({ checkedProjects: [...this.state.checkedProjects, e.target.value] }); }
        // console.log(this.state.checkedProjects)
    }
    render() {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Container className="mt-5 pl-0" fluid>
                    <Row>
                        <Col md={6} className="my-auto"><h3 className="my-auto">{this.props.formData.equipmentName}</h3></Col>
                        <Col md={6} className="pr-0 my-auto">
                            <ButtonGroup size="sm" className="float-right my-auto">
                                <i className="fab fa-gg-circle text-center hovertext-bluefuchisa cursor-pointer font-size-20 mr-3" onClick={this.openModalHandler}></i>
                                <Button variant="danger" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'DELETED', 'ACTIVE')}>Reject</Button>
                                <Button variant="info" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.props.moveToProjects(this.state.userUuid, this.props.formData.lead_id, this.props.formData.leadDet_id)}>Move to Projects</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="my-4 bg-lightgray mx-auto">
                            <h2 className="py-4 m-0"><FaRegArrowAltCircleLeft className="mr-5 cursor-pointer hovertext-bluefuchisa" onClick={this.test} />Suppliers List</h2>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md={7} className="text-left">
                            {
                                this.state.categoryNames.map((prop, key) => {
                                    return (<NavLink key={key} activeClassName="linkStateActive" className="mx-3 font-size-10 hovertext-bluefuchisa-border text-dark text-capitalize" onClick={
                                        () => {
                                            this.setState({ 'selectedCategory': prop });
                                            this.setState({ 'dataToRender': this.state.response[prop] })
                                        }}
                                        to={`/business/leads/lead/active/${prop}`} >{prop}</NavLink>)
                                })
                            }
                        </Col>
                        <Col md={5}>
                            <ButtonGroup size="sm" className="float-right my-auto">
                                <Button variant="primary" className="mr-1 bor-rad-03 px-3" onClick={this.letsMakeaRequestBid}>Request Bids</Button>
                                <Button variant="success" className="ml-1 bor-rad-03 px-3"><MdTextsms className="mr-1" />SMS</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="mb-5 pb-5">
                            {
                                this.state.dataToRender.length === 0 ?
                                    <DefaultCard md={10} className="my-3">{`No ${this.state.selectedCategory} Suppliers are Available`}</DefaultCard> :
                                    this.state.dataToRender.map((prop, key) => {
                                        return (
                                            <Container fluid className="w-95" key={key}>
                                                <Row className="mt-2">
                                                    <Col md={1} className="my-auto">
                                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" className="mx-auto text-center bor-rad-0" value={prop.uuid} data-id={prop.equipmentType} onChange={this.handleCheck} />
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
                                                                    <div>
                                                                        <div className="font-size-18 text-white bg-primary bor-rad-05">{prop.year}</div>
                                                                        <small className="d-block mt-1">Model</small>
                                                                    </div>
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
                        <AddFieldsPro leadUuid={this.props.formData.lead_uuid} leadDetUuid={this.props.formData.leadDet_uuid}></AddFieldsPro>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }

}
export default AddViewThree;
