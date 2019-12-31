import React, { Component } from 'react';
import { Button, Col, Form, Table } from 'react-bootstrap';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
// import { thisExpression } from '@babel/types';
// var validator = require('validator');
class BusinessAddNewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLeadNo: null,
            isEquipmentInfo: false,
            equipmentCount: 0,
            leadForm: {
                phone_no: '',
                date_cal: '',
                renter_nm: '',
                renter_emil: '',
                alt_phoneno: '',
                com_name: '',
                designation: '',
                lead_priority: '',
                equipmentLead: []
            },
            equipmentForm: {},
            multipleLead: []
        }
    }
    leadInputHandler = (e) => {
        let equipmentForm = this.state.equipmentForm;
        equipmentForm = {
            ...equipmentForm,
            [e.target.name]: e.target.value
        }
        this.setState({
            equipmentForm: equipmentForm
        });
    }
    inputChangeHandler = (e) => {
        let leadForm = this.state.leadForm;
        let equipmentLead = this.state.equipmentLead;
        leadForm = {
            ...equipmentLead,
            // ...leadForm,
            [e.target.name]: e.target.value
        }
        this.setState({
            leadForm: equipmentLead
        });
    }
    appendLeadEquipment = (e) => {
        if (this.state.equipmentKey == null) {
            let leadForm = this.state.leadForm;
            let equipmentForm = this.state.equipmentForm;
            leadForm.equipmentLead.push(equipmentForm);
            this.setState({
                leadForm: leadForm,
                isEquipmentInfo: false,
                equipmentForm: {}
            }, () => {
                console.log(leadForm);
            });
        } else {
            console.log(this.state.equipmentForm);
            let equipmentLead = this.state.leadForm.equipmentLead;
            equipmentLead[this.state.equipmentKey] = this.state.equipmentForm;
            let leadForm = this.state.leadForm;
            leadForm.equipmentLead = equipmentLead;
            this.setState({
                leadForm: leadForm,
                isEquipmentInfo: false,
            });
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let leadForm = {
            leadForm: this.state.leadForm,
            equipmentLead: this.state.equipmentLead
        }
        console.log("hi", leadForm);
    }

    openInputHandler = () => {
        this.setState({ isEquipmentInfo: true });
    }
    editEquipmentForm = (key) => {
        let equipmentLead = this.state.leadForm.equipmentLead;
        this.setState({
            isEquipmentInfo: true,
            equipmentForm: equipmentLead[key],
            equipmentKey: key
        })
    }
    render() {
        return (
            <React.Fragment>
                <Form name="displayComponent" onSubmit={this.onSubmit} >
                    <Form.Row>
                        <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Phone No.*</Form.Label><Form.Control type="text" name="phone_no"  placeholder="Phone No." onChange={this.inputChangeHandler} />
                            {/* <div className="error_msg">{this.state.errorMessage_email}</div> */}
                        </Form.Group></Col>
                        <Col md={3}><CalenderInput name="date_cal" label="Lead Date*" placeholder="Lead Date" onChange={this.inputChangeHandler} /></Col>
                        <Col md={3}><Form.Group controlId="formGroupRent"><Form.Label className="font_stle">Renter Name*</Form.Label><Form.Control type="text" name="renter_nm" label="Renter Name*" placeholder="Renter Name" onChange={this.inputChangeHandler} /></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Renter Email</Form.Label><Form.Control type="text" name="renter_emil" label="Renter Email" placeholder="Renter Email" onChange={this.inputChangeHandler} /></Form.Group></Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        <Col md={3} className="form-modal">
                            <label>Lead Executive</label>
                            <div className="my-auto py-1 px-0 text-primary text-uppercase">Albus Dumbledore </div>
                        </Col>
                        <Col md={3}><Form.Group controlId="formGroupaltPhno"><Form.Label className="font_stle">Alternate Phone no.</Form.Label><Form.Control type="text" name="alt_phoneno" label="Alternate Phone no." placeholder="Alternate Phone no." onChange={this.inputChangeHandler} /></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupCom_name"><Form.Label className="font_stle">Company Name</Form.Label><Form.Control type="text" name="com_name" label="Company Name" placeholder="Company Name" onChange={this.inputChangeHandler} /></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupDesig"><Form.Label className="font_stle">Designation</Form.Label><Form.Control type="text" name="designation" label="Designation" placeholder="Designation" onChange={this.inputChangeHandler} /></Form.Group></Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        <Col md={3}><SelectInput name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority" onChange={this.inputChangeHandler}></SelectInput></Col>
                        <Col md={3}><SelectInput name="lead_source" cStyle="widthone" label="Lead Source" placeholder="Lead Source" onChange={this.inputChangeHandler} /></Col>
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
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.leadForm.equipmentLead.map((equipment, i) => {
                                        return (
                                            <tr>
                                                <td className="align-middle">{equipment.capacity}</td>
                                                <td className="align-middle">{i}</td>
                                                <td className="align-middle">{equipment.equip_type}</td>
                                                <td className="align-middle"></td>
                                                <td className="align-middle"></td>
                                                <td><Button variant="outline-primary" size="sm" block onClick={() => this.editEquipmentForm(i)}>Edit</Button></td>
                                                <td><Button variant="outline-primary" size="sm" block>Delete</Button></td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </Form.Row>
                    {this.state.isEquipmentInfo ? <AddFields leadInputHandler={this.leadInputHandler} appendLeadEquipment={this.appendLeadEquipment} equipmentForm={this.state.equipmentForm} /> : null}
                    <Button type="submit" onClick={this.leadInputHandler} variant="primary" size="sm" >Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}
export default BusinessAddNewModal;