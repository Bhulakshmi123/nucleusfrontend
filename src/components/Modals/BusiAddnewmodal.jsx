import React, { Component } from 'react';
import { Modal, Button, Grid, Col, Row } from 'react-bootstrap';
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
            equipmentCount: 0
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        let name = e.target.name;
        let value = e.target.value;
        console.log(name);
        console.log(value);
        let count = this.state.equipmentCount;
        let equipmentList = this.state.equipmentList.slice();
        let singleEquipment = equipmentList[count]
        singleEquipment.name = value;
        //this.setState(equipmentList);
        console.log(this.state.equipmentList);
    }

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
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <TextInput
                                type="text"
                                placeholder="Phone No."
                                name="fname"
                                label="Phone No.*" />
                        </div>
                        <div className="col-md-3">
                            <CalenderInput name="Lead Date*" label="Lead Date*" placeholder="Lead Date" />
                        </div>
                        <div className="col-md-3">
                            <TextInput name="Renter Name*" label="Renter Name*" placeholder="Renter Name" />
                        </div>
                        <div className="col-md-3">
                            <TextInput name="Renter Email" label="Renter Email" placeholder="Renter Email" />
                        </div>
                    </div>
                    <div className="row martp">
                        <div className="col-md-3 form-modal">
                            <label>Lead Executive</label>
                            <p className="renter_nm">ANVESH REDDY</p>
                        </div>
                        <div className="col-md-3">
                            <TextInput name="Alternate Phone no." label="Alternate Phone no." placeholder="Alternate Phone no." />
                        </div>
                        <div className="col-md-3">
                            <TextInput name="Company Name" label="Company Name" placeholder="Company Name" />
                        </div>
                        <div className="col-md-3">
                            <TextInput name="Designation" label="Designation" placeholder="Designation" />
                        </div>
                    </div>
                    <div className="row martp">
                        <div className="col-md-3">
                            <SelectInput name="Lead Priority" cStyle="widthone" label="Lead Priority" placeholder="Lead Priority"></SelectInput>
                        </div>
                        <div className="col-md-3">
                            <SelectInput name="Lead Source" cStyle="widthone" label="Lead Source" placeholder="Lead Source" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <Button className="float-right" variant="primary" size="sm" onClick={this.openInputHandler}>Add Equipment</Button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-hover text-center">
                                <thead>
                                    <tr>
                                        <th>S. No.</th>
                                        <th>Equipment Name</th>
                                        <th>Make</th>
                                        <th>Model</th>
                                        <th>Year</th>
                                        <th>edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><Button variant="primary" size="sm" block>Edit</Button></td>
                                        <td><Button variant="primary" size="sm" block>Delete</Button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {
                        this.state.isEquipmentinfo ? <AddFields /> : null
                    }
                    <Button type="submit" variant="primary"  size="sm" >Submit</Button>
                </form>

            </div>
        );
    }
}
export default BusiAddnewmodal;