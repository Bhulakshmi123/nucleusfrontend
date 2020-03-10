import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard';
import ViewDetails from '../../components/ViewDetails/ViewDetails';
import RouteNotFound from '../../components/RouteNotFound/RouteNotFound';
class Business extends Component {
  componentDidUpdate () {
    window.location.reload(false);
  }
  render () {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/business/leads/lead/:id" component={ViewDetails} />
            {/* <Route path="/business/leads/lead/active/suppliersList" component={ViewDetails} /> */}
            <Route path="/business/leads/new" component={BusinessMCard} />
            <Route path="/business/leads/active" component={BusinessMCard} />
            <Route path="/business/leads/rejected" component={BusinessMCard} />
            <Route path="/business/leads/deleted" component={BusinessMCard} />
            <Route path="/business/leads/moved" component={BusinessMCard} />
            <Route component={RouteNotFound}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default Business;
