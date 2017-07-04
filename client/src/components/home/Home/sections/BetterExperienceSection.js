import React from 'react';
import FontAwesome from 'react-fontawesome';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import './BetterExperienceSection.css';

export default class BetterExperienceSection extends React.Component {
	render() {
		return (
			<section id="betterExperience">
				<div className="parallax betterExperienceSection">
					<div className="parallax-content">
						<Grid>
							<Row>
								<Col lg={6}>
									<Image src="/images/tools.svg" responsive />
								</Col>
								<Col lg={6}>
									<h2 className="invert">Orpheus is for Better Experience</h2>
									<p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor too incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostu an exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute for dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu.
                    <ul>
	<li><FontAwesome name="star" className="listStyle" /> Ut enim ad minim veniam, quis nostu to the end</li>
	<li><FontAwesome name="star" className="listStyle" /> Nisi ut a liquip ex ea commodo consequat.</li>
	<li><FontAwesome name="star" className="listStyle" /> Duis aute iru dolor in reprehenderit edng otui.</li>
                    </ul>
										<Button bsStyle="primary">Explore Now</Button>
									</p>
								</Col>
							</Row>
						</Grid>
					</div>
				</div>
			</section>
		);
	}
}
