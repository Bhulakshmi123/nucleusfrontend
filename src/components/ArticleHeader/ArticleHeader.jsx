import React, { Component } from 'react';
import '../../assets/css/commonStyles.css';
import './ArticleHeader.css';
import '../Modal/Modal.css';
import { Modal, Button ,Radio } from 'react-bootstrap';
import TextInput from '../FormFields/TextInput';
import SelectInput from '../FormFields/SelectInput';
import InputName from '../FormFields/SelectInput';
import FileInput from '../FormFields/FileInput';
import CalenderInput from '../FormFields/CalenderInput'
class ArticleHeader extends Component {
    constructor() {
        super();
        this.state = {
            isShowing: false
        }
    }
    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }
    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
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
                <Modal show={this.state.isShowing} onHide={this.closeModalHandler}  dialogClassName="custom-modal">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-lg">Lead Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                       <div className="row">
                           <div className="col-md-6">
                               <TextInput name="Price"/>
                           </div>
                           <div className="col-md-6">
                               <SelectInput name="Duration" />
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-md-6">
                                <CalenderInput name="Start Date"/>
                           </div>
                           <div className="col-md-6">
                                <SelectInput name="Transportation" />   
                           </div>
                       </div>
                       <div className="row">
                           <div className="col-md-6">
                               <div className="col-md-3">
                                    
                               </div>
                           </div>
                       </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="danger" onClick={this.closeModalHandler}>Close</Button>
                        <Button bsStyle="primary" onClick={this.closeModalHandler}>Add Project</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default ArticleHeader;
