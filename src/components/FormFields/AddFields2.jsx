import React, { Component } from 'react';
import { Button, Modal, Col, Form } from 'react-bootstrap';
import SelectInput from './SelectInput';
import '../../assets/css/form.css';
import CalenderInput from './CalenderInput';
class AddFields2 extends Component {
    render() {
        return (
            <React.Fragment>

                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInput name="equip_type" cStyle="widthone" label="Equipment Type" placeholder="Select Equipment Type" value={this.props.formData.leadDet_modal} onChange={this.props.inputChangeHandler} ></SelectInput>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="selct_make" cStyle="widthone" label="Make" placeholder="Select Make" value={this.props.formData.leadDet_make} onChange={this.props.inputChangeHandler}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupPhno">
                            <Form.Label className="font_stle">Model</Form.Label>
                            <Form.Control name="equip_modal" placeholder="Equipment Modal" value={this.props.formData.leadDet_modal} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="min_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" value={this.props.min_year} onChange={this.props.inputChangeHandler}></SelectInput>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupCapty">
                            <Form.Label className="font_stle">Capacity</Form.Label>
                            <Form.Control name="capacity" placeholder="Capacity of Equipment" value={this.props.formData.leadDet_capacity} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupJob">
                            <Form.Label className="font_stle">Job Location</Form.Label>
                            <Form.Control name="job_loc" placeholder="Location of Work" className=" text-capitalize" value={this.props.formData.leadDet_location} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <CalenderInput name="extd_start_dte" label="Expected Start Date*" placeholder="Expected Start Date" value={this.props.formData.leadDet_startDate} onChange={this.props.inputChangeHandler} />
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupMoth">
                            <Form.Label className="font_stle">No. of months</Form.Label>
                            <Form.Control name="no_month" placeholder="Duration of Work" value={this.props.no_month} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInput name="state" cStyle="widthone" label="State" placeholder="Select State" value={this.props.state} onChange={this.props.inputChangeHandler}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="district_nm" cStyle="widthone" label="District / Known Area" placeholder="Select District or State" value={this.props.district_nm} onChange={this.props.inputChangeHandler}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupprStage">
                            <Form.Label className="font_stle">Project Stage</Form.Label>
                            <Form.Control name="project_nm" placeholder="Stage of Project" value={this.props.formData.leadDet_operatorFood} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupHD">
                            <Form.Label className="font_stle">Operation hours per day</Form.Label>
                            <Form.Control name="operation_hours" placeholder="Operation hours per day" value={this.props.formData.leadDet_workingHoursPerDay} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupPM">
                            <Form.Label className="font_stle">Operation days per month</Form.Label>
                            <Form.Control name="operation_d_m" placeholder="Operation days per month" value={this.props.formData.leadDet_workingTotalCount} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupQty">
                            <Form.Label className="font_stle">Quantity</Form.Label>
                            <Form.Control name="quantity" placeholder="Quantity" value={this.props.formData.leadDet_quantity} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupHM">
                            <Form.Label className="font_stle">Operation hours per month</Form.Label>
                            <Form.Control name="operation_h_m" placeholder="Operation hours per month" value={this.props.formData.leadDet_operatorBatha} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupTOW">
                            <Form.Label className="font_stle">Type of Work</Form.Label>
                            <Form.Control name="type_of_work" placeholder="Type of Work" value={this.props.formData.leadDet_workingUnits} onChange={this.props.inputChangeHandler} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <label className="font_stle">Shift Type</label>
                        <Form.Group>
                            <Form.Check inline label="Day" />
                            <Form.Check inline label="Night" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="font_stle">Transportation</label>
                        <Form.Group>
                            <Form.Check inline label="From" />
                            <Form.Check inline label="To" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="font_stle">Accomodation</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Yes" />
                            <Form.Check type="radio" inline label="No" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="font_stle">Food</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Yes" />
                            <Form.Check type="radio" inline label="No" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <label className="font_stle">Operator Allowance</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Yes" />
                            <Form.Check type="radio" inline label="No" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="font_stle">Vehicle Documents</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Required" />
                            <Form.Check type="radio" inline label="Not Required" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="font_stle">Operator License</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Required" />
                            <Form.Check type="radio" inline label="Not Required" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="font_stle">Safety Measures</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Required" />
                            <Form.Check type="radio" inline label="Not Required" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="font_stle">Payment Terms</Form.Label>
                            <Form.Control as="textarea" rows="4" name="Payment Terms" placeholder="Payment Terms" value={`${this.props.formData.leadDet_paymentTerms}, ${this.props.formData.leadDet_companyUuid},${this.props.formData.leadDet_operatorAccommodation},${this.props.formData.leadDet_companyUuid}`} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="font_stle">Remarks</Form.Label>
                            <Form.Control as="textarea" rows="4" name="Remarks" placeholder="Any comments to go with the equipment" value={`${this.props.formData.equipmentName}, ${this.props.formData.leadDet_createdAt},  ${this.props.formData.leadDet_createdBy}, ${this.props.formData.leadDet_priority}`} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Modal.Footer className="px-0">
                    <Button variant="primary" size="sm" className="px-4">Add</Button>
                </Modal.Footer>
            </React.Fragment>
        )
    }
}
export default AddFields2;