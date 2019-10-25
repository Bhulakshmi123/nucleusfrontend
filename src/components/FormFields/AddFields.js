import React from 'react';
import { Button} from 'react-bootstrap';
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
                    <SelectInput name="Lead Priority" placeholder="Lead Priority"></SelectInput>
                </div>
                <div className="col-md-3">
                    <SelectInput name="Lead Priority" placeholder="Lead Priority"></SelectInput>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <SelectInput name="Lead Priority" placeholder="Lead Priority"></SelectInput>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <CalenderInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <SelectInput name="Lead Priority" placeholder="Lead Priority"></SelectInput>
                </div>
                <div className="col-md-3">
                    <SelectInput name="Lead Priority" placeholder="Lead Priority"></SelectInput>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
                <div className="col-md-3">
                    <TextInput name="Company Name" placeholder="Company Name"/>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 form-modal">
                    <Checkbox name="Day"/>
                    <Checkbox name="Night"/>
                </div>
                <div className="col-md-3 form-modal">
                    <Checkbox name="To"/>
                    <Checkbox name="From"/>
                </div>
                <div className="col-md-3 radio-modal">
                    <RadioInput name="Yes"/>
                    <RadioInput name="No"/>
                </div>
                <div className="col-md-3 radio-modal">
                    <RadioInput name="Yes"/>
                    <RadioInput name="No"/>
                </div>
            </div>
            <div className="row martp">
                <div className="col-md-3 radio-modal radio_left">
                    <RadioInput name="Yes"/>
                    <RadioInput name="No"/>
                </div>
                <div className="col-md-3 radio-modal radio_left">
                    <RadioInput name="Required"/>
                    <RadioInput name="Not Required"/>
                </div>
                <div className="col-md-3 radio-modal">
                    <RadioInput name="Required"/>
                    <RadioInput name="Not Required"/>
                </div>
                <div className="col-md-3 radio-modal">
                    <RadioInput name="Required"/>
                    <RadioInput name="Not Required"/>
                </div>
            </div>
            <div className="col-md-12 martp row form-modal">
                <TextArea name="Payment Terms" placeholder="Payment Terms"></TextArea>
            </div>
            <div className="col-md-12 martp row form-modal">
                <TextArea name="Remarks" placeholder="Any comments to go with the equipment"></TextArea>
            </div>
        </div>
    );
}
export default AddFields;