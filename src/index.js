import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/rootStyles.css";
// import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
// import "./assets/css/demo.css";
// import "./assets/css/pe-icon-7-stroke.css";
import thunk from 'redux-thunk';
import allReducers from './redux/reducers';
import AdminLayout from "layouts/Admin.jsx";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path="/" render={(props) => {
					return (
						<AdminLayout {...props}></AdminLayout>
					)
				}}>
				</Route>
				<Redirect from="/" to="/dashboard" />
			</Switch>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);