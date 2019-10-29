import React from 'react';
import { Button , Modal} from 'react-bootstrap';
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import '../Modal/Modal.css';
import InputName from './SelectInput';
import FileInput from './FileInput';
import RadioInput from './RadioInput';
import Checkbox from './Checkbox';
import TextArea from './TextArea';
import CalenderInput from './CalenderInput';
const AddFields = props =>{
    return(
        <div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <SelectInput name="Equipment Type *" label="Equipment Type *" placeholder="Select Equipment Type"></SelectInput>
                </div>
                <div className="col-md-3">
                    <SelectInput name="Make" label="Make" placeholder="Select Make"></SelectInput>
                </div>
                <div className="col-md-3">
                    <TextInput name="Model" label="Model" placeholder="Equipment Modal"/>
                </div>
                <div className="col-md-3">
                    <SelectInput name="Minimum Year" label="Minimum Year" placeholder="Select Minimum Year"></SelectInput>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <TextInput name="Capacity" label="Capacity" placeholder="Capacity of Equipment"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Job Location" label="Job Location" placeholder="Location of Work"/>
                </div>
                <div className="col-md-3">
                    <CalenderInput name="Expected Start Date*" label="Expected Start Date*" placeholder="Expected Start Date"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="No. of months" label="No. of months" placeholder="Duration of Work"/>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <SelectInput name="State" label="State" placeholder="Select State"></SelectInput>
                </div>
                <div className="col-md-3">
                    <SelectInput name="District / Known Area" label="District / Known Area" placeholder="Select District or State"></SelectInput>
                </div>
                <div className="col-md-3">
                    <TextInput name="Project Stage" label="Project Stage" placeholder="Stage of Project"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Operation hours per day" label="Operation hours per day" placeholder="Operation hours per day"/>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <TextInput name="Operation days per month" label="Operation days per month" placeholder="Operation days per month"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Qunatity" label="Qunatity" placeholder="Qunatity"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Operation hours per month" label="Operation hours per month" placeholder="Operation hours per month"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Type of Work" label="Type of Work" placeholder="Type of Work"/>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <label>Shift Type</label>
                    <div>
                        <Checkbox name="Day" label="Day"/>
                        <Checkbox name="Night" label="Night"/>
                    </div>
                </div>
                <div className="col-md-3 form-modal">
                    <label>Transportation</label>
                    <div>
                        <Checkbox name="To" label="To"/>
                        <Checkbox name="From" label="From"/>
                    </div>
                </div>
                <div className="col-md-3 radio-modal">
                    <label>Accomodation</label>
                    <div>
                        <RadioInput name="Yes" label="Yes"/>
                        <RadioInput name="No" label="No"/>
                    </div>
                </div>
                <div className="col-md-3 radio-modal">
                    <label>Food</label>
                    <div>
                        <RadioInput name="Yes" label="Yes"/>
                        <RadioInput name="No" label="No"/>
                    </div>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 radio-modal radio_left">
                    <label>Operator Allowance</label>
                    <div>
                        <RadioInput name="Yes" label="Yes"/>
                        <RadioInput name="No" label="No"/>
                    </div>
                </div>
                <div className="col-md-3 radio-modal radio_left">
                    <label>Vehicle Documents</label>
                    <div>
                        <RadioInput name="Required" label="Required"/>
                        <RadioInput name="Not Required" label="Not Required"/>
                    </div>
                </div>
                <div className="col-md-3 radio-modal">
                    <label>Operator License</label>
                    <div>
                        <RadioInput name="Required" label="Required"/>
                        <RadioInput name="Not Required"label="Not Required"/>
                    </div>
                </div>
                <div className="col-md-3 radio-modal">
                    <label>Safety Measures</label>
                    <div>
                        <RadioInput name="Required" label="Required"/>
                        <RadioInput name="Not Required"label="Not Required"/>
                    </div>
                </div>
            </div>
            <div className="martp row form-modal">
                <div className="col-md-12">
                    <TextArea name="Payment Terms" label="Payment Terms" placeholder="Payment Terms"></TextArea>
                </div>
            </div>
            <div className="martp row form-modal">
                <div className="col-md-12">
                    <TextArea name="Remarks" label="Remarks" placeholder="Any comments to go with the equipment"></TextArea>
                </div>
            </div>
            <Modal.Footer>
                        {/* <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button> */}
                        <Button bsStyle="primary">Add</Button>
            </Modal.Footer>
        </div>
    );
}
export default AddFields;