import React from 'react';
import { Route, Switch } from 'react-router';
import { Top } from './templates/index';

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)?" component={Top} />
    </Switch>
  );
};

export default Router;
