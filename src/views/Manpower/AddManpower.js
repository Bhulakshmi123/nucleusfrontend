import React, { Component } from 'react';
import ModalHeader from '../../components/Modals/modalType1/ModalHeader';
import ModalFooter from '../../components/Modals/modalType1/ModalFooter';
import ModalInput from '../../components/Inputs/ModalInput';
import Select from '../../components/Inputs/Select';
import SingleFileUpload from '../../components/Inputs/SingleFileUpload';

class AddManpower extends Component{
    render() {
        return (
            <div class="modal fade" id="add_manpower_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-type-1" role="document">
                    <div class="modal-content">
                    <ModalHeader modalTitle={`Add New Man power`} />
                    <div class="modal-body">
                        
                        <div className="input-container">
                            
                            <div className="row">
                                <div className="col-sm-6">
                                    <Select label={`Man power Type`} 
                                            name={`manpower_type`}
                                            required={true}
                                            />
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-sm-6">
                                    <ModalInput 
                                        label={`Name`}
                                        name={`manpower_name`}
                                        type={`text`}
                                        placeholder={`Enter Man power Name`}
                                        className={`manpower-name`}
                                        required={true}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <ModalInput 
                                        label={`Mobile Number`}
                                        name={`manpower_mobile`}
                                        type={`text`}
                                        placeholder={`Enter Mobile Number`}
                                        className={`manpower-name`}
                                        required={true}
                                    />
                                </div>
                            </div>
                        
                        </div>
                        <hr />
                        
                        <h6 className="document-title">Documents</h6>
                        <div className="documents">

                            
                            

                            <div className="row">
                                <div className="col-sm-6">
                                    <SingleFileUpload name="driving_license" placeholder="Upload Driving License" label="Driving License" />
                                </div>
                                <div className="col-sm-6">
                                    <SingleFileUpload name="heavy_license" placeholder="Upload Heavy License" label="Heavy License" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <SingleFileUpload name="adhar_card" placeholder="Upload Aadhar Card" label="Aadhar Card" />
                                </div>
                            </div>
                            
                        </div>
                        

                    </div>
                    <ModalFooter />
                    </div>
                </div>
            </div>
        );
        
    }
}

export default AddManpower;