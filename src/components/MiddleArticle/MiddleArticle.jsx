import React, { Component } from 'react';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput';
import RadioInput from '../FormFields/RadioInput';
import TextArea from '../FormFields/TextArea';
import TimePickerinpt from '../FormFields/TimePickerinpt';
import { Button, Row, Col} from 'react-bootstrap';
import '../../assets/css/form.css';
import './MiddleArticle.css';
class MiddleArticle extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="innerDivCompact card card_stle">
                    <Row className="mt-3">
                        <Col md={6} >
                            <TextInput type="text" label="Price" />
                        </Col>
                        <Col md={6}>
                            <SelectInput name="Lead Source" cStyle="widthtwo" label="Duration" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <CalenderInput name="Lead Date*" label="Start Date" />
                        </Col>
                        <Col md={6}>
                            <SelectInput name="Lead Source" cStyle="widthtwo" label="Transportation" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <label>Shift Type</label>
                            <div>
                                <RadioInput name="Single" label="Single" />
                                <span className="time_pic" ><RadioInput name="Double" label="Double" /></span>
                            </div>
                        </Col>
                        <Col md={6}>
                            <label>Shift 1 Work Duration</label>

                            {/* <TimePickerinpt placeholder="From"/><TimePickerinpt placeholder="To"/> */}
                            <TimePickerinpt placeholder="From" />
                            <span className="time_pic" ><TimePickerinpt placeholder="To" /></span>

                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={6}>
                            <TextInput type="text" label="Operator Batha" />
                        </Col>
                        <Col md={6}>
                            <SelectInput name="Lead Source" cStyle="widthtwo" label="Operator Food" />
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={12}>
                            <TextArea name="Payment Terms" label="Payment Terms" ></TextArea>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={12}>
                            <TextArea name="Payment Terms" label="Remarks"></TextArea>
                        </Col>
                    </Row>
                    <Row className="mt-3 mt-3">
                        <Col md={12}>
                            <Button variant='primary'>Submit Details</Button>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}
export default MiddleArticle;
