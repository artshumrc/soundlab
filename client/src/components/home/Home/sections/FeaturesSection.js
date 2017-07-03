import React from 'react';
import './FeaturesSection.css';
import {Grid, Row, Col, Image} from 'react-bootstrap';

export default class FeaturesSection extends React.Component {

	render() {
		return (
			<section id="features">
				<h3>Popular collections</h3>
				<h2>We have largest digital archive</h2>
				<Grid>
					<Row>
						<Col lg={3}>
							<Image src="/images/book.png" />
							<h4>Awesome archive</h4>
							<hr />
              <p>Lorem ipsum dolors item amet coti adipisicing elt, sed do eimd at.</p>
            </Col>
						<Col lg={3}>
							<Image src="/images/bulb.png" />
							<h4>Real experience</h4>
							<hr />
              <p>Lorem ipsum dolors item amet coti adipisicing elt, sed do eimd at.</p>
            </Col>
						<Col lg={3}>
							<Image src="/images/notes.png" />
							<h4>Data analysis</h4>
							<hr />
              <p>Lorem ipsum dolors item amet coti adipisicing elt, sed do eimd at.</p>
            </Col>
						<Col lg={3}>
							<Image src="/images/computer.png" />
							<h4>Digital archive</h4>
							<hr />
              <p>Lorem ipsum dolors item amet coti adipisicing elt, sed do eimd at.</p>
            </Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
