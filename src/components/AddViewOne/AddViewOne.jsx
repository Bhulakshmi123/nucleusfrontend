import React, { Component } from 'react';
import { Container, Col, Row, Button, Form } from 'react-bootstrap';
import SelectInputSearch from '../FormFields/SelectInputSearch';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SweetAlert from 'react-bootstrap-sweetalert';
import AddFieldsPro from '../FormFields/AddFieldsPro';
class AddViewOne extends Component {
    constructor(props) {
        super(props)
        // console.log('Add View One', this.props);
        let token = localStorage.getItem("tokenId");
        this.state = {
            token: token,
            isSweetAlertShowing: false,
            btnTitle: '',
            propsCommandText: ''
        }
    }
    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    openSweetAlert = (btnTitleValue, propsCommandTextValue) => {
        this.setState({ isSweetAlertShowing: true });
        this.setState({ btnTitle: btnTitleValue });
        this.setState({ propsCommandText: propsCommandTextValue });
    }
    closeSweetAlert = () => {
        this.setState({ isSweetAlertShowing: false });
    }
    inputChangeHandlerForSelect = (e) => {
        let leadForm = this.state.leadForm;
        let placeHolder = e.name + '_name';
        leadForm = {
            ...leadForm,
            [e.name]: e.value,
            [placeHolder]: e.label
        }
        this.setState({
            leadForm: leadForm,
            isOpenFormDropDown: false
        }, () => { console.log(this.state.leadForm) });
    };
    successNotification = () => {
        toast("Lead Details are Updated", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'text-center bg-dark text-white fontGilroyBold bor-rad-05'
        });
    };
    failedNotification = () => {
        toast("Failed to Updated Lead Details", {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: 'text-center bg-dark text-white fontGilroyBold bor-rad-05'
        });
    };
    render () {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row className="my-4">
                        <Col md={8} className="my-auto">
                            <h3 className="mb-0 my-auto text-capitalize">{this.props.formData.equipmentName}</h3>
                        </Col>
                        <Col md={2} className={`my-auto ${this.props.buttonStatus}`}>
                            <Button variant="danger" size="sm" block onClick={() => this.openSweetAlert('Remove', 'DELETED')}>Remove</Button>
                        </Col>
                        <Col md={2} className={`my-auto ${this.props.buttonStatus}`}>
                            <Button variant="success" size="sm" block onClick={() => this.openSweetAlert('Activate', 'ACTIVATED')}>Activate Lead</Button>
                        </Col>
                        <Col md={4} className={`my-auto ${this.props.labelStatus}`}>
                            <div className="text-white bg-brickRed text-center p-1 bor-rad-30 text-uppercase">This Lead Was Deleted</div>
                        </Col>
                    </Row>
                    <AddFieldsPro formData={this.props.formData}></AddFieldsPro>
                    {/* <Row className="mt-4">
                        <Col md={12}>
                            <React.Fragment>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <SelectInputSearch name="equip_type" cStyle="widthone" label="Equipment Type" placeholder={this.props.formData.leadDet_id === null ? 'Select Equipment Type' : this.props.formData.leadDet_id} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInputSearch>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <SelectInputSearch name="equip_type" cStyle="widthone" label="Make" placeholder={this.props.formData.leadDet_companyType === null ? 'Select Equipment Type' : this.props.formData.leadDet_companyType} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInputSearch>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Model">Model</label>
                                            <input type="text" className="form-control" id="Model" aria-describedby="emailHelp" placeholder={this.props.formData.equipmentName === null ? 'Select Equipment Type' : this.props.formData.equipmentName} value={this.props.formData.equipmentName} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <SelectInputSearch name="equip_type" cStyle="widthone" label="Minimum Year" placeholder={this.props.formData.leadDet_year === null ? 'Select Minimum Year' : this.props.formData.leadDet_year} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInputSearch>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="Capacity">Capacity</label>
                                            <input type="text" className="form-control" id="Capacity" aria-describedby="emailHelp" placeholder="Enter Capacity" value={this.props.formData.leadDet_capacity} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="jobLocation">Job Location</label>
                                            <input type="text" className="form-control" id="jobLocation" aria-describedby="emailHelp" placeholder="Enter JobLocation" value={this.props.formData.leadDet_location} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="expectedStartDate">Expected Start Date</label>
                                            <input type="text" className="form-control" id="expectedStartDate" aria-describedby="emailHelp" placeholder="Enter Expected Date" value={this.props.formData.leadDet_startDate} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="noOfMonths">No Of Months</label>
                                            <input type="text" className="form-control" id="noOfMonths" aria-describedby="emailHelp" placeholder="Enter No of Months" value={this.props.formData.leadDet_workingTotalCount} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <SelectInputSearch name="equip_type" cStyle="widthone" label="State" placeholder={this.props.formData.equipmentName === null ? 'Select State' : this.props.formData.equipmentName} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInputSearch>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <SelectInputSearch name="equip_type" cStyle="widthone" label="District" placeholder={this.props.formData.leadDet_location === null ? 'Select District' : this.props.formData.leadDet_location} defaultValue={this.props.formData.leadDet_modal} onChange={this.onChange} ></SelectInputSearch>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="stage">Stage</label>
                                            <input type="text" className="form-control" id="stage" aria-describedby="emailHelp" placeholder="Enter Stage" value={this.props.formData.leadDet_price} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="operationHoursPerDay">Operation Hours Per Day</label>
                                            <input type="text" className="form-control" id="operationHoursPerDay" aria-describedby="emailHelp" placeholder="Enter No of H/D" value={this.props.formData.leadDet_workingHoursPerDay} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="operationDaysPerMonth">Operation Days Per Month</label>
                                            <input type="text" className="form-control" id="operationDaysPerMonth" aria-describedby="emailHelp" placeholder="Enter No of D/P" value={this.props.formData.leadDet_workingCount} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Quantity</label>
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Quantity" value={this.props.formData.leadDet_quantity} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="quantity">Operation Hours Per Month</label>
                                            <input type="text" className="form-control" id="quantity" aria-describedby="emailHelp" placeholder="Enter No Of H/P" value={this.props.formData.leadDet_workingTotalCount} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                    <Col md={3} lg={3} xs={12}>
                                        <div className="form-group">
                                            <label htmlFor="typeOfWork">Type Of Work</label>
                                            <input type="text" className="form-control" id="typeOfWork" aria-describedby="emailHelp" placeholder="Enter Type of Work" value={this.props.formData.leadDet_operatorFood} onChange={this.onChange}></input>
                                        </div>
                                    </Col>
                                </Row>
                                <Form.Row className="mt-3">
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_shiftType" cStyle="widthone" label="Shift Type" placeholder="Select Shift Type">
                                            </SelectInputSearch>
                                            <span className="lead_shiftType_error"></span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_transportation" cStyle="widthone" label="Shift Type" placeholder="Select Transportation" >
                                            </SelectInputSearch>
                                            <span className="lead_transportation_error"></span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_operatorAccommodation" cStyle="widthone" label="Accommodation" placeholder="Select Accommodation" >
                                            </SelectInputSearch>
                                            <span className="lead_operatorAccommodation_error"></span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_operatorFood" cStyle="widthone" label="Food" placeholder="Select Food">
                                            </SelectInputSearch>
                                            <span className="lead_operatorFood_error"></span>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mt-3">
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_operatorAllowance" cStyle="widthone" label="Operator Allowance" placeholder="Select Operator Allowance">
                                            </SelectInputSearch>
                                            <span className="lead_operatorAllowance_error"></span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_vechileDocuments" cStyle="widthone" label="Vehicle Documents" placeholder="Select Vehical Documents">
                                            </SelectInputSearch>
                                            <span className="lead_vechileDocuments_error"></span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_operatorLicense" cStyle="widthone" label="Operator License" placeholder="Select Operator License" >
                                            </SelectInputSearch>
                                            <span className="lead_operatorLicense_error"></span>
                                        </Form.Group>
                                    </Col>
                                    <Col md={3}>
                                        <Form.Group>
                                            <SelectInputSearch name="lead_safetyMeasures" cStyle="widthone" label="Safety Measures" placeholder="Select safety Measures" >
                                            </SelectInputSearch>
                                            <span className="lead_safetyMeasures_error"></span>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mt-3 form-modal">
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="font_stle">Payment Terms</Form.Label><Form.Control as="textarea" rows="4" name="lead_paymentTerms" placeholder="Payment Terms" />
                                            <span className="lead_paymentTerms_error"></span>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mt-3 form-modal">
                                    <Col md={12}>
                                        <Form.Group>
                                            <Form.Label className="font_stle">Remarks</Form.Label><Form.Control as="textarea" rows="4" name="lead_remarks" placeholder="Any comments to go with the equipment" />
                                            <span className="lead_remarks_error"></span>
                                        </Form.Group>
                                    </Col>
                                </Form.Row>
                                <Form.Row className="mt-3 mb-5 form-modal">
                                    <Col md={12} className="mb-5">
                                        <Button variant="primary" size="sm" className={`fontGilroyBold float-right ${this.props.buttonStatus}`} onClick={this.successNotification}>Update Details</Button>
                                    </Col>
                                </Form.Row>
                            </React.Fragment>
                        </Col>
                    </Row> */}
                </Container>
                {
                    this.state.isSweetAlertShowing ?
                        <SweetAlert
                            warning
                            title="Are You Sure ?"
                            onConfirm={this.closeSweetAlert}
                            onCancel={this.closeSweetAlert}
                            timeout={5000}
                            customButtons={
                                <React.Fragment>
                                    <Button variant="danger" className="w-30 m-2" size="sm" onClick={this.closeSweetAlert}>Close</Button>
                                    <Button variant="primary" className="w-30 m-2" size="sm" onClick={() => { this.props.statusChanger(this.props.formData.leadDet_id, this.state.propsCommandText, 'NEW', this.props.formData.equipmentName); this.closeSweetAlert() }}>{this.state.btnTitle}</Button>
                                </React.Fragment>
                            }
                        >
                            Please Click {this.state.btnTitle} to {this.state.btnTitle} the Lead
                        </SweetAlert>
                        : null
                }
            </React.Fragment>
        )
    }
}
export default AddViewOne;
