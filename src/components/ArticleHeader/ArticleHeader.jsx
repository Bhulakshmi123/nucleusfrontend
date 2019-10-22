import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../assets/css/commonStyles.css';
import './ArticleHeader.css';

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
                <Modal show={this.state.isShowing} onHide={this.closeModalHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Hello, i'm Modal Body
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
