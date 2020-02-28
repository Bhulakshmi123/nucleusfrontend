import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import SelectInputSearch from './SelectInputSearch';
import '../../assets/css/form.css';
import CalenderInput from './CalenderInput';
// import { fromUnixTime } from 'date-fns';
import { computeDistrictsDropDownInForm } from '../../views/Business/actions'
class AddFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            districtsDropDown: [{id: 2, stateId: "1", name: "Nicobar"}],
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
    componentWillReceiveProps(nextProps) {
        if (nextProps.equipmentForm !== this.props.equipmentForm) {
            this.setState({ equipmentForm: nextProps.equipmentForm },() => {
                if(this.state.equipmentForm.lead_state){
                    this.computeDistrictsDropDownInForm();
                }
            });   
        }
    }

    computeDistrictsDropDownInForm = async (e) => {
        console.log(this.state.districtsDropDown);
        let response = await computeDistrictsDropDownInForm(this.props.token, this.state.equipmentForm.lead_state);
        if(response){
            this.setState({ districtsDropDown : response.data}, () => {
                console.log(this.state.districtsDropDown);
            });
        }
        let districtsDropDown = response.data;
        
    }

    // componentWillReceiveProps(newProps) {
    //     this.setState({
    //         districtsDropDown: newProps.districtsDropDown
    //     }, () => { console.log('Templars vs Assassins', this.state.districtsDropDown) });
    // }

    render() {
        return (
            <React.Fragment>
                {/* <Button variant="primary" size="sm" className="px-4 mr-4" onClick={this.props.addEquipForm}>Add  Equipment Form</Button>
                <Button variant="danger" size="sm" className="px-4 mr-4" onClick={this.props.closeEquipmentForm}>Close Equipment Form</Button> */}
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInputSearch name="lead_equipmentType" cStyle="widthone" label="Equipment Type *" placeholder="Select Equipment Type" value={this.props.equipmentForm.lead_equipmentType_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.props.equipmentTypeDropDownList}>
                        </SelectInputSearch>
                        <span className="lead_equipmentType_error">{this.props.equipmentForm.lead_equipmentType_error}</span>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupmod">
                            <Form.Label className="font_stle">Make</Form.Label>
                            <Form.Control type="text" name="lead_make" placeholder="Select Make" value={this.props.equipmentForm.lead_make || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_make_error">{this.props.equipmentForm.lead_make_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupPhno">
                            <Form.Label className="font_stle">
                                Model</Form.Label>
                            <Form.Control type="text" name="lead_modal" placeholder="Equipment Modal" value={this.props.equipmentForm.lead_modal || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_modal_error">{this.props.equipmentForm.lead_modal_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <SelectInputSearch name="lead_year" cStyle="widthone" label="Minimum Year" placeholder="Select Minimum Year" value={this.props.equipmentForm.lead_year_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.props.yearDropDown}>
                        </SelectInputSearch>
                        <span className="lead_year_error">{this.props.equipmentForm.lead_year_error}</span>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupCapty">
                            <Form.Label className="font_stle">Capacity</Form.Label>
                            <Form.Control type="text" name="lead_capacity" placeholder="Capacity of Equipment" value={this.props.equipmentForm.lead_capacity || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_capacity_error">{this.props.equipmentForm.lead_capacity_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupJob">
                            <Form.Label className="font_stle">Job Location</Form.Label>
                            <Form.Control type="text" name="lead_location" placeholder="Location of Work" value={this.props.equipmentForm.lead_location || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_location_error">{this.props.equipmentForm.lead_location_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <CalenderInput name="lead_startDate" label="Expected Start Date*" placeholder="Expected Start Date" onChange={this.props.equipInputChangeHandlerDate} startDate={this.props.startDate} minDate={new Date()} />
                        <span className="lead_startDate_error">{this.props.equipmentForm.lead_startDate_error}</span>
                    </Col>
                    <Col md={3}>
                        <SelectInputSearch name="lead_workingUnits" cStyle="widthone" label="Lead Type" placeholder="Select Lead Type" value={this.props.equipmentForm.lead_workingUnits_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.workingUnitsDropDown}></SelectInputSearch>

                        <span className="lead_workingUnits_error">{this.props.equipmentForm.lead_workingUnits_error}</span>
                    </Col>
                </Form.Row>













                <Form.Row className="mt-3">
                    <Col md={3}>
                        <SelectInputSearch name="lead_state" cStyle="widthone" label="State" placeholder="Select State" value={this.props.equipmentForm.lead_state_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.props.statesDropDown.map(t => ({ value: t.id, label: t.name, name: 'lead_state' }))}></SelectInputSearch>
                        <span className="lead_state_error">{this.props.equipmentForm.lead_state_error}</span>
                    </Col>
                    <Col md={3}>
                        <SelectInputSearch name="lead_district" cStyle="widthone" label="District / Known Area" placeholder="Select District" value={this.props.equipmentForm.lead_district_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.districtsDropDown.map(t => ({ value: t.id, label: t.name, name: 'lead_district' }))}></SelectInputSearch>
                        <span className="lead_district_error">{this.props.equipmentForm.lead_district_error}</span>
                    </Col>

                    <Col md={3}>
                        <Form.Group controlId="formGroupprStage">
                            <Form.Label className="font_stle">
                                Project Stage</Form.Label>
                            <Form.Control type="text" name="lead_projectStage" placeholder="Stage of Project" value={this.props.equipmentForm.lead_projectStage || ''} onChange={this.props.equipInputChangeHandler} />
                        </Form.Group>
                        <span className="lead_projectStage_error">{this.props.equipmentForm.lead_projectStage_error}</span>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupQty">
                            <Form.Label className="font_stle">
                                Quantity</Form.Label>
                            <Form.Control type="number" name="lead_quantity" placeholder="Quantity" value={this.props.equipmentForm.lead_quantity || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_quantity_error">{this.props.equipmentForm.lead_quantity_error}</span>
                        </Form.Group>
                    </Col>
                </Form.Row>












                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group controlId="formGroupHD">
                            <Form.Label className="font_stle">
                                Operation hours per day</Form.Label>
                            <Form.Control type="number" name="lead_workingHoursPerDay" placeholder="Operation hours per day" value={this.props.equipmentForm.lead_workingHoursPerDay || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_workingHoursPerDay_error">{this.props.equipmentForm.lead_workingHoursPerDay_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupPM">
                            <Form.Label className="font_stle">
                                Operation days per month</Form.Label>
                            <Form.Control type="number" name="lead_workingCount" placeholder="Operation days per month" value={this.props.equipmentForm.lead_workingCount || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_workingCount_error">{this.props.equipmentForm.lead_workingCount_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupHM">
                            <Form.Label className="font_stle">
                                Operation hours per month</Form.Label>
                            <Form.Control type="number" name="lead_workingTotalCount" placeholder="Operation hours per month" value={this.props.equipmentForm.lead_workingTotalCount || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_workingTotalCount_error">{this.props.equipmentForm.lead_workingTotalCount_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupTOW">
                            <Form.Label className="font_stle">
                                Type of Work</Form.Label>
                            <Form.Control type="text" name="lead_typeOfWork" placeholder="Type of Work" value={this.props.equipmentForm.lead_typeOfWork || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_typeOfWork_error">{this.props.equipmentForm.lead_typeOfWork_error}</span>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_shiftType" cStyle="widthone" label="Shift Type" placeholder="Select Shift Type" value={this.props.equipmentForm.lead_shiftType_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.shiftTypeDropDown}>
                            </SelectInputSearch>
                            <span className="lead_shiftType_error">{this.props.equipmentForm.lead_shiftType_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_transportation" cStyle="widthone" label="Shift Type" placeholder="Select Transportation" value={this.props.equipmentForm.lead_transportation || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.transportationDropDown}>
                            </SelectInputSearch>
                            <span className="lead_transportation_error">{this.props.equipmentForm.lead_transportation_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorAccommodation" cStyle="widthone" label="Accommodation" placeholder="Select Accommodation" value={this.props.equipmentForm.lead_operatorAccommodation_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.accommodationDropDown}>
                            </SelectInputSearch>
                            <span className="lead_operatorAccommodation_error">{this.props.equipmentForm.lead_operatorAccommodation_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorFood" cStyle="widthone" label="Food" placeholder="Select Food" value={this.props.equipmentForm.lead_operatorFood_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.foodDropDown}>
                            </SelectInputSearch>
                            <span className="lead_operatorFood_error">{this.props.equipmentForm.lead_operatorFood_error}</span>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row className="mt-3">
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorAllowance" cStyle="widthone" label="Operator Allowance" placeholder="Select Operator Allowance" value={this.props.equipmentForm.lead_operatorAllowance_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.allowanceDropDown}>
                            </SelectInputSearch>
                            <span className="lead_operatorAllowance_error">{this.props.equipmentForm.lead_operatorAllowance_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_vechileDocuments" cStyle="widthone" label="Vehicle Documents" placeholder="Select Vehical Documents" value={this.props.equipmentForm.lead_vechileDocuments_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.licenseDropDown}>
                            </SelectInputSearch>
                            <span className="lead_vechileDocuments_error">{this.props.equipmentForm.lead_vechileDocuments_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_operatorLicense" cStyle="widthone" label="Operator License" placeholder="Select Operator License" value={this.props.equipmentForm.lead_operatorLicense_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.operatorDropDown}>
                            </SelectInputSearch>
                            <span className="lead_operatorLicense_error">{this.props.equipmentForm.lead_operatorLicense_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <SelectInputSearch name="lead_safetyMeasures" cStyle="widthone" label="Safety Measures" placeholder="Select safety Measures" value={this.props.equipmentForm.lead_safetyMeasures_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isopen={this.props.isOpenD} options={this.state.safetymgmtDropDown}>
                            </SelectInputSearch>
                            <span className="lead_safetyMeasures_error">{this.props.equipmentForm.lead_safetyMeasures_error}</span>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col md={3}>
                        <Form.Group controlId="formGroupOperatorBatha">
                            <Form.Label className="font_stle">Operator Batha</Form.Label>
                            <Form.Control type="text" name="lead_operatorBatha" placeholder="Operator Batha" value={this.props.equipmentForm.lead_operatorBatha || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_operatorBatha_error">{this.props.equipmentForm.lead_operatorBatha_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group controlId="formGroupLeadPrice">
                            <Form.Label className="font_stle">Lead Price</Form.Label>
                            <Form.Control type="text" name="lead_price" placeholder="Lead Price" value={this.props.equipmentForm.lead_price || ''} onChange={this.props.equipInputChangeHandler} />
                            <span className="lead_price_error">{this.props.equipmentForm.lead_price_error}</span>
                        </Form.Group>
                    </Col>
                    <Col md={3}><SelectInputSearch name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority" value={this.props.equipmentForm.lead_priority_name || ''} onChange={this.props.equipInputChangeHandlerSelect} isOpenD={this.props.isOpenD} options={this.state.leadPriorityDropDown}></SelectInputSearch></Col>
                </Form.Row>
                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="font_stle">Payment Terms</Form.Label><Form.Control as="textarea" value={this.props.equipmentForm.lead_paymentTerms || ''} onChange={this.props.equipInputChangeHandler} rows="4" name="lead_paymentTerms" placeholder="Payment Terms" />
                            <span className="lead_paymentTerms_error">{this.props.equipmentForm.lead_paymentTerms_error}</span>
                        </Form.Group>
                    </Col>

                </Form.Row>
                <Form.Row className="mt-3 form-modal">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Label className="font_stle">Remarks</Form.Label><Form.Control as="textarea" value={this.props.equipmentForm.lead_remarks || ''} onChange={this.props.equipInputChangeHandler} rows="4" name="lead_remarks" placeholder="Any comments to go with the equipment" />
                            <span className="lead_remarks_error">{this.props.equipmentForm.lead_remarks_error}</span>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button variant="primary" size="sm" className="px-4 mr-4" onClick={this.props.addEquipForm}>Add Equipments</Button>
                <Button variant="danger" size="sm" className="px-4 mr-4" onClick={this.props.closeEquipmentForm}>Close Equipment</Button>
                <Button type="submit" onClick={this.props.createNewLead} variant="success" size="sm" className="px-4 float-right" >Submit Lead</Button>
            </React.Fragment>
        );
    }
}
export default AddFields;
















