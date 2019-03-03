import React, { Component } from 'react';
import TopNavigation from './topNavigation';
import SideNavigation from './sideNavigation';
import Routes from './Routes/Routes';
import '../../index.css';

class AdminDashboard extends Component {
  
  render() {
    return (
        <div className="flexible-content" >
          <TopNavigation />
          <SideNavigation />
          <main id="content" className="p-5">
          <Routes />
          </main>
        </div>
    );
  }
}

export default AdminDashboard;
