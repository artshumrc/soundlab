import React from 'react';
import './Dashboard.css';
import ListItem from './components/ListItem';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="dashboard">
        <div className="sidebar">
          <h3 className="invert">Orpheus</h3>
          <div className="sidebarMenu">
            <ul>
              <ListItem fa="file-text-o" name="Main Panel" active/>
              <ListItem fa="file" name="Articles"/>
              <ListItem fa="user" name="User Profile"/>
              <ListItem fa="window-maximize" name="Data Entry"/>
              <ListItem fa="folder-open-o" name="Projects"/>
              <ListItem fa="cog" name="Settings"/>
            </ul>
          </div>
        </div>
        <div className="contentWrapper">
          <div className="topNav">
          </div>
          <div className="dashboardContent">

          </div>
        </div>
      </div>
    )
  }
}
