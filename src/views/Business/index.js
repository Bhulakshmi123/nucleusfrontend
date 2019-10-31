import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BusinessViewOne from './BusinessViewOne';
import '../../assets/css/commonStyles.css';
import './index.css'
class Business extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Route path="/business/all" component={BusinessViewOne}></Route>
        </Router>
      </React.Fragment>
    )
  }
}

export default Business;
