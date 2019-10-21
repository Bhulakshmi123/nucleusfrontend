import React, { Component } from 'react';
import '../../assets/css/commonStyles.css';
import './ArticleHeader.css';
import { Modal, Button } from 'react-bootstrap';
import TextInput from '../FormFields/TextInput'
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
                        <Button variant="primary" onClick={this.openModalHandler}><i className="fas fa-plus-circle nbSpan"></i>Add New</Button>
                    </div>
                </div>
                <div className="articleHeader2">
                    <div className="name">{this.props.typeName}</div>
                    <div className="activeN">{this.props.typeStatus}</div>
                    <div className="searchBar"><input type="search" placeholder="Search Here"></input></div>
                </div>
                <Modal show={this.state.isShowing} onHide={this.closeModalHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TextInput></TextInput>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.closeModalHandler}>Close</Button>
                        <Button variant="primary">Primary</Button>
                        <Button variant="info">Info</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default ArticleHeader;
