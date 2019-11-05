import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard';
import ViewDetails from '../../components/ViewDetails/ViewDetails';
import EqSuppliers from '../../components/EquipmentSuppliers/EqSuppliers';
import RouteNotFound from '../../components/RouteNotFound/RouteNotFound';
import '../../assets/css/commonStyles.css';
import './index.css'
class Business extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/business/new/view/:id" component={ViewDetails} />
            <Route path="/business/active/view/:id" component={ViewDetails} />
            <Route path="/business/pending/view/:id" component={ViewDetails} />
            <Route path="/business/rejected/view/:id" component={ViewDetails} />
            <Route path="/business/eqsuppliers/:supplierId/:equipmentId" component={EqSuppliers} />
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
