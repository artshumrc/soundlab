import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Grid, Row, Col, Image, Panel, Button} from 'react-bootstrap';
import './PricingSection.css';

export default class PricingSection extends React.Component {
	render() {
		return (
			<section id="pricing" className="text-center">
				<Image src="/images/pricing.png" responsive />
				<h3>Awesome features</h3>
				<h2>We offer best digital experience</h2>
				<Grid>
					<Row>
						<Col lg={4}>
							<Panel header="Standard" bsStyle="primary" className="simple">
                <span className="price"><sup>$</sup>100<sub>/mo</sub></span>
                <div>4 quarterly payments</div>
                <hr />
                <ul>
                  <li><FontAwesome name="times"/> All features</li>
                  <li><FontAwesome name="times"/> Unlimited collections</li>
                  <li><FontAwesome name="times"/> Custom design</li>
                  <li><FontAwesome name="times"/> Awesome archives</li>
                  <li><FontAwesome name="check"/> Custom collections</li>
                </ul>
                <Button bsStyle="primary">Get started now</Button>
              </Panel>
						</Col>
            <Col lg={4}>
              <Panel header="Standard" bsStyle="primary" className="standard">
                <span className="price"><sup>$</sup>200<sub>/mo</sub></span>
                <div>4 quarterly payments</div>
                <hr />
                <ul>
                  <li><FontAwesome name="times"/> All features</li>
                  <li><FontAwesome name="times"/> Unlimited collections</li>
                  <li><FontAwesome name="check"/> Custom design</li>
                  <li><FontAwesome name="check"/> Awesome archives</li>
                  <li><FontAwesome name="check"/> Custom collections</li>
                </ul>
                <Button bsStyle="primary">Get started now</Button>
              </Panel>
            </Col>
            <Col lg={4}>
              <Panel header="Standard" bsStyle="primary" className="ultimate">
                <span className="price"><sup>$</sup>300<sub>/mo</sub></span>
                <div>4 quarterly payments</div>
                <hr />
                <ul>
                  <li><FontAwesome name="check"/> All features</li>
                  <li><FontAwesome name="check"/> Unlimited collections</li>
                  <li><FontAwesome name="check"/> Custom design</li>
                  <li><FontAwesome name="check"/> Awesome archives</li>
                  <li><FontAwesome name="check"/> Custom collections</li>
                </ul>
                <Button bsStyle="primary">Get started now</Button>
              </Panel>
            </Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
