import React, { Component } from 'react'
import { makeRequestBid } from '../../views/Business/actions';
import { randomHeaderColorGenerator } from '../../commonFunctions/randomColorGenerator';
import { Container, Col, Row, Button, Card, Modal, ButtonGroup, InputGroup } from 'react-bootstrap';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { IoMdPerson, IoMdMailOpen, IoMdMenu } from "react-icons/io";
import { Redirect } from 'react-router-dom';
import { MdTextsms } from 'react-icons/md';
import { MdPhone } from "react-icons/md";
import '../../assets/css/form.css';
import { DefaultCard } from '../DefaultCard/DefaultCard';
import AddFieldsPro from '../FormFields/AddFieldsPro';
import { toast } from 'react-toastify';
import { toastNotification } from '../../commonFunctions/toastAlert';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert';

class AddViewThree extends Component {
    constructor(props) {
        super(props)
        // console.log('Add View Three Passed Props', this.props);
        let token = localStorage.getItem("tokenId"),
            userUuid = localStorage.getItem("uuid");
        this.state = {
            token: token,
            userUuid: userUuid,
            response: this.props.supplierData,
            categoryNames: this.props.categoryNames,
            selectedCategory: this.props.selectedCategory,
            dataToRender: this.props.dataToRender,
            dummyDataHolder: this.props.dataToRender,
            checkedProjects: [],
            requestBidsCount: 0,
            checked: true,
            redirect: false,
            isModalShowing: false,
            redirectPath: '',
            checkBoxData: [],
            chosenCategory: 0
        }
        this.searchDataHandler = this.searchDataHandler.bind(this)
    }
    openModalHandler = () => { this.setState({ "isModalShowing": true }) }
    closeModalHandler = () => { this.setState({ "isModalShowing": false }) }
    searchDataHandler (e) {
        let currentList = [];
        let displayedLeads, searchQuery;
        if (e.target.value !== "") {
            currentList = this.state.dataToRender;
            searchQuery = e.target.value.toLowerCase();
            displayedLeads = currentList.filter(item => {
                let searchValue = item.name.toLowerCase();
                return searchValue.indexOf(searchQuery) !== -1;
            })
            this.setState({ dataToRender: displayedLeads })
        }
        else {
            this.setState({ dataToRender: this.state.dummyDataHolder })
        }
    }

    componentWillReceiveProps (newProps) {
        this.setState({
            response: newProps.supplierData,
            categoryNames: newProps.categoryNames,
            selectedCategory: newProps.selectedCategory,
            dataToRender: newProps.dataToRender,
            dummyDataHolder: newProps.dataToRender,
            redirect: false,
            isModalShowing: false,
            redirectPath: '',
            checkedProjects: [],
            chosenCategory: 0,
            requestBidsCount: 0,
            isSweetAlertShowing: false,
            btnTitle: '',
            propsCommandText: ''
        })
    }

    pageRedirectFunction = () => {
        this.setState({
            redirect: true,
            redirectPath: 'leaduuid'
        });
    }

    openSweetAlert = (btnTitleValue, propsCommandTextValue) => {
        this.setState({
            isSweetAlertShowing: true,
            btnTitle: btnTitleValue,
            propsCommandText: propsCommandTextValue
        });
    }

