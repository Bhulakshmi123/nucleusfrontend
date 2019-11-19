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
                <Col md={3} className="form-modal"><SelectInput name="Equipment Type *" cStyle="widthone" label="Equipment Type *" placeholder="Select Equipment Type"></SelectInput></Col>
                <Col md={3}><SelectInput name="Make" cStyle="widthone" label="Make" placeholder="Select Make"></SelectInput></Col>
                <Col md={3}><TextInput name="Model" label="Model" placeholder="Equipment Modal" /></Col>
                <Col md={3}><SelectInput name="Minimum Year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year"></SelectInput></Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="form-modal"><TextInput name="Capacity" label="Capacity" placeholder="Capacity of Equipment" /></Col>
                <Col md={3}><TextInput name="Job Location" label="Job Location" placeholder="Location of Work" /></Col>
                <Col md={3}><CalenderInput name="Expected Start Date*" label="Expected Start Date*" placeholder="Expected Start Date" /></Col>
                <Col md={3}><TextInput name="No. of months" label="No. of months" placeholder="Duration of Work" /></Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="form-modal"><SelectInput name="State" cStyle="widthone" label="State" placeholder="Select State"></SelectInput></Col>
                <Col md={3}><SelectInput name="District / Known Area" cStyle="widthone" label="District / Known Area" placeholder="Select District or State"></SelectInput></Col>
                <Col md={3}><TextInput name="Project Stage" label="Project Stage" placeholder="Stage of Project" /></Col>
                <Col md={3}><TextInput name="Operation hours per day" label="Operation hours per day" placeholder="Operation hours per day" /></Col>
            </Row>
            <Row className="mt-3">
                <Col md={3} className="form-modal"><TextInput name="Operation days per month" label="Operation days per month" placeholder="Operation days per month" /></Col>
                <Col md={3}><TextInput name="Qunatity" label="Qunatity" placeholder="Qunatity" /></Col>
                <Col md={3}><TextInput name="Operation hours per month" label="Operation hours per month" placeholder="Operation hours per month" /></Col>
                <Col md={3}><TextInput name="Type of Work" label="Type of Work" placeholder="Type of Work" /></Col>
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