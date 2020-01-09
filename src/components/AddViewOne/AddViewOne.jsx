import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import SelectInput from '../FormFields/SelectInput'
class AddViewOne extends Component {
    constructor(props) {
        super(props)
        let token = localStorage.getItem("tokenId");
        this.state = {
            token: token
        }
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render () {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="my-4">
                        <Col md={8}>
                            <h3 className="mb-0 my-auto text-capitalize">{this.props.formData.equipmentName}</h3>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="danger" size="sm" block onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'CLOSED', 'NEW')}>Remove</Button>
                        </Col>
                        <Col md={2} className="my-auto">
                            <Button variant="success" size="sm" block onClick={() => this.props.statusChanger(this.props.formData.leadDet_id, 'ACTIVATED', 'NEW')}>Activate Lead</Button>
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col md={12}>
                            <React.Fragment>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <SelectInput name="equip_type" cStyle="widthone" label="Equipment Type" placeholder={this.props.formData.leadDet_id === null ? 'Select Equipment Type' : this.props.formData.leadDet_id} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInput>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <SelectInput name="equip_type" cStyle="widthone" label="Make" placeholder={this.props.formData.leadDet_companyType === null ? 'Select Equipment Type' : this.props.formData.leadDet_companyType} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInput>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Model">Model</label>
                                            <input type="email" className="form-control" id="Model" aria-describedby="emailHelp" placeholder={this.props.formData.equipmentName === null ? 'Select Equipment Type' : this.props.formData.equipmentName} value={this.props.formData.equipmentName} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <SelectInput name="equip_type" cStyle="widthone" label="Minimum Year" placeholder={this.props.formData.leadDet_year === null ? 'Select Minimum Year' : this.props.formData.leadDet_year} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInput>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Capacity">Capacity</label>
                                            <input type="email" className="form-control" id="Capacity" aria-describedby="emailHelp" placeholder="Enter Capacity" value={this.props.formData.leadDet_capacity} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="jobLocation">Job Location</label>
                                            <input type="email" className="form-control" id="jobLocation" aria-describedby="emailHelp" placeholder="Enter JobLocation" value={this.props.formData.leadDet_location} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="expectedStartDate">Expected Start Date</label>
                                            <input type="email" className="form-control" id="expectedStartDate" aria-describedby="emailHelp" placeholder="Enter Expected Date" value={this.props.formData.leadDet_startDate} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="noOfMonths">No Of Months</label>
                                            <input type="email" className="form-control" id="noOfMonths" aria-describedby="emailHelp" placeholder="Enter No of Months" value={this.props.formData.leadDet_workingTotalCount} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <SelectInput name="equip_type" cStyle="widthone" label="State" placeholder={this.props.formData.equipmentName === null ? 'Select State' : this.props.formData.equipmentName} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInput>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <SelectInput name="equip_type" cStyle="widthone" label="District" placeholder={this.props.formData.leadDet_location === null ? 'Select District' : this.props.formData.leadDet_location} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInput>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="stage">Stage</label>
                                            <input type="email" className="form-control" id="stage" aria-describedby="emailHelp" placeholder="Enter Stage" value={this.props.formData.leadDet_price} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="operationHoursPerDay">Operation Hours Per Day</label>
                                            <input type="email" className="form-control" id="operationHoursPerDay" aria-describedby="emailHelp" placeholder="Enter No of H/D" value={this.props.formData.leadDet_workingHoursPerDay} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="operationDaysPerMonth">Operation Days Per Month</label>
                                            <input type="email" className="form-control" id="operationDaysPerMonth" aria-describedby="emailHelp" placeholder="Enter No of D/P" value={this.props.formData.leadDet_workingCount} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Quantity</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Quantity" value={this.props.formData.leadDet_quantity} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="quantity">Operation Hours Per Month</label>
                                            <input type="email" className="form-control" id="quantity" aria-describedby="emailHelp" placeholder="Enter No Of H/P" value={this.props.formData.leadDet_workingTotalCount} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="typeOfWork">Type Of Work</label>
                                            <input type="email" className="form-control" id="typeOfWork" aria-describedby="emailHelp" placeholder="Enter Type of Work" value={this.props.formData.leadDet_operatorFood} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="shiftType">Shift Type</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Day</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Night</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Transportation">Transportation</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">One Side</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Two Side</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Accommodation">Accommodation</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Company Provides</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Self Provided</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Food">Food</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Company Provides</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Self Provided</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="OperatorAllowance">Operator Allowance</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Yes</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">No</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Vehicle Documents">Vehicle Documents</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Required</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Not Required</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Operator License">Operator License</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Required</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Not Required</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Safety Measures">Safety Measures</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Required</div>
                                            </div>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">
                                                        <input type="checkbox" aria-label="Checkbox for following text input"></input>
                                                    </div>
                                                </div>
                                                <div className="my-auto font-size-08">Not Required</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12} lg={12} sm={12}>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Payment Terms</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Payment Terms" value={`${this.props.formData.leadDet_paymentTerms},${this.props.formData.equipmentName}`}></textarea>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="pb-5 mb-5">
                                    <Col md={12} lg={12} sm={12}>
                                        <div className="form-group">
                                            <label htmlFor="exampleFormControlTextarea1">Remarks</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Any Remarks to go with the Equipments" value={`${this.props.formData.leadDet_remarks}, ${this.props.formData.leadDet_uuid}`} ></textarea>
                                        </div>
                                    </Col>
                                </Row>
                            </React.Fragment>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
export default AddViewOne;
