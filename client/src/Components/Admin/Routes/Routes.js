import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateEvent from '../CreateEvent'
import ListofEvents from '../ListofEvents';
import ListofTheaters from '../ListofTheaters';
import Showdetails from '../Showdetails';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/admin/createevent' exact component={CreateEvent} />
        {/* <Route path='/createevent' component={CreateEvent} /> */}
        <Route path='/listofevents' component={ListofEvents} />
        <Route path='/listoftheaters' component={ListofTheaters} />
        <Route path='/showdetails/:id' component={Showdetails} />
      </Switch>
    );
  }
}

export default Routes;