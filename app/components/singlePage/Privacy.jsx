import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Sidenav from '../shared/sidenav'
import styles from './singlePage.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'

export default class Privacy extends Component {

  render() {
    return (
      <div>

        <Sidenav />
        <row>
          <Col xsOffset={3} xs={6}>
            <h6>Privacy Page</h6>
          </Col>
        </row>

      </div>
    )
  }
}
