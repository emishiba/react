import React from 'react';
import { Route, Switch } from 'react-router';
import { Top, Profile, Works, Contact } from './templates/index';

const Router = () => {
  return (
    <Switch>
      <Route exact path="(/)" component={Top} />
      <Route exact path="(/profile)" component={Profile} />
      <Route exact path="(/works)" component={Works} />
      <Route exact path="(/contact)" component={Contact} />
    </Switch>
  );
};

export default Router;
