import React from 'react';
import { Button, Modal, Row, Col, InputGroup, FormControl, Form, Card, Table } from 'react-bootstrap';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import '../../assets/css/form.css';
// import InputName from './SelectInput';
// import FileInput from './FileInput';
import RadioInput from './RadioInput';
import Checkbox from './Checkbox';
import TextArea from './TextArea';
import CalenderInput from './CalenderInput';
const AddFields = props => {
    return (
        <React.Fragment>
            <Form.Row className="mt-3">
                <Col md={3}><SelectInput name="equip_type" cStyle="widthone" label="Equipment Type *" placeholder="Select Equipment Type" value={props.equip_type} onChange={props.inputChangeHandler} ></SelectInput></Col>
                <Col md={3}><SelectInput name="selct_make" cStyle="widthone" label="Make" placeholder="Select Make" value={props.selct_make} onChange={props.inputChangeHandler}></SelectInput></Col>
                <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Model</Form.Label><Form.Control name="equip_modal" placeholder="Equipment Modal" value={props.equip_modal} onChange={props.inputChangeHandler} /></Form.Group></Col>
                <Col md={3}><SelectInput name="min_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" value={props.min_year} onChange={props.inputChangeHandler}></SelectInput></Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}><Form.Group controlId="formGroupCapty"><Form.Label className="font_stle">Capacity</Form.Label><Form.Control name="capacity" placeholder="Capacity of Equipment" value={props.capacity} onChange={props.inputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupJob"><Form.Label className="font_stle">Job Location</Form.Label><Form.Control name="job_loc" placeholder="Location of Work" value={props.job_loc} onChange={props.inputChangeHandler} /></Form.Group></Col>
                <Col md={3}><CalenderInput name="extd_start_dte" label="Expected Start Date*" placeholder="Expected Start Date" value={props.extd_start_dte} onChange={props.inputChangeHandler} /></Col>
                <Col md={3}><Form.Group controlId="formGroupMoth"><Form.Label className="font_stle">No. of months</Form.Label><Form.Control name="no_month" placeholder="Duration of Work" value={props.no_month} onChange={props.inputChangeHandler} /></Form.Group></Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}><SelectInput name="state" cStyle="widthone" label="State" placeholder="Select State" value={props.state} onChange={props.inputChangeHandler}></SelectInput></Col>
                <Col md={3}><SelectInput name="district_nm" cStyle="widthone" label="District / Known Area" placeholder="Select District or State" value={props.district_nm} onChange={props.inputChangeHandler}></SelectInput></Col>
                <Col md={3}><Form.Group controlId="formGroupprStage"><Form.Label className="font_stle">Project Stage</Form.Label><Form.Control name="project_nm" placeholder="Stage of Project" value={props.project_nm} onChange={props.inputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupHD"><Form.Label className="font_stle">Operation hours per day</Form.Label><Form.Control name="operation_hours" placeholder="Operation hours per day" value={props.operation_hours} onChange={props.inputChangeHandler} /></Form.Group></Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}><Form.Group controlId="formGroupPM"><Form.Label className="font_stle">Operation days per month</Form.Label><Form.Control name="operation_d_m" placeholder="Operation days per month" value={props.operation_d_m} onChange={props.inputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupQty"><Form.Label className="font_stle">Qunatity</Form.Label><Form.Control name="qunatity" placeholder="Qunatity" value={props.quantity} onChange={props.inputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupHM"><Form.Label className="font_stle">Operation hours per month</Form.Label><Form.Control name="operation_h_m" placeholder="Operation hours per month" value={props.operation_h_m} onChange={props.inputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupTOW"><Form.Label className="font_stle">Type of Work</Form.Label><Form.Control name="type_of_work" placeholder="Type of Work" value={props.type_of_work} onChange={props.inputChangeHandler} /></Form.Group></Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}>
                    <label className="font_stle">Shift Type</label>
                    <Form.Group>
                        <Form.Check
                            inline
                            label="Day"
                        />
                        <Form.Check
                            inline
                            label="Night"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <label className="font_stle">Transportation</label>
                    <Form.Group>
                        <Form.Check
                            inline
                            label="To"
                        />
                        <Form.Check
                            inline
                            label="From"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <label className="font_stle">Accomodation</label>
                    <Form.Group>
                        <Form.Check
                            type="radio"
                            inline
                            label="Yes"
                        />
                        <Form.Check
                            type="radio"
                            inline
                            label="No"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <label className="font_stle">Food</label>
                    <Form.Group>
                        <Form.Check
                            type="radio"
                            inline
                            label="Yes"
                        />
                        <Form.Check
                            type="radio"
                            inline
                            label="No"
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}>
                    <label className="font_stle">Operator Allowance</label>
                    <Form.Group>
                        <Form.Check
                            type="radio"
                            inline
                            label="Yes"
                        />
                        <Form.Check
                            type="radio"
                            inline
                            label="No"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <label className="font_stle">Vehicle Documents</label>
                    <Form.Group>
                        <Form.Check
                            type="radio"
                            inline
                            label="Required"
                        />
                        <Form.Check
                            type="radio"
                            inline
                            label="Not Required"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <label className="font_stle">Operator License</label>
                    <Form.Group>
                        <Form.Check
                            type="radio"
                            inline
                            label="Required"
                        />
                        <Form.Check
                            type="radio"
                            inline
                            label="Not Required"
                        />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <label className="font_stle">Safety Measures</label>
                    <Form.Group>
                        <Form.Check
                            type="radio"
                            inline
                            label="Required"
                        />
                        <Form.Check
                            type="radio"
                            inline
                            label="Not Required"
                        />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row className="mt-3 form-modal">
                <Col md={12}><Form.Group><Form.Label className="font_stle">Payment Terms</Form.Label><Form.Control as="textarea" rows="4" name="Payment Terms" placeholder="Payment Terms"/></Form.Group></Col>
            </Form.Row>
            <Form.Row className="mt-3 form-modal">
                <Col md={12}><Form.Group><Form.Label className="font_stle">Remarks</Form.Label><Form.Control as="textarea" rows="4" name="Remarks" placeholder="Any comments to go with the equipment"/></Form.Group></Col>
            </Form.Row>
            <Modal.Footer className="px-0">
                {/* <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button> */}
                <Button variant="primary" size="sm" className="px-4">Add</Button>
            </Modal.Footer>
        </React.Fragment>
    );
}
export default AddFields;