import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './AboutSection.css';

export default class AboutSection extends React.Component {
	render() {
		return (
			<section id="about">
				<Grid>
					<Row>
						<Col lg={4}>
							<Image src="/images/engineer.png" responsive />
						</Col>
						<Col lg={8}>
							<h2><span className="highlight">Orpheus</span> is for your digital archive</h2>
							<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap.
              </p>
							<hr />
							<p className="italic">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the
                industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book."
              </p>
							<hr className="short orange" />
							<p className="signature"><strong>John Doe</strong> - CEO/Founder ZAP</p>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
