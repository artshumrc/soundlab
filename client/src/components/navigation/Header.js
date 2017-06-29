import React from 'react';
import {Navbar} from 'react-bootstrap';
import './Header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar className="social-nav" fixedTop={true}>
          <Navbar.Header>
          </Navbar.Header>
        </Navbar>
        <Navbar className="page-nav" fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              Orpheus
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}
