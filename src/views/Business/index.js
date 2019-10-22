import React, { Component } from "react";
import '../../assets/css/commonStyles.css';
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader'
import TabSystem from '../../components/TabSystem/TabSystem'
import {allProjects} from './demoData'
class Business extends Component {
  render() {
    return (
      <div>
        <ArticleHeader heading='Leads' buttonName='Add New' typeName="New" typeStatus="Active"></ArticleHeader>
        <TabSystem></TabSystem>
        {/* <BusinessMCard data={allProjects}></BusinessMCard> */}
      </div>

    );
  }
}
export default Business;
