import React from 'react';
import './TestimonialSection.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

export default class TestimonialSection extends React.Component {
	render() {
		return (
			<section id="testimonial">
				<div className="parallax testimonialSection">
					<div className="parallax-content">

						<Grid>
							<Row>
								<Col lg={12}>
									<Image src="/images/testimonial_icon.png" responsive />
								</Col>
							</Row>
							<Row className="testimonialsContainer">
								<Col lg={1} className="quotes">
									<FontAwesome name="quote-left" size="2x" />
								</Col>
								<Col lg={10}>
									<p className="testimony">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egetvel
                    lacus pretium rhoncus a quis
                    nisly Ut vehicula gravida dui in pulvinar donec diam elit to the end consequateget augue vitae
                    aliquet sollicitudin.
                    <br /><br />
										<span className="testimonyAuthor">- Ashiful Pappu | Museum Archeologist</span>
									</p>
								</Col>
								<Col lg={1} className="quotes">
									<FontAwesome name="quote-right" size="2x" />
								</Col>
							</Row>
						</Grid>
					</div>
				</div>
			</section>
		);
	}
}
