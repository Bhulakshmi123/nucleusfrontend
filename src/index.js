import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
// import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
// import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import "./assets/css/rootStyles.css";
import AdminLayout from "layouts/Admin.jsx";
<<<<<<< HEAD
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
const store = createStore(allReducers,applyMiddleware(thunk));
// const store = createStore(allReducers,applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
=======
import { createStore, applyMiddleware, compose } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose;
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)),);
const store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
>>>>>>> e3d6740b8cffc11e31e185942cea1e7261bb97f3
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