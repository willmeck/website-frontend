import React from 'react';
import { Switch, Router, Route, Redirect } from 'react-router-dom';

import history from '../history';
import Home from './home/Home';
import Blog from './blog/Blog';
import Navbar from './Navbar';

const Routes = () => {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <div>
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route path="/home" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Routes;