import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

import NotFound from './components/pages/NotFound';
import Loader from './components/molecules/loader';

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      <Route exact path="/" component={lazy(() => import('./components/pages/Users'))} />
      <Route exact path="/:id" component={lazy(() => import('./components/pages/UserDetails'))} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
