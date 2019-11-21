import React, { Component } from 'react';
import { Button, Row, Col, Table } from 'react-bootstrap';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
class BusiAddnewmodal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEquipmentinfo: false,
            equipmentList: [],
            equipmentCount: 0,
            leadForm : {
                phone_no:'',
                // date_cal:'',
                // renter_nm:'',
                // renter_emil:'',
                // alt_phoneno:'',
                // com_name:'',
                // designation:'',
                // lead_priority:'',
                // lead_source:'',
                // equip_type:'',
                // selct_make:'',
                // equip_modal:'',
                // min_year:'',
                // capacity:'',
                // job_loc:'',
                // extd_start_dte:'',
                // no_month:'',
                // capacity:'',
                // job_loc:'',
                // extd_start_dte:'',
                // no_month:'',
                // state:'',
                // district_nm:'',
                // project_nm:'',
                // operation_hours:'',
                // operation_d_m:'',
                // qunatity:'',
                // operation_h_m:'',
                // type_of_work:'',



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
        const data = this.state
        console.log("hi", data)
    }
    openInputHandler = () => {
        this.setState({ isEquipmentinfo: true });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit}>
                    <Row>
                        <Col md={3}><TextInput type="text" placeholder="Phone No." name="phone_no" label="Phone No.*" /></Col>
                        <Col md={3}><CalenderInput name="date_cal" label="Lead Date*" placeholder="Lead Date" /></Col>
                        <Col md={3}><TextInput name="renter_nm" label="Renter Name*" placeholder="Renter Name" /></Col>
                        <Col md={3}><TextInput name="renter_emil" label="Renter Email" placeholder="Renter Email" /></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={3} className="form-modal">
                            <label>Lead Executive</label>
                            <div className="my-auto py-1 px-0 text-primary text-uppercase">Albus Dumbledore </div>
                        </Col>
                        <Col md={3}><TextInput name="alt_phoneno" label="Alternate Phone no." placeholder="Alternate Phone no." /></Col>
                        <Col md={3}><TextInput name="com_name" label="Company Name" placeholder="Company Name" /></Col>
                        <Col md={3}><TextInput name="designation" label="Designation" placeholder="Designation" /></Col>
                    </Row>
                    <Row className="mt-3">
                        <Col md={3}><SelectInput name="lead_priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority"></SelectInput></Col>
                        <Col md={3}><SelectInput name="lead_source" cStyle="widthone" label="Lead Source" placeholder="Lead Source" /></Col>
                    </Row>
                    <Row>
                        <Col className="my-3"><Button className="float-right" variant="primary" size="sm" onClick={this.openInputHandler}>Add Equipment</Button></Col>
                    </Row>
                    <Row>
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
                    </Row>
                    {this.state.isEquipmentinfo ? <AddFields /> : null}
                    <Button type="submit" variant="primary" size="sm" >Submit</Button>
                </form>
            </React.Fragment>
        )
    }
}
export default BusiAddnewmodal;