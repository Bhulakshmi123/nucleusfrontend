import React, { Component } from 'react';
import { Button, Row, Col, Table } from 'react-bootstrap';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';

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
                    <Col md={3}><TextInput type="text" placeholder="Phone No." name="fname" label="Phone No.*" /></Col>
                    <Col md={3}><CalenderInput name="Lead Date*" label="Lead Date*" placeholder="Lead Date" /></Col>
                    <Col md={3}><TextInput name="Renter Name*" label="Renter Name*" placeholder="Renter Name" /></Col>
                    <Col md={3}><TextInput name="Renter Email" label="Renter Email" placeholder="Renter Email" /></Col>
                </Row>
                <Row className="mt-3">
                    <Col md={3} className="form-modal">
                        <label>Lead Executive</label>
                        <div className="my-auto py-1 px-0 text-primary text-uppercase">Albus Dumbledore </div>
                    </Col>
                    <Col md={3}><TextInput name="Alternate Phone no." label="Alternate Phone no." placeholder="Alternate Phone no." /></Col>
                    <Col md={3}><TextInput name="Company Name" label="Company Name" placeholder="Company Name" /></Col>
                    <Col md={3}><TextInput name="Designation" label="Designation" placeholder="Designation" /></Col>
                </Row>
                <Row className="mt-3">
                    <Col md={3}><SelectInput name="Lead Priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority"></SelectInput></Col>
                    <Col md={3}><SelectInput name="Lead Source" cStyle="widthone" label="Lead Source" placeholder="Lead Source" /></Col>
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
    );
}
export default BusiAddnewmodal;