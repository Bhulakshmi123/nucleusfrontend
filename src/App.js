import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import routes from './routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Switch>
              {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
              })}  
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
