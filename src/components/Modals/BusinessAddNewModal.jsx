import React, { Component } from 'react';
import { Button, Col, Form, Table } from 'react-bootstrap';
import SelectInput from '../FormFields/SelectInput';
import SelectInputSearch from '../FormFields/SelectInputSearch';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
import { getSupplierDetails, createNewLead, computeStatesDropDownInForm } from '../../views/Business/actions'
import * as moment from 'moment';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import _ from 'lodash';
// import { thisExpression } from '@babel/types';
var validator = require('validator');
class BusinessAddNewModal extends Component {
    constructor(props) {
        super(props);
        let token = localStorage.getItem("tokenId"),
            username = localStorage.getItem("username"),
            supplierUuid = localStorage.getItem("supplierUuid"),
            leadType = window.location.href.split('/');
        this.state = {
            lead_contactNumber: null,
            lead_date: null,
            lead_contactPerson: null,
            leadType: leadType[leadType.length - 1],
            supplierPhoneNo: '',
            supplierDetails: '',
            token: token,
            username: username,
            supplierUuid: supplierUuid,
            activeLeadNo: null,
            isEquipmentInfo: false,
            equipmentKey: null,
            leadForm: {
                lead_date: moment().format('YYYY-MM-DD'),
                equipmentLead: []
            },
            equipmentForm: {
                lead_startDate: moment().format('YYYY-MM-DD')
            },
            optionsForm1: [
                { value: '1', label: 'Chocolate', name: 'lead_priority' },
                { value: '2', label: 'Strawberry', name: 'lead_priority' },
                { value: '3', label: 'Vanilla', name: 'lead_priority' },
            ],
            leadSourceDropDown: [
                { value: 'iceCream', label: 'IceCream', name: 'lead_source' },
                { value: 'pizza', label: 'Pizza', name: 'lead_source' },
                { value: 'burger', label: 'Burger', name: 'lead_source' },
            ],
            equipmentTypeDropDownList: [
                { value: '1', label: 'Chocolate', name: 'lead_equipmentType' },
                { value: 'strawberry', label: 'Strawberry', name: 'lead_equipmentType' },
                { value: '3', label: 'Vanilla', name: 'lead_equipmentType' },
            ],
            userMobileError: false,
            renterNameError: false,
            errorMessageMobileNo: '',
            errorMessageRenterName: '',
            startDate: new Date(),
            startDateEquip: new Date(),
            equipmentFormCheck: 0,
            isOpenFormDropDown: false,
            yearDropDown: [],
            statesDropDown: [],
            districtsDropDown: [],
            requiredFieldInEquipForm: ['lead_equipmentType', 'lead_startDate']
        }
        this.handleChange = this.handleChange.bind(this)
        this.onChange = this.onChange.bind(this)
    }
    componentWillMount() {
        this.computeYearDropDownInForm();
        this.computeStatesDropDownInForm();
    }

    getSupplierDetails = async (phoneNumber) => {
        let data = { "phoneNumber": phoneNumber.toString() }
        this.setState({ supplierPhoneNo: phoneNumber.toString() })
        let response = await getSupplierDetails(data, this.state.token);
        if (response) {
            if (response.data.length > 0) {
                this.setState({ supplierDetails: response.data[0] })
            }
            else {
                this.setState({ supplierDetails: { "name": null } })
                console.log('Get Details of Supplier', this.state.supplierDetails)
            }
        }
    }

