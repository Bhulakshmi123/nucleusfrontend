import React, { Component } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import CalenderInput from './CalenderInput';
import RadioInput from './RadioInput';
import TextArea from './TextArea';
import TimePickerInput from './TimePickerInput';
class AddViewModal extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        this.state = {
            isShowing: false,
        }
    }
    render () {
        return (
            <form>
                <Container fluid className="p-0">
                    <Row>
                        <Col md={6}><TextInput type="text" placeholder="Phone No." name="fname" value={this.state.fname} onChange={this.handleChange} label="Phone No.*" /></Col>
                        <Col md={6}><SelectInput cStyle="widthone" label="Duration" placeholder="Select District or State" /></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}><CalenderInput name="Expected Start Date*" label="Expected Start Date*" placeholder="Expected Start Date" /></Col>
                        <Col md={6}><SelectInput cStyle="widthone" label="Duration" placeholder="Select District or State" /></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <label>Accommodation</label>
                            <div>
                                <RadioInput name="Yes" label="Yes" />
                                <RadioInput name="No" label="No" />
                            </div>
                        </Col>
                        <Col md={6}><TextInput type="text" placeholder="Phone No." name="fname" value={this.state.fname} onChange={this.handleChange} label="Phone No.*" /></Col>

                    </Row>
                    <Row className="mt-3">
                        <Col md={12}>
                            <label>Shift 1 Work Duration</label>
                            <div>
                                <div className="col-md-5"><TimePickerInput placeholder="From" /></div>
                                <div className="col-md-5"><TimePickerInput placeholder="To" /></div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={12}><TextArea name="Payment Terms" label="Payment Terms" ></TextArea></Col>
                    </Row>
                    <Row className="my-3">
                        <Button variant="primary" size="sm" className="ml-3">Update Details</Button>
                    </Row>
                </Container>
            </form>


        );
    }
}
export default AddViewModal;