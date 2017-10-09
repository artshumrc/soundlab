import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './singlePage.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'

export default class Contact extends Component {

  render() {
    return (
      <div>

        <row>
          <Col xsOffset={3} xs={6}>
            <h6>Contact Page</h6>
          </Col>
        </row>

      </div>
    )
  }
}
