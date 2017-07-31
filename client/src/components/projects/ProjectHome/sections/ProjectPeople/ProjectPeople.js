import React from 'react';
import './ProjectPeople.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class ProjectPeople extends React.Component {

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
