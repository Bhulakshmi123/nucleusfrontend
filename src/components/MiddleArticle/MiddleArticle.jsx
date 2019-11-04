import React, { Component } from 'react';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput';
import RadioInput from '../FormFields/RadioInput';
import TextArea from '../FormFields/TextArea';
import { Button } from 'react-bootstrap';
import '../Modal/Modal.css';
import './MiddleArticle.css';
class MiddleArticle extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <h2><b>EQUIPMENT ID: {this.props.formId}</b></h2> */}
                <div className="innerDivCompact card">
                    <div className="row">
                        <div className="col-md-6 form-modal">
                            <TextInput type="text" label="Price" />
                        </div>
                        <div className="col-md-6 form-modal">
                            <SelectInput name="Lead Source" cStyle="widthtwo" label="Duration" />
                        </div>
                    </div>
                    <div className="row martp">
                        <div className="col-md-6 form-modal">
                            <CalenderInput name="Lead Date*" label="Start Date" />
                        </div>
                        <div className="col-md-6 form-modal">
                            <SelectInput name="Lead Source" cStyle="widthtwo" label="Transportation" />
                        </div>
                    </div>
                    <div className="row martp">
                        <div className="col-md-6">
                            <label>Shift Type</label>
                            <RadioInput name="Single" label="Single" />
                            <RadioInput name="Double" label="Double" />
                        </div>
                        <div className="col-md-6 form-modal">
                            <TextInput type="text" label="Shift 1 Work Duration" />
                        </div>
                    </div>
                    <div className="row martp">
                        <div className="col-md-6 form-modal">
                            <TextInput type="text" label="Operator Batha" />
                        </div>
                        <div className="col-md-6 form-modal">
                            <SelectInput name="Lead Source" cStyle="widthtwo" label="Operator Food" />
                        </div>
                    </div>
                    <div className="row martp">
                        <div className="col-md-12 form-modal">
                            <TextArea name="Payment Terms" label="Payment Terms" ></TextArea>
                        </div>
                    </div>
                    <div className="row martp">
                        <div className="col-md-12 form-modal">
                            <TextArea name="Payment Terms" label="Remarks"></TextArea>
                        </div>
                    </div>
                    <div className="row martp btn_left">
                        <Button bsStyle='primary'>Submit Details</Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default MiddleArticle;
