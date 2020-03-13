import React, { Component } from 'react';
import { Button, Modal, Col, Form } from 'react-bootstrap';
import SelectInput from './SelectInput';
import CalenderInput from './CalenderInput';
import { getLeadEquipmentDetails } from '../../views/Business/actions'
class AddFieldsPro extends Component {
    constructor(props) {
        let token = localStorage.getItem("tokenId");
        super(props)
        // console.log('Add Feilds Pro', this.props)
        this.state = {
            token: token,
            equip_modal: '',
            formData:''
        }
    }
    componentDidMount(){
        if(this.props.formData !== null) {
            this.setState({formData:this.props.formData})
        }
        else {
            this.getLeadEquipmentDetails(this.props.leadUuid, this.props.leadDetUuid, this.state.token);
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    getLeadEquipmentDetails = async (leadUuid, leadDetUuid, token) => {
        let response = await getLeadEquipmentDetails(leadUuid + "/" + leadDetUuid, token);
        if (response) {
            this.setState({formData:response.data[0]})
        }
    }
    render() {
        return (
            <React.Fragment>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInput name="equip_type" cStyle="widthone" label="Equipment Type" placeholder="Select Equipment Type" defaultValue={this.state.formData.leadDet_modal} ></SelectInput>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="selct_make" cStyle="widthone" label="Make" placeholder="Select Make" defaultValue={this.state.formData.leadDet_make} ></SelectInput>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupPhno">
                            <Form.Label className="ml-1">Model</Form.Label>
                            <Form.Control name="equip_modal" placeholder="Equipment Modal" defaultValue={this.state.formData.leadDet_modal} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="min_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" defaultValue={this.state.formData.min_year}></SelectInput>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupCapacity">
                            <Form.Label className="ml-1">Capacity</Form.Label>
                            <Form.Control name="capacity" placeholder="Capacity of Equipment" defaultValue={this.state.formData.leadDet_capacity} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupJob">
                            <Form.Label className="ml-1">Job Location</Form.Label>
                            <Form.Control name="job_loc" placeholder="Location of Work" className=" text-capitalize" defaultValue={this.state.formData.leadDet_location} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <CalenderInput name="expectedStartDate" label="Expected Start Date*" placeholder="Expected Start Date" defaultValue={this.state.formData.leadDet_startDate} />
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupMoth">
                            <Form.Label className="ml-1">No. of months</Form.Label>
                            <Form.Control name="no_month" placeholder="Duration of Work" defaultValue={this.state.formData.no_month} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInput name="state" cStyle="widthone" label="State" placeholder="Select State" defaultValue={this.state.formData.state}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="district_nm" cStyle="widthone" label="District / Known Area" placeholder="Select District or State" defaultValue={this.state.formData.district_nm}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupStage">
                            <Form.Label className="ml-1">Project Stage</Form.Label>
                            <Form.Control name="project_nm" placeholder="Stage of Project" defaultValue={this.state.formData.leadDet_operatorFood} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupHD">
                            <Form.Label className="ml-1">Operation hours per day</Form.Label>
                            <Form.Control name="operation_hours" placeholder="Operation hours per day" defaultValue={this.state.formData.leadDet_workingHoursPerDay} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupPM">
                            <Form.Label className="ml-1">Operation days per month</Form.Label>
                            <Form.Control name="operation_d_m" placeholder="Operation days per month" defaultValue={this.state.formData.leadDet_workingTotalCount} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupQty">
                            <Form.Label className="ml-1">Quantity</Form.Label>
                            <Form.Control name="quantity" placeholder="Quantity" defaultValue={this.state.formData.leadDet_quantity} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupHM">
                            <Form.Label className="ml-1">Operation hours per month</Form.Label>
                            <Form.Control name="operation_h_m" placeholder="Operation hours per month" defaultValue={this.state.formData.leadDet_operatorBatha} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupTOW">
                            <Form.Label className="ml-1">Type of Work</Form.Label>
                            <Form.Control name="type_of_work" placeholder="Type of Work" defaultValue={this.state.formData.leadDet_workingUnits} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <label className="ml-1">Shift Type</label>
                        <Form.Group>
                            <Form.Check inline label="Day" />
                            <Form.Check inline label="Night" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="ml-1">Transportation</label>
                        <Form.Group>
                            <Form.Check inline label="From" />
                            <Form.Check inline label="To" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="ml-1">Accommodation</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Yes" />
                            <Form.Check type="radio" inline label="No" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="ml-1">Food</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Yes" />
                            <Form.Check type="radio" inline label="No" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <label className="ml-1">Operator Allowance</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Yes" />
                            <Form.Check type="radio" inline label="No" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="ml-1">Vehicle Documents</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Required" />
                            <Form.Check type="radio" inline label="Not Required" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="ml-1">Operator License</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Required" />
                            <Form.Check type="radio" inline label="Not Required" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <label className="ml-1">Safety Measures</label>
                        <Form.Group>
                            <Form.Check type="radio" inline label="Required" />
                            <Form.Check type="radio" inline label="Not Required" />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="ml-1">Payment Terms</Form.Label>
                            
                            <Form.Control as="textarea" rows="4" name="Payment Terms" placeholder="Payment Terms" defaultValue={`${this.state.formData.leadDet_paymentTerms}, ${this.state.formData.leadDet_companyUuid},${this.state.formData.leadDet_operatorAccommodation},${this.state.formData.leadDet_companyUuid}`} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="ml-1">Remarks</Form.Label>
                            <Form.Control as="textarea" rows="4" name="Remarks" placeholder="Any comments to go with the equipment" defaultValue={this.state.formData.leadDet_remarks} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Modal.Footer className="px-0">
                    <Button onClick={this.createNewLead} variant="primary" size="sm" className="px-4">Add</Button>
                </Modal.Footer>
            </React.Fragment>
        )
    }
}
export default AddFieldsPro;