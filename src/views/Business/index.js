import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard';
import ViewDetails from '../../components/ViewDetails/ViewDetails';
import RouteNotFound from '../../components/RouteNotFound/RouteNotFound';
import '../../assets/css/commonStyles.css';
import './index.css'
class Business extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/business/all/view/:id" component={ViewDetails} />
            <Route path="/business/all" component={BusinessMCard} />
            <Route path="/business/new" component={BusinessMCard} />
            <Route path="/business/active" component={BusinessMCard} />
            <Route path="/business/pending" component={BusinessMCard} />
            <Route path="/business/rejected" component={BusinessMCard} />
            <Route component={RouteNotFound}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default Business;
