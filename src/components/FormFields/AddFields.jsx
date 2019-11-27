import React from 'react';
import { Button, Modal, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
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
            <Row>
                <Col md={3} className="form-modal"><SelectInput name="equip_type" cStyle="widthone" label="Equipment Type *" placeholder="Select Equipment Type" value={props.equip_type} onChange={props.inputChangeHandler} ></SelectInput></Col>
                <Col md={3}><SelectInput name="selct_make" cStyle="widthone" label="Make" placeholder="Select Make" value={props.selct_make} onChange={props.inputChangeHandler}></SelectInput></Col>
                <Col md={3}><TextInput name="equip_modal" label="Model" placeholder="Equipment Modal" value={props.equip_modal} onChange={props.inputChangeHandler}/></Col>
                <Col md={3}><SelectInput name="min_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" value={props.min_year} onChange={props.inputChangeHandler}></SelectInput></Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="form-modal"><TextInput name="capacity" label="Capacity" placeholder="Capacity of Equipment" value={props.capacity} onChange={props.inputChangeHandler}/></Col>
                <Col md={3}><TextInput name="job_loc" label="Job Location" placeholder="Location of Work" value={props.job_loc} onChange={props.inputChangeHandler}/></Col>
                <Col md={3}><CalenderInput name="extd_start_dte" label="Expected Start Date*" placeholder="Expected Start Date" value={props.extd_start_dte} onChange={props.inputChangeHandler}/></Col>
                <Col md={3}><TextInput name="no_month" label="No. of months" placeholder="Duration of Work" value={props.no_month} onChange={props.inputChangeHandler}/></Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="form-modal"><SelectInput name="state" cStyle="widthone" label="State" placeholder="Select State" value={props.state} onChange={props.inputChangeHandler}></SelectInput></Col>
                <Col md={3}><SelectInput name="district_nm" cStyle="widthone" label="District / Known Area" placeholder="Select District or State" value={props.district_nm} onChange={props.inputChangeHandler}></SelectInput></Col>
                <Col md={3}><TextInput name="project_nm" label="Project Stage" placeholder="Stage of Project" value={props.project_nm} onChange={props.inputChangeHandler}/></Col>
                <Col md={3}><TextInput name="operation_hours" label="Operation hours per day" placeholder="Operation hours per day" value={props.operation_hours} onChange={props.inputChangeHandler}/></Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="form-modal"><TextInput name="operation_d_m" label="Operation days per month" placeholder="Operation days per month" value={props.operation_d_m} onChange={props.inputChangeHandler}/></Col>
                <Col md={3}><TextInput name="qunatity" label="Qunatity" placeholder="Qunatity"  value={props.quantity} onChange={props.inputChangeHandler} /></Col>
                <Col md={3}><TextInput name="operation_h_m" label="Operation hours per month" placeholder="Operation hours per month" value={props.operation_h_m} onChange={props.inputChangeHandler}/></Col>
                <Col md={3}><TextInput name="type_of_work" label="Type of Work" placeholder="Type of Work" value={props.type_of_work} onChange={props.inputChangeHandler}/></Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="form-modal">
                    <label>Shift Type</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="Day" />
                            <InputGroup.Text>Day</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Checkbox aria-label="Night" />
                            <InputGroup.Text>Night</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col md={3} className="form-modal">
                    <label>Transportation</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Checkbox aria-label="To" />
                            <InputGroup.Text>To</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Checkbox aria-label="From" />
                            <InputGroup.Text>From</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col md={3} className="form-modal">
                    <label>Accomodation</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Yes" />
                            <InputGroup.Text>Yes</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Radio aria-label="No" />
                            <InputGroup.Text>No</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col md={3} className="form-modal">
                    <label>Food</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Yes" />
                            <InputGroup.Text>Yes</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Radio aria-label="No" />
                            <InputGroup.Text>No</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="radio-modal radio_left">
                    <label>Operator Allowance</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Yes" />
                            <InputGroup.Text>Yes</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Radio aria-label="No" />
                            <InputGroup.Text>No</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col md={3} className="radio-modal radio_left">
                    <label>Vehicle Documents</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Required" />
                            <InputGroup.Text>Required</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Radio aria-label="Not Required" />
                            <InputGroup.Text>Not Required</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col md={3} className="radio-modal">
                    <label>Operator License</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Required" />
                            <InputGroup.Text>Required</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Radio aria-label="Not Required" />
                            <InputGroup.Text>Not Required</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col md={3} className="radio-modal">
                    <label>Safety Measures</label>
                    <InputGroup size="sm">
                        <InputGroup.Prepend>
                            <InputGroup.Radio aria-label="Required" />
                            <InputGroup.Text>Required</InputGroup.Text>
                        </InputGroup.Prepend>
                        <InputGroup.Append>
                            <InputGroup.Radio aria-label="Not Required" />
                            <InputGroup.Text>Not Required</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="mt-3 form-modal">
                <Col md={12}><TextArea name="Payment Terms" label="Payment Terms" placeholder="Payment Terms"></TextArea></Col>
            </Row>
            <Row className="mt-3 form-modal">
                <Col md={12}><TextArea name="Remarks" label="Remarks" placeholder="Any comments to go with the equipment"></TextArea></Col>
            </Row>
            <Modal.Footer className="px-0">
                {/* <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button> */}
                <Button variant="primary" size="sm" className="px-4">Add</Button>
            </Modal.Footer>
        </React.Fragment>
    );
}
export default AddFields;