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
// import axios from 'axios';

class ArticleHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
<<<<<<< HEAD
            isEquipmentinfo: false
=======
            isEquipmentinfo:false,
            fname: '',
>>>>>>> 89ade5f1bd2aca0d8e2a31e7c378697c5d663224
        }
    }
    handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
             [e.target.name]: e.target.value
             });
      }

      onSubmit = (e) => {
        e.preventDefault();
        const data = this.state
        console.log("hi" ,data)
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
        //const {fname} = this.state;
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
                    <Modal.Body >
                        <form onSubmit={this.onSubmit}>
                       <div className="row">
                           <div className="col-md-3">
                               <TextInput
                                type="text"
                                placeholder="Phone No."
                                name="fname" 
                                value={this.state.fname}
                                onChange={this.handleChange}
                                label="Phone No.*"/>
                           </div>
                           <div className="col-md-3">
                                <CalenderInput name="Lead Date*" placeholder="Lead Date"/>
                           </div>
                           <div className="col-md-3">
                               <TextInput name="Renter Name*"  placeholder="Renter Name"/>
                           </div>
                           <div className="col-md-3">
                               <TextInput name="Renter Email"  placeholder="Renter Email"/>
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
                                    <tbody>
                                        <tr>
                                            <td>{this.state.fname}</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><Button>Edit</Button></td>
                                            <td><Button>Delete</Button></td>
                                        </tr>
                                    </tbody>
                                </table> 
                            </div>
                        </div>
                       {
                           this.state.isEquipmentinfo ? <AddFields /> : null
                       }
                       <Button type="submit" bsStyle="danger">Submit</Button>
                       </form>
                       
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button>
                        <Button bsStyle="primary" onClick={this.openInputHandler} >Add New </Button>
                    </Modal.Footer> */}
                      <Modal.Footer>
                       
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default ArticleHeader;
