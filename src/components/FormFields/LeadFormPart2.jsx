import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import SelectInputSearch from './SelectInputSearch';
import CalenderInput from './CalenderInput';
import '../../assets/css/form.css';
class LeadFormPart2 extends Component {
    render () {
        return (
            <React.Fragment>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInputSearch name="lead_equipmentType" cStyle="widthone" label="Equipment Type *" placeholder="Select Equipment Type" value='Nemo'></SelectInputSearch>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupmod">
                            <Form.Label className="font_stle">Make</Form.Label>
                            <Form.Control type="text" name="lead_make" placeholder="Select Make" value="Dory"/>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupPhno">
                            <Form.Label className="font_stle">Model</Form.Label>
                            <Form.Control type="text" name="lead_modal" placeholder="Equipment Model" value="osborn"/>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <SelectInputSearch name="lead_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" value='spiderMan'></SelectInputSearch>
                    </Col>
                </Form.Row>
            </React.Fragment>
        )
    }
}
export default LeadFormPart2;
