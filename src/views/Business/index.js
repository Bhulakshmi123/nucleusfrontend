import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BusinessViewOne from './BusinessViewOne';
import '../../assets/css/commonStyles.css';
import './index.css'
class Business extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/business/all" component={BusinessViewOne}></Route>
          <Route path="/business/view/:id"></Route>
        </Router>
      </React.Fragment>
    )
  }
}

export default Business;
