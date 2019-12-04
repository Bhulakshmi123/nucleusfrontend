import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/rootStyles.css"; // !Mano's Default CSS File
import './assets/css/commonStyles.css'; // !BhuLakshi's Default CSS File
import thunk from 'redux-thunk';
import allReducers from './redux/reducers';
import AdminLayout from "layouts/Admin.jsx";
import LoginPage from 'views/Authentication/Loginpage.jsx';
import admin from 'views/Authentication/admin.jsx'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Redirect exact from="/" to="/login"></Redirect>
				<Route to="/login" component={LoginPage}></Route>
				<Route to="/admin" component={admin}></Route>
				{/* <Route path="/" render={(props) => <AdminLayout {...props}></AdminLayout>}></Route> */}
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);