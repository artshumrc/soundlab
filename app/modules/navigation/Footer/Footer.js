import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Grid, Row, Col } from 'react-bootstrap';

import styles from './Footer.scss';

@CSSModules(styles, { allowMultiple: true })
class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col md={6}>
            <div styleName="footer-left">
              <div>
                <span styleName="footer-site-title">The Sound Lab</span>
              </div>
              <div>
                <span styleName="footer-site-title">at Harvard University</span>
              </div>
              <div styleName="footer-nav-container">
                <span styleName="footer-site-nav contact-nav">Contact</span>
                <span styleName="footer-site-nav">Privacy</span>
              </div>

            </div>
          </Col>
          <Col styleName="footer-social-links-container" md={6}>
            <div styleName="footer-social-links">
              <span styleName="footer-social-link">Facebook</span>
              <span styleName="footer-social-link">Twiter</span>
              <span styleName="footer-social-link">Youtube</span>
              <span styleName="footer-social-link">Soundcloud</span>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
