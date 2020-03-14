import React, { Component } from 'react';
import { Button, Container, Col, Row, Form, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { editLeadDetails } from '../../views/Business/actions'
import SelectInput from './SelectInput';
import SelectInputSearch from './SelectInputSearch';
import CalenderInput from './CalenderInput'
import * as moment from 'moment';
import 'react-toastify/dist/ReactToastify.css';
import { toastNotification } from '../../commonFunctions/toastAlert';
class EditLeadForm1 extends Component {
    constructor(props) {
        let token = localStorage.getItem("tokenId");
        super(props)
        console.log('Nemo', this.props);
        this.state = {
            isShowing: false,
            token: token,
            lead_contactNumber: '',
            lead_date: moment().format('YYYY-MM-DD'),
            lead_contactPerson: ''
        }
    }

    inputChangeHandlerDate = (date) => {
        let leadForm = this.state.leadForm;
        leadForm = {
            ...leadForm,
            lead_date: moment(date).format('YYYY-MM-DD')
        }
        this.setState({
            leadForm: leadForm,
            startDate: date
        }, () => { console.log(this.state.leadForm) });
    }

    editLeadDetails = async (e) => {
        console.log("hello ", this.state.lead_date, this.state.lead_contactPerson, this.state.lead_contactNumber)
        let data = {
            "lead_companyUuid": "1a8abc1c-8c11-11e8-86bd-7054d27b259a",
            "lead_date": this.state.lead_date,
            "lead_contactPerson": this.state.lead_contactPerson,
            "lead_contactNumber": "8686224141",
            "lead_updatedBy": "1a8abc1c-8c11-11e8-86bd-7054d27b259a",
        };
        let response = await editLeadDetails(this.props.data.leadinfo[0].lead_uuid, data, this.state.token);
        console.log("Edit details", response);
        if (response) {
            toastNotification('Lead Details are Successfully Updated', toast.POSITION.BOTTOM_RIGHT, 'text-success');
        }
        else {
            console.log("Edit details", response);
            toastNotification('Failed To Update Lead Details', toast.POSITION.BOTTOM_RIGHT, 'text-danger');
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
export default EditLeadForm1;