import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from '../store';
import Home from '../pages/Home';
import People from '../pages/People';
import Articles from '../pages/Articles';
import Article from '../pages/Article';
import Header from '../components/Header';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Fragment>
      <Header />
      <Route path="/" component={Home} exact />
      <Route path="/people" component={People} />
      <Route path="/articles" component={Articles} exact />
      <Route path="/articles/:id" component={Article} />
    </Fragment>
  </ConnectedRouter>
);
Routes.displayName = 'Routes';

export default Routes;
