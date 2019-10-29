import React, { Component } from 'react';
import '../../assets/css/commonStyles.css';
import './ArticleHeader.css';
import '../Modal/Modal.css';
import { Modal, Button } from 'react-bootstrap';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
// import InputName from '../FormFields/SelectInput';
// import FileInput from '../FormFields/FileInput';
import CalenderInput from '../FormFields/CalenderInput'
import AddFields from '../FormFields/AddFields';
class ArticleHeader extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            isEquipmentinfo: false
        }
    }
    openModalHandler = () => {
        this.setState({ isShowing: true });
    }
    closeModalHandler = () => {
        this.setState({ isShowing: false });
    }
    openInputHandler = () => {
        this.setState({ isEquipmentinfo: true });
    }
    render() {
        return (
            <div>
                <div className="articleHeader">
                    <div className="headerTitle"><p>{this.props.heading}</p></div>
                    <div className="headerButton">
                        <Button bsStyle="primary" onClick={this.openModalHandler}><i className="fas fa-plus-circle nbSpan"></i>Add New</Button>
                    </div>
                </div>
                <Modal show={this.state.isShowing} onHide={this.closeModalHandler} dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row">
                            <div className="col-md-3">
                                <TextInput name="Phone No.*" placeholder="Phone No." />
                            </div>
                            <div className="col-md-3">
                                <CalenderInput name="Lead Date*" placeholder="Lead Date" />
                            </div>
                            <div className="col-md-3">
                                <TextInput name="Renter Name*" placeholder="Renter Name" />
                            </div>
                            <div className="col-md-3">
                                <TextInput name="Renter Email" placeholder="Renter Email" />
                            </div>
                        </div>
                        <div className="row martp">
                            <div className="col-md-3 form-modal">
                                <label>Lead Executive</label>
                                <p className="renter_nm">ANVESH REDDY</p>
                            </div>
                            <div className="col-md-3">
                                <TextInput name="Alternate Phone no." placeholder="Alternate Phone no." />
                            </div>
                            <div className="col-md-3">
                                <TextInput name="Company Name" placeholder="Company Name" />
                            </div>
                            <div className="col-md-3">
                                <TextInput name="Designation" placeholder="Designation" />
                            </div>
                        </div>
                        <div className="row martp">
                            <div className="col-md-3">
                                <SelectInput name="Lead Priority" placeholder="Lead Priority"></SelectInput>
                            </div>
                            <div className="col-md-3">
                                <SelectInput name="Lead Source" placeholder="Lead Source" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Button className="AddBtn" bsStyle="primary" onClick={this.openInputHandler}>Add Equipment</Button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-hover">
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
                                    {/* <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Baby Roller</td>
                                            <td>3DX</td>
                                            <td></td>
                                            <td></td>
                                            <td><Button>Edit</Button></td>
                                            <td><Button>Delete</Button></td>
                                        </tr>
                                    </tbody> */}
                                </table>
                            </div>
                        </div>
                        {
                            this.state.isEquipmentinfo ? <AddFields /> : null
                        }
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button>
                        <Button bsStyle="primary" onClick={this.openInputHandler} >Add New </Button>
                    </Modal.Footer> */}
                </Modal>
            </div>
        )
    }
}
export default ArticleHeader;