    createNewLead = async (e) => {
        e.preventDefault();
        console.log('Dori', this.state.supplierPhoneNo, this.state.leadForm.lead_date, this.state.lead_contactPerson)
        if (this.state.supplierPhoneNo === null || this.state.leadForm.lead_date === null || this.state.lead_contactPerson === null) {
            this.setState({
                'errorMessage_submit': '',
                // 'errorMessage_submit' : ( (this.state.supplierPhoneNo === '' || this.state.leadForm.lead_date === '' || this.state.lead_contactPerson === '' ) ? <span></span> : 'Please Fill The Required Fields')
            })
        } else if(this.state.supplierPhoneNo === 0 || this.state.leadForm.lead_date === 0 || this.state.lead_contactPerson === 0 ){
            this.setState({
                'errorMessage_submit': 'Please Fill The Required Fields',
                // 'errorMessage_submit' : ( (this.state.supplierPhoneNo === '' || this.state.leadForm.lead_date === '' || this.state.lead_contactPerson === '' ) ? <span></span> : 'Please Fill The Required Fields')
            })
        }
        else {
            // console.log('state', this.state.leadForm, this.state);
            let data = {
                "lead_companyUuid": this.state.supplierUuid,
                "lead_date": this.state.leadForm.lead_date,
                "lead_contactPerson": 'Walt Disney',
                "lead_contactNumber": this.state.supplierPhoneNo,
                "lead_createdBy": this.state.supplierUuid,
                "lead_details": [
                    ...this.state.leadForm.equipmentLead
                ]
            }
            console.log('data', data);
            // this.handleChange{}
            let response = await createNewLead(data, this.state.token);
            if (response) {
                this.successNotification(response);
                this.setState({ isEquipmentInfo: false 
                })
                this.props.modalHider();
                if (this.state.leadType === 'new') {
                    this.props.getLeadsOnSubmit('new');
                }
            }
            else {
                this.failedNotification();
                this.setState({ isEquipmentInfo: false });
                
            }
        }
    }
    successNotification = (response) => {
        toast(response.message + ' Id: [' + response.data[0] + ']', {
            position: toast.POSITION.TOP_RIGHT,
            className: 'text-center bg-dark text-success fontGilroyBold bor-rad-05'
        });
    };
    failedNotification = () => {
        toast("Failed to Create a New Lead", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'text-center bg-dark text-danger fontGilroyBold bor-rad-05'
        });
    };
    // getLeadInformation = async ()
    handleChange(e) {
        if (e.target.type === 'text') {
            if (validator.isMobilePhone(e.target.value) && e.target.value.length === 10) {
                this.getSupplierDetails(e.target.value)
                this.setState({ userMobileError: false, errorMessageMobileNo: '' });
            }
            else if (e.target.value.length === 0) {
                this.setState({ userMobileError: false, errorMessageMobileNo: 'Invalid Phone Number' });
            }
            else {
                this.setState({ userMobileError: true, errorMessageMobileNo: 'Invalid Phone Number' });
            }
        }
        // console.log(e.target.value)
        // if (e.target.value.length === 10) {
        //     this.getSupplierDetails(e.target.value)
        // }
        // else {
        //     console.log("Wrong Number")
        // }
    }
    inputChangeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.type === 'text') {
            if (validator.isLength(e.target.value) && e.target.value.length === '') {
                this.setState({ renterNameError: false, errorMessageRenterName: '' })
            } else if (e.target.value.length === 0) {
                console.log("")
                this.setState({ renterNameError: true, errorMessageRenterName: 'Invalid Renter Name' })
            }
            else {
                this.setState({ renterNameError: true, errorMessageRenterName: '' })
            }
        } else {
            let leadForm = this.state.leadForm;
            leadForm = {
                ...leadForm,
                [e.target.name]: e.target.value
            }
            this.setState({
                leadForm: leadForm
            }, () => { console.log(this.state.leadForm) });
        }
    }

    computeYearDropDownInForm = () => {
        let currentYear = moment().format('YYYY');
        let yearDropDown = this.state.yearDropDown;
        for (let index = currentYear; index >= 1970; index--) {
            yearDropDown.push({ value: index, label: index, name: 'lead_year' });
        }
        this.setState({ yearDropDown });
    }

    computeStatesDropDownInForm = async (e) => {
        let response = await computeStatesDropDownInForm(this.state.token);
        let statesDropDown = response.data;
        this.setState({ statesDropDown });
    }

    inputChangeHandlerForSelect = (e) => {
        let leadForm = this.state.leadForm;
        let placeHolder = e.name + '_name';
        leadForm = {
            ...leadForm,
            [e.name]: e.value,
            [placeHolder]: e.label
        }
        this.setState({
            leadForm: leadForm,
            isOpenFormDropDown: false
        }, () => { console.log(this.state.leadForm) });
    }

    equipInputChangeHandlerSelect = (e) => {
        let equipmentForm = this.state.equipmentForm;
        let placeHolder = e.name + '_name';
        let error = e.name + '_error';
        let equipmentFormCheck = this.state.equipmentFormCheck;
        if (this.state.requiredFieldInEquipForm.indexOf(e.name) >= 0 && (e.value === null || e.value === '')) {
            equipmentForm = {
                ...equipmentForm,
                [error]: "Please Select This Input",
            };
            equipmentFormCheck++;
        }
        if (equipmentForm.hasOwnProperty(e.name + '_error') || this.state.requiredFieldInEquipForm.indexOf(e.name) < 0) {
            equipmentFormCheck--;
            delete equipmentForm[error];
        }
        equipmentForm = {
            ...equipmentForm,
            [e.name]: e.value,
            [placeHolder]: e.label
        }
        this.setState({
            equipmentForm: equipmentForm
        });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    inputChangeHandlerDate = (date) => {
        let leadForm = this.state.leadForm;
        leadForm = {
            ...leadForm,
            lead_date: moment(date).format('YYYY-MM-DD')
        }
        this.setState({
            leadForm: leadForm,
            startDate: date
        }, () => { console.log(this.state.leadForm) });
    }

    openInputHandler = () => {
        this.setState({
            isEquipmentInfo: true,
            equipmentForm: {
                lead_startDate: moment().format('YYYY-MM-DD')
            },
            startDateEquip: new Date(),
            equipmentKey: null
        }, () => {
            // console.log(this.state.equipmentForm);
        });
    }

    closeEquipmentForm = () => {
        this.setState({
            isEquipmentInfo: false,
            equipmentForm: {
                lead_startDate: moment().format('YYYY-MM-DD')
            },
            startDateEquip: new Date(),
            equipmentKey: null
        });
    }

    equipInputChangeHandlerDate = (date) => {
        let equipmentForm = this.state.equipmentForm;
        equipmentForm = {
            ...equipmentForm,
            lead_startDate: moment(date).format('YYYY-MM-DD')
        }
        this.setState({
            equipmentForm: equipmentForm,
            startDateEquip: date
        }, () => { console.log(this.state.equipmentForm) });
    }

    equipInputChangeHandler = (e) => {
        let equipmentForm = this.state.equipmentForm;
        let equipmentFormCheck = this.state.equipmentFormCheck;
        let error = e.target.name + '_error';
        if ((e.target.name === 'lead_workingCount' || e.target.name === 'lead_workingTotalCount' || e.target.name === 'operation_d_m' || e.target.name === 'lead_quantity' || e.target.name === 'lead_workingHoursPerDay' || e.target.name === 'lead_operatorBatha') && e.target.value <= 0 && e.target.value !== null && e.target.value !== '') {
            equipmentForm = {
                ...equipmentForm,
                [error]: "Please check this Input",
                [e.target.name]: e.target.value
            };
            equipmentFormCheck++;
        } else {
            if (this.state.requiredFieldInEquipForm.indexOf(e.target.name) >= 0 && (e.target.value === null || e.target.value === '')) {
                equipmentForm = {
                    ...equipmentForm,
                    [error]: "Please check this Input",
                };
                equipmentFormCheck++;
            }
            if (equipmentForm.hasOwnProperty(e.target.name + '_error') && this.state.requiredFieldInEquipForm.indexOf(e.target.name) < 0) {
                equipmentFormCheck--;
                delete equipmentForm[error];
            }
            equipmentForm = {
                ...equipmentForm,
                [e.target.name]: e.target.value
            }
        }
        this.setState({
            equipmentForm: equipmentForm,
            equipmentFormCheck: equipmentFormCheck
        }, () => { console.log(this.state.equipmentForm) });
    }
    appendEquipFormToLeadForm = () => {
        let errorCheck = 0;
        let equipmentForm = this.state.equipmentForm;
        this.state.requiredFieldInEquipForm.forEach((value) => {
            if (!equipmentForm.hasOwnProperty(value)) {
                console.log(value + "== " + equipmentForm[value]);
                errorCheck++;
                let error = value + '_error'
                equipmentForm = {
                    ...equipmentForm,
                    [error]: "Please Select This Input",
                };
            }
        });
        this.setState({ equipmentForm });
        if (this.state.equipmentFormCheck !== 0) {
            //form validation and reset the equipmentFormCheck  to 0
        }
        if (errorCheck === 0) { // add the equipmentFormCheck variable here for complete form checking.
            if (this.state.equipmentKey != null) {
                let leadForm = this.state.leadForm;
                let equipmentLead = leadForm.equipmentLead;
                equipmentLead[this.state.equipmentKey] = this.state.equipmentForm;
                leadForm.equipmentLead = equipmentLead;
                this.setState({
                    leadForm,
                    equipmentKey: null
                }, () => { console.log(this.state.leadForm); this.closeEquipmentForm() });
            } else {
                let leadForm = this.state.leadForm;
                leadForm.equipmentLead.push(this.state.equipmentForm);
                this.setState({
                    leadForm
                }, () => { console.log(this.state.leadForm); this.closeEquipmentForm() });
            }
        }
    }

    editEquipmentForm = (key) => {
        let equipmentLead = this.state.leadForm.equipmentLead;
        this.setState({
            equipmentForm: equipmentLead[key],
            equipmentKey: key,
            isEquipmentInfo: true
        }, () => { console.log(this.state.equipmentKey) })
    }

    deleteEquipmentForm = (key) => {
        if (this.state.equipmentKey != null) {
            alert("Cannot Delete the record Now");
        } else {
            let equipmentLead = this.state.leadForm.equipmentLead;
            if (key > -1) {
                equipmentLead.splice(key, 1);
            }
            let leadForm = this.state.leadForm;
            leadForm.equipmentLead = equipmentLead;
            this.setState({ leadForm });
        }
    }
    render() {
        return (
            <React.Fragment>
                <Form name="displayComponent" onSubmit={this.onSubmit} >
                    <Form.Row>
                        <Col md={3}>
                            <Form.Group controlId="formGroupPhno">
                                <Form.Label className="font_stle">Phone No.*</Form.Label>
                                <Form.Control type="text" name="lead_contactNumber" placeholder="Phone No." onChange={this.handleChange} />
                                {this.state.userMobileError ? <div className="text-danger font-size-10">{this.state.errorMessageMobileNo}</div> : <span></span>}
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <CalenderInput name="lead_date" label="Lead Date*" placeholder="Lead Date" onChange={this.inputChangeHandlerDate} startDate={this.state.startDate} minDate={new Date()} />
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formGroupRent">
                                <Form.Label className="font_stle">Renter Name*</Form.Label>
                                <Form.Control type="text" name="lead_contactPerson" label="Renter Name*" placeholder="Renter Name" defaultValue={this.state.supplierDetails.name} onChange={this.inputChangeHandler} />
                                {this.state.renterNameError ? <div className="text-danger font-size-10">{this.state.errorMessageRenterName}</div> : <span></span>}
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formGroupRenterEmail">
                                <Form.Label className="font_stle">Renter Email</Form.Label>
                                <Form.Control type="text" name="renter_emil" defaultValue={this.state.supplierDetails.emailId} onChange={this.inputChangeHandler} label="Renter Email" placeholder="Renter Email" />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Row className="mt-3">
                        <Col md={3} className="form-modal">
                            <label>Lead Executive</label>
                            <div className="my-auto py-1 px-0 text-primary text-uppercase">{this.state.username}</div>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formGroupaltPhno">
                                <Form.Label className="font_stle">Alternate Phone no.</Form.Label>
                                <Form.Control type="text" name="altPhoneNo" label="Alternate Phone no." placeholder="Alternate Phone no." onChange={this.inputChangeHandler} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formGroupCom_name">
                                <Form.Label className="font_stle">Company Name</Form.Label>
                                <Form.Control type="text" name="com_name" label="Company Name" placeholder="Company Name" defaultValue={this.state.supplierDetails.companyName} onChange={this.inputChangeHandler} />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId="formGroupDesig">
                                <Form.Label className="font_stle">Designation</Form.Label>
                                <Form.Control type="text" name="designation" label="Designation" placeholder="Designation" onChange={this.inputChangeHandler} />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Row className="mt-3">
                        {/* <Col md={3}>
                            <SelectInput name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder={this.state.leadForm.lead_priority ? this.state.leadForm.lead_priority_name : "Lead Priority"} onChange={this.inputChangeHandlerForSelect} options={this.state.optionsForm1}></SelectInput>
                        </Col> */}
                        {/* <Col md={3}>
                            <SelectInput name="lead_source" cStyle="widthone" label="Lead Source" placeholder={this.state.leadForm.lead_source ? this.state.leadForm.lead_source_name : "Lead Source"} onChange={this.inputChangeHandlerForSelect} options={this.state.optionsForm2}></SelectInput>
                        </Col> */}
                        {/* <Col md={3}>
                            <SelectInputSearch name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority" value={this.state.leadForm.lead_priority_name} onChange={this.inputChangeHandlerForSelect} isOpenD={this.state.isOpenFormDropDown} options={this.state.optionsForm1}></SelectInputSearch>
                        </Col> */}
                        <Col md={3}>
                            <SelectInputSearch name="lead_source" cStyle="widthone" label="Lead Source" placeholder="Lead Priority" value={this.state.leadForm.lead_source_name} onChange={this.inputChangeHandlerForSelect} isOpenD={this.state.isOpenFormDropDown} options={this.state.leadSourceDropDown}></SelectInputSearch>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col className="my-3">
                            <Button className={`float-right px-4 ${this.state.isEquipmentInfo ? "disable_add" : "primary"}`} size="sm" onClick={this.openInputHandler}>Add Equipment</Button>
                        </Col>
                    </Form.Row>

                    <Form.Row>
                        <Col md={12}>
                            <Table hover className="text-center">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Equipment Name</th>
                                        <th>Make</th>
                                        <th>Model</th>
                                        <th>Year</th>
                                        <th>Edit</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.leadForm.equipmentLead.map((equipment, i) => {
                                        return (
                                            <tr key={i}>
                                                <td className="align-middle">{i + 1}</td>
                                                <td className="align-middle">{equipment.lead_equipmentType_name}</td>
                                                <td className="align-middle">{equipment.lead_make}</td>
                                                <td className="align-middle">{equipment.lead_modal}</td>
                                                <td className="align-middle">{equipment.lead_year}</td>
                                                <td><Button variant="info" size="sm" block onClick={() => this.editEquipmentForm(i)}>Edit</Button></td>
                                                <td><Button variant="danger" size="sm" block onClick={() => this.deleteEquipmentForm(i)}>Remove</Button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Form.Row>

                    {
                        this.state.isEquipmentInfo ?
                            <AddFields
                                equipmentForm={this.state.equipmentForm}
                                closeEquipmentForm={this.closeEquipmentForm}
                                startDate={this.state.startDateEquip}
                                equipInputChangeHandlerDate={this.equipInputChangeHandlerDate}
                                equipInputChangeHandler={this.equipInputChangeHandler}
                                equipInputChangeHandlerSelect={this.equipInputChangeHandlerSelect}
                                addEquipForm={this.appendEquipFormToLeadForm}
                                equipmentTypeDropDownList={this.state.equipmentTypeDropDownList}
                                yearDropDown={this.state.yearDropDown}
                                statesDropDown={this.state.statesDropDown}
                                token={this.state.token}
                            />
                            : null
                    }
                    <Button type="submit" onClick={this.createNewLead} variant="success" size="sm" className="px-4 float-right" >Submit Lead</Button>
                    <div className="text-danger font-size-10"> {this.state.errorMessage_submit}</div>
                </Form>
            </React.Fragment>
        )
    }
}
export default BusinessAddNewModal;