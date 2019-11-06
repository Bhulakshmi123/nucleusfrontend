import React, { Component } from 'react';
import { Modal, Button, Grid, Col, Row } from 'react-bootstrap';
import '../Modal/Modal.css';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import CalenderInput from '../FormFields/CalenderInput'
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
                        <div className="row">
                            <div className="col-md-6">
                                <TextInput
                                    type="text"
                                    placeholder="Phone No."
                                    name="fname"
                                    value={this.state.fname}
                                    onChange={this.handleChange}
                                    label="Phone No.*" />
                            </div>
                            <div className="col-md-6">
                                <SelectInput cStyle="widthone" label="Duration" placeholder="Select District or State" />
                            </div>
                        </div>


                    </form>

                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </span>

        );
    }
}
export default AddViewModal;