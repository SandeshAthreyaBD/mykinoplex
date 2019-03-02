import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateEvent from './pages/CreateEvent';
import ListofEvents from './pages/ListofEvents';
import ListofTheaters from './pages/ListofTheaters';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={CreateEvent} />
        <Route path='/createevent' component={CreateEvent} />
        <Route path='/listofevents' component={ListofEvents} />
        <Route path='/listoftheaters' component={ListofTheaters} />
      </Switch>
    );
  }
}

export default Routes;
