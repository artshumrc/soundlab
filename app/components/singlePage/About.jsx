import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styles from './singlePage.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})

export default class About extends Component {

  render() {
    return (

        <Row styleName="about-section">
          <Col xsOffset={2} xs={8}>
              <div>

              </div>

            <h6>About Page</h6>
          </Col>
        </Row>

    )
  }
}
