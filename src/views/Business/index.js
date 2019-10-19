import React, { Component } from "react";
import '../../assets/css/commonStyles.css';
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader'
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard'
import demoJson from './demoData'
// console.log(demoJson);
class Business extends Component {
  render() {
    return (
      <div>
        <ArticleHeader heading='Leads' buttonName='Add New' typeName="New" typeStatus="Active"></ArticleHeader>
        <BusinessMCard data={demoJson}></BusinessMCard>
      </div>

    );
  }
}
export default Business;