    closeSweetAlert = () => {
        this.setState({ isSweetAlertShowing: false });
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
    supplierCategoryChangeHandler = (categoryName, chosenKey) => {
        this.setState({ chosenCategory: chosenKey, dataToRender: this.state.response[categoryName] })
    }
    letsMakeaRequestBid = async () => {
        if (this.state.checkedProjects.length === 0) {
            toastNotification('Please Select At Least one Supplier', toast.POSITION.BOTTOM_RIGHT, 'text-danger');
        }
        else {
            let intermediateData = this.state.checkedProjects.map((supplier) => {
                return {
                    "leadDet_leadId": this.props.formData.leadDet_leadId.toString(),
                    "leadDet_companyUuid": this.props.formData.leadDet_companyUuid,
                    "leadDet_equipmentType": supplier.equipmentType.toString(),
                    "leadDet_createdBy": supplier.supplierUuid
                };
            })
            let data = {
                "bidInfo": [...intermediateData]
            }
            let urlPayload = this.props.leadUuid + '/' + this.props.leadDetUuid;
            let response = await makeRequestBid(urlPayload, data, this.state.token);
            if (response) {
                toastNotification('Suppliers are Successfully Shortlisted', toast.POSITION.BOTTOM_RIGHT, 'text-success');
                this.pageRedirectFunction();
            }
        }
    }

    checkBoxHandler = (keyCoin, supplierUuid, Uuid, equipmentType) => {
        let intermediateResult = this.state.checkedProjects.filter((provider) => {
            return provider.key !== keyCoin
        })
        if (intermediateResult.length < this.state.checkedProjects.length) {
            this.setState({ checkedProjects: [...intermediateResult] })
            this.setState({ requestBidsCount: this.state.checkedProjects.length - 1 })
        }
        else {
            this.setState({ checkedProjects: [...this.state.checkedProjects, { key: keyCoin, supplierUuid: supplierUuid, Uuid: Uuid, equipmentType: equipmentType }] })
            this.setState({ requestBidsCount: this.state.checkedProjects.length + 1 })
        }
    }


    render () {
        return (
            <React.Fragment>
                {this.renderRedirect()}
                <Container className="mt-5 px-0" fluid>
                    <Row>
                        <Col md={6} className="my-auto"><h3 className="my-auto">{this.props.formData.equipmentName}</h3></Col>
                        <Col md={6} className="pr-0 my-auto">
                            <ButtonGroup size="sm" className="float-right my-auto mr-2">
                                <i className="fab fa-gg-circle text-center hovertext-bluefuchisa cursor-pointer font-size-20 mr-3" onClick={this.openModalHandler}></i>
                                {/* <Button variant="danger" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'REJECTED', 'ACTIVE', this.props.formData.equipmentName)}>Reject</Button> */}
                                {/* <Button variant="info" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.props.moveToProjects(this.state.userUuid, this.props.formData.lead_id, this.props.formData.leadDet_id, this.props.formData.equipmentName)}>Move to Projects</Button> */}
                                <Button variant="danger" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.openSweetAlert('Reject', 'REJECTED')}>Reject</Button>
                                <Button variant="info" className="mx-1 px-3 bor-rad-03" size="sm" onClick={() => this.openSweetAlert('Move', 'MOVED')}>Move to Projects</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} className="my-4 bg-lightgray mx-auto">
                            <h2 className="py-4 m-0"><FaRegArrowAltCircleLeft className="mr-5 cursor-pointer hovertext-bluefuchisa" onClick={this.pageRedirectFunction} />Suppliers List</h2>
                        </Col>
                    </Row>
                    <Row className="mb-1">
                        <Col md={5} className="text-left d-flex">
                            {
                                this.state.categoryNames.map((prop, key) => {
                                    return (
                                        <div className={`text-capitalize my-auto text-dark mr-3 hovertext-bluefuchisa-border hovertext-bluefuchisa cursor-pointer ${this.state.chosenCategory === key ? "border-bottom-bluefuchisa text-bluefuchsia" : null}`} key={key} onClick={() => this.supplierCategoryChangeHandler(prop, key)}>
                                            {prop}
                                        </div>
                                    )
                                })
                            }
                        </Col>
                        <Col md={3}>
                            <input type="text" className="form-control" placeholder="Search Here" onChange={this.searchDataHandler}></input>
                        </Col>
                        <Col md={4}>
                            <ButtonGroup size="sm" className="float-right my-auto">
                                <Button variant="primary" className="mr-1 bor-rad-03 px-3" onClick={this.letsMakeaRequestBid}>Request Bids <span className="badge badge-pill badge-light bor-rad-03 ml-1 text-primary">{this.state.requestBidsCount}</span></Button>
                                <Button variant="success" className="ml-1 bor-rad-03 px-3" onClick={() => { toastNotification('This Feature is Under Development', toast.POSITION.BOTTOM_RIGHT, 'text-primary') }}><MdTextsms className="mr-1" />SMS</Button>
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
                                                    <Col md={1} className="d-flex align-items-center">
                                                        {/* <Col md={1} className="mrgin_to_checks"> */}
                                                        {/* <span>
                                                            <label className="check1">
                                                                <input type="checkbox" value={prop.uuid} data-id={prop.equipmentType} onChange={() => this.checkBoxHandler(key, prop.supplier_uuid, prop.uuid, prop.equipmentType)} />
                                                                <span className="checkmark2"></span>
                                                            </label>
                                                        </span> */}
                                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" className="mx-auto text-center bor-rad-0" value={prop.uuid} data-id={prop.equipmentType} onChange={() => this.checkBoxHandler(key, prop.supplier_uuid, prop.uuid, prop.equipmentType)} />
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
                                                                        <div className="w-100 bg-primary bor-rad-02">
                                                                            <div className="font-size-18 text-white mbn-5">{prop.year}</div>
                                                                            <small className="d-block mt-0 text-white bg-bluefuchsia">Model</small>
                                                                        </div>
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
                    <Modal.Header closeButton className={`text-white ${randomHeaderColorGenerator()}`}>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <AddFieldsPro leadUuid={this.props.formData.lead_uuid} leadDetUuid={this.props.formData.leadDet_uuid}></AddFieldsPro>
                    </Modal.Body>
                </Modal>
                {
                    this.state.isSweetAlertShowing ?
                        <SweetAlert
                            warning
                            title="Are You Sure ?"
                            onConfirm={this.closeSweetAlert}
                            onCancel={this.closeSweetAlert}
                            timeout={5000}
                            customButtons={
                                <React.Fragment>
                                    <Button variant="danger" className="w-30 m-2" size="sm" onClick={this.closeSweetAlert}>Close</Button>
                                    {
                                        this.state.btnTitle === 'Reject' ?
                                            <Button variant="primary" className="w-30 m-2" size="sm" onClick={() => { this.props.statusChanger(this.props.formData.leadDet_id, this.state.propsCommandText, 'ACTIVE', this.props.formData.equipmentName); this.closeSweetAlert() }}>{this.state.btnTitle}</Button>
                                            :
                                            <Button variant="primary" className="w-30 m-2" size="sm" onClick={() => { this.props.moveToProjects(this.state.userUuid, this.props.formData.lead_id, this.props.formData.leadDet_id, this.props.formData.equipmentName); this.closeSweetAlert() }}>{this.state.btnTitle}</Button>
                                    }
                                </React.Fragment>
                            }
                        >
                            Please Click {this.state.btnTitle} Button to {this.state.btnTitle} the Lead
                        </SweetAlert>
                        : null
                }
            </React.Fragment>
        )
    }

}
export default AddViewThree;
