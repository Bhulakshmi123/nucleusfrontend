import React, { Component } from 'react'
import '../../assets/css/commonStyles.css'
import './ArticleHeader.css'
import Button from '../CustomButton/CustomButton'
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
            <div>
                {this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null}
                <div className="articleHeader">
                    <div className="headerTitle"><p>{this.props.heading}</p></div>
                    <div className="headerButton">
                        <Button bsStyle="primary" onClick={this.openModalHandler}><i className="fas fa-plus-circle nbSpan"></i>Add New</Button>
                    </div>
                </div>
                <div className="articleHeader2">
                    <div className="name">{this.props.typeName}</div>
                    <div className="active">{this.props.typeStatus}</div>
                    <div className="searchBar"><input type="search" placeholder="Search Here"></input></div>
                </div>
                <Modal className="modal" show={this.state.isShowing} close={this.closeModalHandler}> Forms are Rendered</Modal>
            </div>
        )
    }
}
export default ArticleHeader
