import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './WhyUsSection.css';

export default class WhyUsSection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section id="whyUs" className="text-center">
				<Image src="/images/why_us.png" responsive />
				<h3>Why choose us</h3>
				<h2>We have unique facilities for archives</h2>
				<Grid className="featureSquares">
					<Row>
						<Col lg={6}>
							<Row>
								<Col lg={6}>
									<Image src="/images/why_us_1.png" />
								</Col>
								<Col lg={6}>
									<Image src="/images/why_us_2.png" />
								</Col>
							</Row>
							<Row>
								<Col lg={6}>
									<Image src="/images/why_us_3.png" />
								</Col>
								<Col lg={6}>
									<Image src="/images/why_us_4.png" />
								</Col>
							</Row>
						</Col>
						<Col lg={6}>
							<Image src="/images/why_us_square.png" />
						</Col>
					</Row>
				</Grid>
			</section>);
	}
}
