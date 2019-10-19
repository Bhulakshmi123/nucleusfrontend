import React, { Component } from 'react';
import '../../assets/css/commonStyles.css';
import './ArticleHeader.css';
import Button from '../CustomButton/CustomButton';
import Modal from '../Modal/Modal';
import FileInput from '../FormFields/FileInput';
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
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                <div className="articleHeader">
                    <div className="headerTitle"><p>{this.props.heading}</p></div>
                    {/* <div className="headerButton"><button className="btn open-modal-btn" onClick={this.openModalHandler}><i className="fas fa-plus-circle nbSpan"></i>{this.props.buttonName}</button></div> */}
                    <div className="headerButton">
                        <Button bsStyle="primary" onClick={this.openModalHandler}><i className="fas fa-plus-circle nbSpan"></i>Add New</Button>
                    </div>
                </div>
                <Modal className="modal" show={this.state.isShowing} close={this.closeModalHandler}>
                    <div className="row">
                        <div className="col-md-6">
                            <FileInput name="Name"/>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}
export default ArticleHeader;
