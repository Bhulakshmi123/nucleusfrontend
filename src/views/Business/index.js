import React, { Component } from "react";
import '../../assets/css/commonStyles.css';
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader'
import TabSystem from '../../components/TabSystem/TabSystem'
import ViewDetails from '../../components/ViewDetails/ViewDetails'
class Business extends Component {
  render() {
    if (window.location.href === "http://localhost:3000/business") {
      return (
        <div>
          <ArticleHeader heading='Leads' buttonName='Add New' typeName="New" typeStatus="Active"></ArticleHeader>
          <TabSystem></TabSystem>
        </div>
      );
    }
    else {
      return (
        <ViewDetails></ViewDetails>
      )
    }

  }
}
export default Business;
