import React, { Component } from 'react';
import { Button, Container, Col, Row, Form, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { editLeadDetails } from '../../views/Business/actions'
import SelectInput from '../FormFields/SelectInput';
import SelectInputSearch from '../FormFields/SelectInputSearch';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
import * as moment from 'moment';
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
        console.log("hello " , this.state.lead_date,this.state.lead_contactPerson,this.state.lead_contactNumber)
        // console.log("Hello Bhu", e, "Hello World",this.state)
        // let response = await editLeadDetails(this.state.token);
        // console.log( "Edit details",response);

        let data = {
                "lead_companyUuid": "1a8abc1c-8c11-11e8-86bd-7054d27b259a",
                "lead_date": this.state.lead_date,
                "lead_contactPerson": this.state.lead_contactPerson,
                "lead_contactNumber": this.state.lead_contactNumber,
                "lead_updatedBy": "1a8abc1c-8c11-11e8-86bd-7054d27b259a",
            };
        let response = await editLeadDetails(data, this.state.token);
        console.log( "Edit details",response);
        if (response) {
            console.log( "Edit details",response);
            this.successNotification(response);
            this.props.modalHider();
            if (this.state.leadType === 'new') {
                this.props.getLeadsOnSubmit('new');
            }
        }
        else {
            console.log( "Edit details",response);
            this.failedNotification();
        }
    }

    successNotification = () => {
        toast("Details are Successfully Updated", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'text-center bg-dark text-white fontGilroyBold bor-rad-05'
        });
    };

    failedNotification = () => {
        toast("failed to Update the Details", {
            position: toast.POSITION.TOP_RIGHT,
            className: 'text-center bg-dark text-white fontGilroyBold bor-rad-05'
        });
    };
    render() {
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