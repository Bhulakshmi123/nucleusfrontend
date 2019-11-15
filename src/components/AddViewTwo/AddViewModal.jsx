import React, { Component } from 'react';
import { Modal, Button} from 'react-bootstrap';
import '../../assets/css/form.css';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput';
import RadioInput from '../FormFields/RadioInput';
import TextArea from '../FormFields/TextArea';
import TimePickerinpt from '../FormFields/TimePickerinpt';
class AddViewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
        }
    }
    openModalHandler = () => {
        this.setState({ isShowing: true });
    }
    closeModalHandler = () => {
        this.setState({ isShowing: false });
    }

    render() {
        return (<span>
            <span onClick={this.openModalHandler}><i className="fab fa-gg-circle icon-fs"></i></span>
            <Modal show={this.state.isShowing} onHide={this.closeModalHandler}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <form>
                        <div className="row ">
                            <div className="col-md-6 form-modal">
                                <TextInput
                                    type="text"
                                    placeholder="Phone No."
                                    name="fname"
                                    value={this.state.fname}
                                    onChange={this.handleChange}
                                    label="Phone No.*" />
                            </div>
                            <div className="col-md-6 form-modal">
                                <SelectInput cStyle="widthone" label="Duration" placeholder="Select District or State" />
                            </div>
                        </div>
                        <div className="row martp">
                            <div className="col-md-6">
                                <CalenderInput name="Expected Start Date*" label="Expected Start Date*" placeholder="Expected Start Date" />
                            </div>
                            <div className="col-md-6 form-modal">
                                <SelectInput cStyle="widthone" label="Duration" placeholder="Select District or State" />
                            </div>
                        </div>
                        <div className="row martp">
                            <div className="col-md-6 radio-modal">
                                <label>Accomodation</label>
                                <div>
                                    <RadioInput name="Yes" label="Yes" />
                                    <RadioInput name="No" label="No" />
                                </div>
                            </div>
                            <div className="col-md-6 form-modal">
                                <label>Shift 1 Work Duration</label>
                                <div>
                                    <div className="col-md-3"><TimePickerinpt placeholder="From" /></div>
                                    <div className="col-md-3 time_pic"><TimePickerinpt placeholder="To" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="row martp">
                            <div className="col-md-6 form-modal">
                                <TextInput
                                    type="text"
                                    placeholder="Phone No."
                                    name="fname"
                                    value={this.state.fname}
                                    onChange={this.handleChange}
                                    label="Phone No.*" />
                            </div>
                            <div className="martp row form-modal">
                                <div className="col-md-12 form-modal">
                                    <TextArea name="Payment Terms" label="Payment Terms" ></TextArea>
                                </div>
                            </div>
                            <div className="martp row form-modal">
                                <div className="col-md-12 form-modal">
                                    <TextArea name="Payment Terms" label="Payment Terms" ></TextArea>
                                </div>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-primary-overRide btn-left-overRide">Update Details</Button>
                </Modal.Footer>
            </Modal>
        </span>

        );
    }
}
export default AddViewModal;