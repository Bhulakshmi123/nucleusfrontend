import React, { Component } from 'react'
import '../../assets/css/commonStyles.css'
import './ArticleHeader.css'
import Modal from '../Modal/Modal'
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
            <div className="articleHeader">
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                <div className="headerTitle"><p>{this.props.heading}</p></div>
                <div className="headerButton"><button className="btn open-modal-btn" onClick={this.openModalHandler}><i className="fas fa-plus-circle nbSpan"></i>{this.props.buttonName}</button></div>
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    Maybe aircrafts fly very high because they don't want to be seen in plane sight?
                </Modal>
            </div>
        )
    }
}
export default ArticleHeader
