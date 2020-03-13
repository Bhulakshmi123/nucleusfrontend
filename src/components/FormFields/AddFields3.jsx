import React, { Component } from 'react';
import { Button, Container, Col, Row, Form, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { toastNotification } from '../../commonFunctions/toastAlert';
import 'react-toastify/dist/ReactToastify.css';
import * as moment from 'moment';
import CalenderInput from '../FormFields/CalenderInput'
class AddViewModal extends Component {
    constructor(props) {
        let token = localStorage.getItem("tokenId");
        super(props)
        this.state = {
            isShowing: false,
            token: token,
            lead_contactNumber: '',
            lead_date: moment().format('YYYY-MM-DD'),
            lead_contactPerson: ''
        }
    }

    render () {
        return (
            <Container fluid className="p-0">
                <Form onSubmit={this.submitForm}>
                    <Form.Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="font_stle">Phone No.*</Form.Label>
                                <Form.Control type="text" name="lead_contactNumber" placeholder="Phone No." />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <CalenderInput name="lead_date" label="Lead Date*" placeholder="Lead Date" onChange={this.inputChangeHandlerDate} startDate={this.state.startDate} minDate={new Date()} />
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label className="font_stle">Renter Name*</Form.Label>
                                <Form.Control type="text" name="lead_contactPerson" label="Renter Name*" placeholder="Renter Name" />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Button variant="primary" size="sm" className="px-4" onClick={this.editLeadDetails}>Update Lead Details</Button>
                </Form>
            </Container>
        );
    }
}
export default AddViewModal;