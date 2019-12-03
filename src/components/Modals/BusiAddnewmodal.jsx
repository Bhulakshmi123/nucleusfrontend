import React, { Component } from 'react';
import { Button, Col, Form, Card, Row, Table} from 'react-bootstrap';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
import { addLead } from '../../redux/actions/index';
import { connect } from 'react-redux';

class BusiAddnewmodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEquipmentinfo: false,
            equipmentList: [],
            equipmentCount: 0,
            leadForm: {
                phone_no: '',
                date_cal:'',
                renter_nm:'',
                renter_emil:'',
                alt_phoneno:'',
                com_name:'',
                designation:'',
                lead_priority:'',
                lead_source:'',
                equip_type:'',
                selct_make:'',
                equip_modal:'',
                min_year:'',
                capacity:'',
                job_loc:'',
                extd_start_dte:'',
                no_month:'',
                capacity:'',
                job_loc:'',
                extd_start_dte:'',
                no_month:'',
                state:'',
                district_nm:'',
                project_nm:'',
                operation_hours:'',
                operation_d_m:'',
                qunatity: '',
                operation_h_m:'',
                type_of_work:'',



            }
        }
    }
    // handleChange = (e) => {
    //             e.preventDefault();
    //             let name = e.target.name;
    //             let value = e.target.value;
    //             console.log(name);
    //             console.log(value);
    //             let count = this.state.equipmentCount;
    //             let equipmentList = this.state.equipmentList.slice();
    //             let singleEquipment = equipmentList[count]
    //             singleEquipment.name = value;
    //             //this.setState(equipmentList);
    //             console.log(this.state.equipmentList);
    //         }

    onSubmit = (e) => {
        e.preventDefault();
        let data = this.state;
        data = this.state.leadForm;
        console.log("hi", data)
        this.props.addLead(data);
    }
    openInputHandler = () => {
        this.setState({ isEquipmentinfo: true });
    }
    formInputHandler = () => {
        this.setState({ phone_no: '' });
    }

    inputChangeHandler = (e) => {
        let leadForm = this.state.leadForm;
        leadForm = {
            ...leadForm,
            [e.target.name]: e.target.value
        }
        this.setState({
            leadForm: leadForm
        });
    }

    render() {
        return (
            <React.Fragment>
                <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                        <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Phone No.*</Form.Label><Form.Control name="phone_no" placeholder="Phone No." onChange={this.inputChangeHandler} /></Form.Group></Col>
                        <Col md={3}><CalenderInput name="date_cal" label="Lead Date*" placeholder="Lead Date" onChange={this.inputChangeHandler} /></Col>
                        <Col md={3}><Form.Group controlId="formGroupRent"><Form.Label className="font_stle">Renter Name*</Form.Label><Form.Control name="renter_nm" label="Renter Name*" placeholder="Renter Name" onChange={this.inputChangeHandler}/></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupPhno"><Form.Label className="font_stle">Renter Email</Form.Label><Form.Control name="renter_emil" label="Renter Email" placeholder="Renter Email" onChange={this.inputChangeHandler}/></Form.Group></Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        <Col md={3} className="form-modal">
                            <label>Lead Executive</label>
                            <div className="my-auto py-1 px-0 text-primary text-uppercase">Albus Dumbledore </div>
                        </Col>
                        <Col md={3}><Form.Group controlId="formGroupaltPhno"><Form.Label className="font_stle">Alternate Phone no.</Form.Label><Form.Control name="alt_phoneno" label="Alternate Phone no." placeholder="Alternate Phone no." onChange={this.inputChangeHandler}/></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupCom_name"><Form.Label className="font_stle">Company Name</Form.Label><Form.Control name="com_name" label="Company Name" placeholder="Company Name" onChange={this.inputChangeHandler}/></Form.Group></Col>
                        <Col md={3}><Form.Group controlId="formGroupDesig"><Form.Label className="font_stle">Designation</Form.Label><Form.Control name="designation" label="Designation" placeholder="Designation" onChange={this.inputChangeHandler}/></Form.Group></Col>
                    </Form.Row>
                    <Form.Row className="mt-3">
                        <Col md={3}><SelectInput name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority" onChange={this.inputChangeHandler}></SelectInput></Col>
                        <Col md={3}><SelectInput name="lead_source" cStyle="widthone" label="Lead Source" placeholder="Lead Source" onChange={this.inputChangeHandler}/></Col>
                    </Form.Row>
                    <Form.Row>
                        <Col className="my-3"><Button className="float-right" variant="primary" size="sm" onClick={this.openInputHandler}>Add Equipment</Button></Col>
                    </Form.Row>
                    <Form.Row>
                        <Col md={12}>
                            <Table hover className="text-center">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Equipment Name</th>
                                        <th>Make</th>
                                        <th>Model</th>
                                        <th>Year</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle">01</td>
                                        <td className="align-middle">Muzan Kibutsaji</td>
                                        <td className="align-middle">Demon</td>
                                        <td className="align-middle">Edo Period</td>
                                        <td className="align-middle">5000</td>
                                        <td><Button variant="outline-primary" size="sm" block>Edit</Button></td>
                                        <td><Button variant="outline-primary" size="sm" block>Delete</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Form.Row>
                    {this.state.isEquipmentinfo ? <AddFields inputChangeHandler={this.inputChangeHandler} qunatity={this.state.leadForm.qunatity} /> : null}
                    <Button type="submit" variant="primary" size="sm" >Submit</Button>
                </Form>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addLead: leadForm => dispatch(addLead(leadForm))
    }
}

export default connect(null, mapDispatchToProps)(BusiAddnewmodal);