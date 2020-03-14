import React, { Component } from 'react';
import { Button, Modal, Col, Form } from 'react-bootstrap';
import SelectInput from './SelectInput';
import SelectInputSearch from './SelectInputSearch';
import CalenderInput from './CalenderInput';
import { getLeadEquipmentDetails } from '../../views/Business/actions'
class AddFieldsPro extends Component {
    constructor(props) {
        let token = localStorage.getItem("tokenId");
        super(props)
        console.log('Add Feilds Pro', this.props)
        this.state = {
            token: token,
            equip_modal: '',
            formData: '',
            leadDet_modal: [
                { value: '1', label: 'Chocolate', name: 'lead_priority' },
                { value: '2', label: 'Strawberry', name: 'lead_priority' },
                { value: '3', label: 'Vanilla', name: 'lead_priority' },
            ],
            shiftTypeDropDown: [
                { value: '1', label: 'Shift 1 (5AM - 3PM)', name: 'lead_shiftType' },
                { value: '2', label: 'Shift 2 (2PM - 10PM)', name: 'lead_shiftType' },
                { value: '3', label: 'Shift 3 (9PM - 6AM)', name: 'lead_shiftType' }
            ],
            transportationDropDown: [
                { value: 'no-transport', label: 'No Transport', name: 'lead_transportation' },
                { value: 'one-sided', label: 'One Sided', name: 'lead_transportation' },
                { value: 'two-sided', label: 'Two Sided', name: 'lead_transportation' }
            ],
            accommodationDropDown: [
                { value: 'company-provides', label: 'Yes', name: 'lead_operatorAccommodation' },
                { value: 'company-doesnt-provide', label: 'No', name: 'lead_operatorAccommodation' }
            ],
            foodDropDown: [
                { value: 'company-provides', label: 'Yes', name: 'lead_operatorFood' },
                { value: 'company-doesnt-provide', label: 'No', name: 'lead_operatorFood' }
            ],
            workingUnitsDropDown: [
                { value: 'hours', label: 'Hours', name: 'lead_workingUnits' },
                { value: 'days', label: 'Days', name: 'lead_workingUnits' },
                { value: 'months', label: 'Months', name: 'lead_workingUnits' }
            ],
            allowanceDropDown: [
                { value: 'company-provides', label: 'company-provides', name: 'lead_operatorAllowance' },
                { value: 'company-doesnt-provide', label: 'company-doesnt-provide', name: 'lead_operatorAllowance' }
            ],
            licenseDropDown: [
                { value: 'Required', label: 'Required', name: 'lead_vechileDocuments' },
                { value: 'Not Required', label: 'Not Required', name: 'lead_vechileDocuments' }
            ],
            operatorDropDown: [
                { value: 'Required', label: 'Required', name: 'lead_operatorLicense' },
                { value: 'Not Required', label: 'Not Required', name: 'lead_operatorLicense' }
            ],
            safetymgmtDropDown: [
                { value: 'Required', label: 'Required', name: 'lead_safetyMeasures' },
                { value: 'Not Required', label: 'Not Required', name: 'lead_safetyMeasures' }
            ],
            leadPriorityDropDown: [
                { value: 'HOT', label: 'HOT', name: 'lead_priority' },
                { value: 'MEDIUM', label: 'MEDIUM', name: 'lead_priority' },
                { value: 'COLD', label: 'COLD', name: 'lead_priority' }
            ]
        }
    }
    componentDidMount() {
        this.getLeadEquipmentDetails(this.props.leadUuid, this.props.leadDetUuid, this.state.token);
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    getLeadEquipmentDetails = async (leadUuid, leadDetUuid, token) => {
        let response = await getLeadEquipmentDetails(leadUuid + "/" + leadDetUuid, token);
        if (response) {
            this.setState({ formData: response.data[0] })
        }
    }
    render () {
        return (
            <React.Fragment>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInput name="equip_type" cStyle="widthone" label="Equipment Type" placeholder="Select Equipment Type"  options={this.state.leadDet_modal}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="selct_make" cStyle="widthone" label="Make" placeholder="Select Make" defaultValue={this.state.formData.leadDet_make || ''} ></SelectInput>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupPhno">
                            <Form.Label className="ml-1">Model</Form.Label>
                            <Form.Control name="equip_modal" placeholder="Equipment Modal" defaultValue={this.state.formData.leadDet_modal || ''} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="min_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" defaultValue={this.state.formData.min_year || ''}></SelectInput>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupCapacity">
                            <Form.Label className="ml-1">Capacity</Form.Label>
                            <Form.Control name="capacity" placeholder="Capacity of Equipment" defaultValue={this.state.formData.leadDet_capacity || ''} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupJob">
                            <Form.Label className="ml-1">Job Location</Form.Label>
                            <Form.Control name="job_loc" placeholder="Location of Work" className=" text-capitalize" defaultValue={this.state.formData.leadDet_location || ''} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <CalenderInput name="expectedStartDate" label="Expected Start Date*" placeholder="Expected Start Date" defaultValue={this.state.formData.leadDet_startDate || ''} />
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupMoth">
                            <Form.Label className="ml-1">No. of months</Form.Label>
                            <Form.Control name="no_month" placeholder="Duration of Work" defaultValue={this.state.formData.no_month || ''} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInput name="state" cStyle="widthone" label="State" placeholder="Select State" defaultValue={this.state.formData.state || ''}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <SelectInput name="district_nm" cStyle="widthone" label="District / Known Area" placeholder="Select District or State" defaultValue={this.state.formData.district_nm || ''}></SelectInput>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupStage">
                            <Form.Label className="ml-1">Project Stage</Form.Label>
                            <Form.Control name="project_nm" placeholder="Stage of Project" defaultValue={this.state.formData.leadDet_operatorFood || ''} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupHD">
                            <Form.Label className="ml-1">Operation hours per day</Form.Label>
                            <Form.Control name="operation_hours" placeholder="Operation hours per day" defaultValue={this.state.formData.leadDet_workingHoursPerDay || ''} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupPM">
                            <Form.Label className="ml-1">Operation days per month</Form.Label>
                            <Form.Control name="operation_d_m" placeholder="Operation days per month" defaultValue={this.state.formData.leadDet_workingTotalCount || ''} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupQty">
                            <Form.Label className="ml-1">Quantity</Form.Label>
                            <Form.Control name="quantity" placeholder="Quantity" defaultValue={this.state.formData.leadDet_quantity || ''} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupHM">
                            <Form.Label className="ml-1">Operation hours per month</Form.Label>
                            <Form.Control name="operation_h_m" placeholder="Operation hours per month" defaultValue={this.state.formData.leadDet_operatorBatha || ''} />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupTOW">
                            <Form.Label className="ml-1">Type of Work</Form.Label>
                            <Form.Control name="type_of_work" placeholder="Type of Work" defaultValue={this.state.formData.leadDet_workingUnits || ''} />
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_shiftType" cStyle="widthone" label="Shift Type" placeholder="Select Shift Type" isopen={this.props.isOpenD} options={this.state.shiftTypeDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_transportation" cStyle="widthone" label="Transportation" placeholder="Select Transportation"  isopen={this.props.isOpenD} options={this.state.transportationDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorAccommodation" cStyle="widthone" label="Accommodation" placeholder="Select Accommodation" isopen={this.props.isOpenD} options={this.state.accommodationDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorFood" cStyle="widthone" label="Food" placeholder="Select Food" isopen={this.props.isOpenD} options={this.state.foodDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorAllowance" cStyle="widthone" label="Operator Allowance" placeholder="Select Operator Allowance"isopen={this.props.isOpenD} options={this.state.allowanceDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_vechileDocuments" cStyle="widthone" label="Vehicle Documents" placeholder="Select Vehical Documents"  isopen={this.props.isOpenD} options={this.state.licenseDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorLicense" cStyle="widthone" label="Operator License" placeholder="Select Operator License" isopen={this.props.isOpenD} options={this.state.operatorDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_safetyMeasures" cStyle="widthone" label="Safety Measures" placeholder="Select safety Measures" isopen={this.props.isOpenD} options={this.state.safetymgmtDropDown}></SelectInputSearch>
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row>
                    <Col md={3}>
                        <Form.Group controlId="formGroupOperatorBatha">
                            <Form.Label className="font_stle">Operator Batha</Form.Label>
                            <Form.Control type="text" name="lead_operatorBatha" placeholder="Operator Batha" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupLeadPrice">
                            <Form.Label className="font_stle">Lead Price</Form.Label>
                            <Form.Control type="text" name="lead_price" placeholder="Lead Price" />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <SelectInputSearch name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority" onChange={this.props.equipInputChangeHandlerSelect} isOpenD={this.props.isOpenD} options={this.state.leadPriorityDropDown}></SelectInputSearch>
                    </Col>
                </Form.Row>

                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="font_stle">Payment Terms</Form.Label><Form.Control as="textarea"  rows="4" name="lead_paymentTerms" placeholder="Payment Terms" />
                        </Form.Group>
                    </Col>
                </Form.Row>

                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="font_stle">Remarks</Form.Label><Form.Control as="textarea" rows="4" name="lead_remarks" placeholder="Any comments to go with the equipment" />
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