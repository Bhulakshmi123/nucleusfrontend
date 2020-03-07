import React, { Component } from 'react';
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/css/rootStyles.css"; // !Mano's Default CSS File
import './assets/css/form.css'; // !BhuLakshmi's Other Default CSS File
import thunk from 'redux-thunk';
import allReducers from './redux/reducers';
import AdminLayout from "layouts/Admin";
import { Loginpage } from './views/Authentication/Loginpage'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ToastContainer} from 'react-toastify';
const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
export default class Index extends Component {
	render () {
		return (
			<React.Fragment>
				<Provider store={store}>
					<BrowserRouter>
						<Switch>
							<Redirect exact from="/" to="/login"></Redirect>
							<Route path="/login" component={Loginpage}></Route>
							<Route path="/" render={(props) => <AdminLayout {...props}></AdminLayout>}></Route>
						</Switch>
					</BrowserRouter>
					<ToastContainer></ToastContainer>
				</Provider >
			</React.Fragment>
		)
	}
}
ReactDOM.render(<Index />, document.getElementById("root"));

