import React, { Component } from 'react';
import Routes from '../Components/Routes';
import TopNavigation from '../Components/topNavigation';
import SideNavigation from '../Components/sideNavigation';
import '../index.css';

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
