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
                <div className="articleHeader2">
                    <div className="name">{this.props.typeName}</div>
                    <div className="activeN">{this.props.typeStatus}</div>
                    <div className="searchBar"><input type="search" placeholder="Search Here"></input></div>
                </div>
                <Modal className="modal" show={this.state.isShowing} close={this.closeModalHandler} maxWidth="400" minWidth="600px" minHeight="500px"> Forms are Rendered</Modal>
            </div>
        )
    }
}
export default ArticleHeader;
