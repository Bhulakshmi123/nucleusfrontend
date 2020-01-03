import React from 'react';
import { Button, Modal, Col, Form } from 'react-bootstrap';
import SelectInput from './SelectInput';
import '../../assets/css/form.css';
import CalenderInput from './CalenderInput';

class AddFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            equipmentForm:this.props.equipmentForm
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ equipmentForm: nextProps.equipmentForm });
      }

    render() {
        return (
        <React.Fragment>
            <Button variant="primary" size="sm" className="px-4" onClick={this.props.addEquipForm}>Add</Button>
            <Button variant="primary" size="sm" className="px-4" onClick={this.props.closeEquipmentForm}>Close</Button>
            <Form.Row className="mt-3">
                <Col md={3}><SelectInput name="equip_type" cStyle="widthone" label="Equipment Type *" placeholder="Select Equipment Type" value={this.state.equipmentForm.equip_type} onChange={this.props.equipInputChangeHandlerSelect} ></SelectInput></Col>
                <Col md={3}><SelectInput name="selct_make" cStyle="widthone" label="Make" placeholder="Select Make" value={this.state.equipmentForm.selct_make} onChange={this.props.equipInputChangeHandler}></SelectInput></Col>
                <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Model</Form.Label><Form.Control type="text" name="equip_modal" placeholder="Equipment Modal" value={this.state.equipmentForm.equip_modal} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
                <Col md={3}><SelectInput name="min_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" value={this.state.equipmentForm.min_year} onChange={this.props.equipInputChangeHandler}></SelectInput></Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}><Form.Group controlId="formGroupCapty"><Form.Label className="font_stle">Capacity</Form.Label><Form.Control type="text" name="capacity" placeholder="Capacity of Equipment" value={this.state.equipmentForm.capacity} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupJob"><Form.Label className="font_stle">Job Location</Form.Label><Form.Control type="text" name="job_loc" placeholder="Location of Work" value={this.state.equipmentForm.job_loc} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
                <Col md={3}>
                    <CalenderInput name="extd_start_dte" label="Expected Start Date*" placeholder="Expected Start Date" onChange={this.props.equipInputChangeHandlerDate} startDate={this.props.startDate} minDate={new Date()}/></Col>
                <Col md={3}><Form.Group controlId="formGroupMoth"><Form.Label className="font_stle">No. of months</Form.Label><Form.Control type="text" name="no_month" placeholder="Duration of Work" value={this.state.equipmentForm.no_month} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}><SelectInput name="state" cStyle="widthone" label="State" placeholder="Select State" value={this.state.equipmentForm.state} onChange={this.props.equipInputChangeHandler}></SelectInput></Col>
                <Col md={3}><SelectInput name="district_nm" cStyle="widthone" label="District / Known Area" placeholder="Select District or State" value={this.state.equipmentForm.district_nm} onChange={this.props.equipInputChangeHandler}></SelectInput></Col>
                <Col md={3}><Form.Group controlId="formGroupprStage"><Form.Label className="font_stle">Project Stage</Form.Label><Form.Control type="text" name="project_nm" placeholder="Stage of Project" value={this.state.equipmentForm.project_nm} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupHD"><Form.Label className="font_stle">Operation hours per day</Form.Label><Form.Control type="text" name="operation_hours" placeholder="Operation hours per day" value={this.state.equipmentForm.operation_hours} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
            </Form.Row>
            <Form.Row className="mt-3">
                <Col md={3}><Form.Group controlId="formGroupPM"><Form.Label className="font_stle">Operation days per month</Form.Label><Form.Control type="text" name="operation_d_m" placeholder="Operation days per month" value={this.state.equipmentForm.operation_d_m} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupQty"><Form.Label className="font_stle">Qunatity</Form.Label><Form.Control type="text" name="qunatity" placeholder="Qunatity" value={this.state.equipmentForm.quantity} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupHM"><Form.Label className="font_stle">Operation hours per month</Form.Label><Form.Control type="text" name="operation_h_m" placeholder="Operation hours per month" value={this.state.equipmentForm.operation_h_m} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
                <Col md={3}><Form.Group controlId="formGroupTOW"><Form.Label className="font_stle">Type of Work</Form.Label><Form.Control type="text" name="type_of_work" placeholder="Type of Work" value={this.state.equipmentForm.type_of_work} onChange={this.props.equipInputChangeHandler} /></Form.Group></Col>
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
                    <label className="font_stle">Accommodation</label>
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
                <Col md={12}><Form.Group><Form.Label className="font_stle">Payment Terms</Form.Label><Form.Control as="textarea" rows="4" name="Payment Terms" placeholder="Payment Terms" /></Form.Group></Col>
            </Form.Row>
            <Form.Row className="mt-3 form-modal">
                <Col md={12}><Form.Group><Form.Label className="font_stle">Remarks</Form.Label><Form.Control as="textarea" rows="4" name="Remarks" placeholder="Any comments to go with the equipment" /></Form.Group></Col>
            </Form.Row>
            <Modal.Footer className="px-0">
                {/* <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button> */}
                <Button variant="primary" size="sm" className="px-4" onClick={this.props.addEquipForm}>Add</Button>
                <Button variant="primary" size="sm" className="px-4" onClick={this.props.closeEquipmentForm}>Close</Button>
            </Modal.Footer>
        </React.Fragment>
        );
    }
}
export default AddFields;