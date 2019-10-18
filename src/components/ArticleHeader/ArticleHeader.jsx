import React, { Component } from 'react'
import '../../assets/css/commonStyles.css'
import './ArticleHeader.css'
class ArticleHeader extends Component {
    render() {
        return (
            <div className="articleHeader">
               <div className="headerTitle"><p>{this.props.heading}</p></div>
               <div className="headerButton"><button className="btn"><i className="fas fa-plus-circle nbSpan"></i>{this.props.buttonName}</button></div>
            </div>
        )
    }
}
export default ArticleHeader
