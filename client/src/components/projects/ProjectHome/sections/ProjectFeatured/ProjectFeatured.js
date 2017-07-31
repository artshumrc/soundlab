import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './ProjectFeatured.css';

export default class ProjectFeatured extends React.Component {

	render() {
		return (
			<section id="people">
				<h3>People</h3>
				<Grid>
					<Row>
						<Col lg={3}>
							<Image src="/images/book.png" />
							<h4>Example Person</h4>
							<hr />
							<p>Museum Administrator</p>
						</Col>
						<Col lg={3}>
							<Image src="/images/book.png" />
							<h4>Example Person</h4>
							<hr />
							<p>Editor</p>
						</Col>
						<Col lg={3}>
							<Image src="/images/book.png" />
							<h4>Example Person</h4>
							<hr />
							<p>Curator</p>
						</Col>
						<Col lg={3}>
							<Image src="/images/book.png" />
							<h4>Example Person</h4>
							<hr />
							<p>Professor</p>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
