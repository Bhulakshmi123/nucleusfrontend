import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard';
import ViewDetails from '../../components/ViewDetails/ViewDetails';
import RouteNotFound from '../../components/RouteNotFound/RouteNotFound';
import '../../assets/css/commonStyles.css';
class Business extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/business/leads/lead/:id" component={ViewDetails} />
            <Route path="/business/leads/lead/active/premium" component={ViewDetails} />
            <Route path="/business/leads/lead/active/discovery" component={ViewDetails} />
            <Route path="/business/leads/lead/active/basic" component={ViewDetails} />
            <Route path="/business/new/view/:id" component={ViewDetails} />
            <Route path="/business/active/view/:id" component={ViewDetails} />
            <Route path="/business/pending/view/:id" component={ViewDetails} />
            <Route path="/business/rejected/view/:id" component={ViewDetails} />
            <Route path="/business/leads/new" component={BusinessMCard} />
            <Route path="/business/leads/active" component={BusinessMCard} />
            <Route path="/business/leads/pending" component={BusinessMCard} />
            <Route path="/business/leads/rejected" component={BusinessMCard} />
            <Route component={RouteNotFound}></Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
export default Business;
