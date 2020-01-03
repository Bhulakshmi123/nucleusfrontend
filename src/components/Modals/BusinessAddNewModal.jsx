import React, { Component } from 'react';
import { Button, Col, Form, Table } from 'react-bootstrap';
import SelectInput from '../FormFields/SelectInput';
import SelectInputSearch from '../FormFields/SelectInputSearch';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
import * as moment from 'moment';
import _ from 'lodash';
// import { thisExpression } from '@babel/types';
// var validator = require('validator');
class BusinessAddNewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLeadNo: null,
            isEquipmentInfo: false,
            equipmentKey: null,
            leadForm: {
                date_cal: moment().format('DD/MM/YYYY'),
                equipmentLead: []
            },
            equipmentForm: {
                extd_start_dte: moment().format('DD/MM/YYYY')
            },
            optionsForm1: [
                { value: 'chocolate', label: 'Chocolate', name: 'lead_priority' },
                { value: 'strawberry', label: 'Strawberry', name: 'lead_priority' },
                { value: 'vanilla', label: 'Vanilla', name: 'lead_priority' },
            ],
            optionsForm2: [
                { value: 'icecream', label: 'Icecream', name: 'lead_source' },
                { value: 'pizza', label: 'Pizza', name: 'lead_source' },
                { value: 'burger', label: 'Burger', name: 'lead_source' },
            ],
            optionsForm3: [
                { value: 'chocolate', label: 'Chocolate', name: 'lead_priority' },
                { value: 'strawberry', label: 'Strawberry', name: 'lead_priority' },
                { value: 'vanilla', label: 'Vanilla', name: 'lead_priority' },
            ],
            optionsForm4: [
                { value: 'icecream', label: 'Icecream', name: 'lead_source' },
                { value: 'pizza', label: 'Pizza', name: 'lead_source' },
                { value: 'burger', label: 'Burger', name: 'lead_source' },
            ],
            optionsForm5: [
                { value: 'chocolate', label: 'Chocolate', name: 'lead_priority' },
                { value: 'strawberry', label: 'Strawberry', name: 'lead_priority' },
                { value: 'vanilla', label: 'Vanilla', name: 'lead_priority' },
            ],
            optionsForm6: [
                { value: 'icecream', label: 'Icecream', name: 'lead_source' },
                { value: 'pizza', label: 'Pizza', name: 'lead_source' },
                { value: 'burger', label: 'Burger', name: 'lead_source' },
            ],
            startDate: new Date(),
            startDateEquip: new Date(),
            isOpenFormDropDown: false
        }
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
        equipmentForm = {
            ...equipmentForm,
            [e.name]: e.value
        }
        this.setState({
            equipmentForm: equipmentForm
        });
    }

    inputChangeHandler = (e) => {
        let leadForm = this.state.leadForm;
        leadForm = {
            ...leadForm,
            [e.target.name]: e.target.value
        }
        this.setState({
            leadForm: leadForm
        });
    }

    inputChangeHandlerDate = (date) => {
        let leadForm = this.state.leadForm;
        leadForm = {
            ...leadForm,
            date_cal: moment(date).format('DD/MM/YYYY')
        }
        this.setState({
            leadForm: leadForm,
            startDate: date
        });
    }

    openInputHandler = () => {
        this.setState({
            isEquipmentInfo: true,
            equipmentForm: {
                extd_start_dte: moment().format('DD/MM/YYYY')
            },
            startDateEquip: new Date(),
            equipmentKey: null
        }, () => {
            console.log(this.state.equipmentForm);
        });
    }

    closeEquipmentForm = () => {
        this.setState({
            isEquipmentInfo: false,
            equipmentForm: {
                extd_start_dte: moment().format('DD/MM/YYYY')
            },
            startDateEquip: new Date(),
            equipmentKey: null
        });
    }

    equipInputChangeHandlerDate = (date) => {
        let equipmentForm = this.state.equipmentForm;
        equipmentForm = {
            ...equipmentForm,
            extd_start_dte: moment(date).format('DD/MM/YYYY')
        }
        this.setState({
            equipmentForm: equipmentForm,
            startDateEquip: date
        });
    }

    equipInputChangeHandler = (e) => {
        let equipmentForm = this.state.equipmentForm;
        equipmentForm = {
            ...equipmentForm,
            [e.target.name]: e.target.value
        }
        this.setState({
            equipmentForm: equipmentForm
        });
    }
    appendEquipFormToLeadForm = () => {
        console.log(this.state.equipmentKey);
        if (this.state.equipmentKey != null) {
            let leadForm = this.state.leadForm;
            let equipmentLead = leadForm.equipmentLead;
            equipmentLead[this.state.equipmentKey] = this.state.equipmentForm;
            leadForm.equipmentLead = equipmentLead;
            this.setState({
                leadForm,
                equipmentKey: null
            }, () => { console.log("Hello", this.closeEquipmentForm()) });
        } else {
            let leadForm = this.state.leadForm;
            leadForm.equipmentLead.push(this.state.equipmentForm);
            this.setState({
                leadForm
            }, () => { console.log("hi", this.closeEquipmentForm()) });
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
                        <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Phone No.*</Form.Label><Form.Control type="text" name="phone_no" placeholder="Phone No." onChange={this.inputChangeHandler} />
                            {/* <div className="error_msg">{this.state.errorMessage_email}</div> */}
                        </Form.Group></Col>
                        <Col md={3}><CalenderInput name="date_cal" label="Lead Date*" placeholder="Lead Date" onChange={this.inputChangeHandlerDate} startDate={this.state.startDate} minDate={new Date()} /></Col>
                        <Col md={3}><Form.Group controlId="formGroupRent"><Form.Label className="font_stle">Renter Name*</Form.Label><Form.Control type="text" name="renter_nm" label="Renter Name*" placeholder="Renter Name" onChange={this.inputChangeHandler} /></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Renter Email</Form.Label><Form.Control type="text" name="renter_emil" label="Renter Email" placeholder="Renter Email" onChange={this.inputChangeHandler} /></Form.Group></Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        <Col md={3} className="form-modal">
                            <label>Lead Executive</label>
                            <div className="my-auto py-1 px-0 text-primary text-uppercase">Albus Dumbledore </div>
                        </Col>
                        <Col md={3}><Form.Group controlId="formGroupaltPhno"><Form.Label className="font_stle">Alternate Phone no.</Form.Label><Form.Control type="text" name="altPhoneNo" label="Alternate Phone no." placeholder="Alternate Phone no." onChange={this.inputChangeHandler} /></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupCom_name"><Form.Label className="font_stle">Company Name</Form.Label><Form.Control type="text" name="com_name" label="Company Name" placeholder="Company Name" onChange={this.inputChangeHandler} /></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupDesig"><Form.Label className="font_stle">Designation</Form.Label><Form.Control type="text" name="designation" label="Designation" placeholder="Designation" onChange={this.inputChangeHandler} /></Form.Group></Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        {/* <Col md={3}><SelectInput name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder = {this.state.leadForm.lead_priority? this.state.leadForm.lead_priority_name : "Lead Priority"} onChange={this.inputChangeHandlerForSelect} options={this.state.optionsForm1}></SelectInput></Col>
                        <Col md={3}><SelectInput name="lead_source" cStyle="widthone" label="Lead Source" 
                        placeholder = {this.state.leadForm.lead_source? this.state.leadForm.lead_source_name : "Lead Source"} onChange={this.inputChangeHandlerForSelect} options={this.state.optionsForm2} /></Col> */}
                        <Col md={3}>
                            <label className="font_stle">Operator Allowance</label>
                            <Form.Group>
                                <Form.Control as="select">
                                    <option value={this.state.leadForm.selct_make1 || ''}>Yes</option>
                                    <option value={this.state.leadForm.selct_make1 || ''}>No</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={3}><SelectInputSearch name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority" value={this.state.leadForm.lead_priority_name} onChange={this.inputChangeHandlerForSelect} isOpen={this.state.isOpenFormDropDown} options={this.state.optionsForm1}></SelectInputSearch></Col>
                        <Col md={3}><SelectInputSearch name="lead_source" cStyle="widthone" label="Lead Source" placeholder="Lead Priority" value={this.state.leadForm.lead_source_name} onChange={this.inputChangeHandlerForSelect} isOpen={this.state.isOpenFormDropDown} options={this.state.optionsForm2}></SelectInputSearch></Col>
                    </Form.Row>
                    <Form.Row>
                        <Col className="my-3"><Button className="float-right" variant="primary" size="sm" onClick={this.openInputHandler}>Add Equipment</Button></Col>
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
                                                <td className="align-middle">{}</td>
                                                <td className="align-middle">{equipment.equip_type}</td>
                                                <td className="align-middle">{equipment.equip_modal}</td>
                                                <td className="align-middle"></td>
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
                            />
                            : null
                    }
                    <Button type="submit" onClick={this.leadInputHandler} variant="primary" size="sm" >Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}
export default BusinessAddNewModal;