import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader';
import ViewDetails from '../../components/ViewDetails/ViewDetails';
import RouteNotFound from '../../components/RouteNotFound/RouteNotFound';
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard'
import '../../assets/css/commonStyles.css';
import './index.css'
class Business extends Component {
  render() {
    return (
      <React.Fragment>
        <ArticleHeader heading='Leads' buttonName='Add New'></ArticleHeader>
        <Router>
          <ul className="NavStyles">
            <li><NavLink activeClassName="activeLink" to="/business/all">All</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/business/new">New</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/business/active">Active</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/business/pending">Pending</NavLink></li>
            <li><NavLink activeClassName="activeLink" to="/business/rejected">Rejected</NavLink></li>
          </ul>
          <Switch>
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
  // render() {
  //   if (window.location.href === "http://localhost:3000/business") {
  //     return (
  //       <div>
  //         <Router>
  //           <ArticleHeader heading='Leads' buttonName='Add New' typeName="New" typeStatus="Active"></ArticleHeader>
  //           <Link to='/dummy' component={DummyComponent}></Link>
  //         </Router>
  //       </div>
  //     );
  //   }
  //   else {
  //     return (
  //       <ViewDetails></ViewDetails>
  //     )
  //   }

  // }
}
export default Business;
