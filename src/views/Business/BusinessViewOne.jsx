import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import ArticleHeader from '../../components/ArticleHeader/ArticleHeader';
import BusinessMCard from '../../components/BusinessMCard/BusinessMCard'
import RouteNotFound from '../../components/RouteNotFound/RouteNotFound';
import ViewDetails from 'components/ViewDetails/ViewDetails';
class BusinessViewOne extends Component {
    render() {
        return (
            <React.Fragment>
                <ArticleHeader heading='Leads' buttonName='Add New'></ArticleHeader>
                <Router>
                    <ul className="NavStyles">
                        <li><NavLink activeClassName="activeLink" to="/business">All</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to="/business/new">New</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to="/business/active">Active</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to="/business/pending">Pending</NavLink></li>
                        <li><NavLink activeClassName="activeLink" to="/business/rejected">Rejected</NavLink></li>
                    </ul>
                    <Switch>
                        <Route path="/business/view" component={ViewDetails} />
                        <Route exact path="/business" component={BusinessMCard} />
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

export default BusinessViewOne;
