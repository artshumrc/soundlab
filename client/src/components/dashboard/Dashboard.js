import React from 'react';
import './Dashboard.css';
import ListItem from './components/ListItem';
import FontAwesome from 'react-fontawesome';
import {Image} from 'react-bootstrap';

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
            <a href="#">
              <FontAwesome name="caret-left"/>
              <FontAwesome name="bars" size="2x"/>
            </a>
            <div className="navigation pull-right">
              <a href="#">
                <div className="userPanel">
                  <div className="userImage">
                    <span className="status"></span>
                    <Image src="/images/bw.png" circle/>
                  </div>
                  <div>
                    Bruce Wayne
                  </div>
                  <FontAwesome name="arrow-down"/>
                </div>
              </a>
              <div className="notifications">
                <FontAwesome name="bell"/>
                <FontAwesome name="envelope-o"/>
              </div>
            </div>
          </div>
          <div className="dashboardContent">

          </div>
        </div>
      </div>
    )
  }
}
