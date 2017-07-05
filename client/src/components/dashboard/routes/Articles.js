import React from 'react';
import './Articles.css';
import {Button, Grid, Col, Row} from 'react-bootstrap';

export default class Articles extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="articles">
        <div className="topBar">
          <span className="title">Articles</span>
          <div className="pull-right buttonWrapper">
            <Button>Create Article +</Button>
          </div>
        </div>
        <div className="content">
          <span className="title">Form Elements</span>
          <Row>
            <Col lg={3}>
              <div className="sectionTitle">Text inputs</div>
            </Col>
            <Col lg={3}>
              <div className="sectionTitle">With icon</div>
            </Col>
            <Col lg={3}>
              <div className="sectionTitle">With icon - left side</div>
            </Col>
            <Col lg={3}>
              <div className="sectionTitle">Custom fields</div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
