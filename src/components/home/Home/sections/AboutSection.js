import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import _ from 'underscore';

import CollectionListItem from '../../../../modules/collections/components/CollectionListItem';

import './AboutSection.css';

export default class AboutSection extends React.Component {
	render() {
		const artImages = [3, 16, 19, 22, 31, 34, 35, 38, 42, 43, 44, 47, 48, 58, 70,
			83, 87, 90, 92, 93, 95, 102, 103, 104, 87, 77, 92, 56, 49, 43, 38, 44, 3,
			103, 22, 71, 100, 15, 99, 36, 17, 28, 72, 32, 33, 63, 102, 62, 80, 30, 60];

		const selImage = _.sample(artImages);
		const exampleItem = {
			imageUrl: `//iiif.orphe.us/orpheus/art/${selImage}.jpg/full/400,/0/default.jpg`,
			title: `Example Item`,
			tags: ['Manuscripts', '12th Century'],
			collection: 'example-collection',
			slug: 'example-item',
		};

		return (
			<section id="learn">
				<Grid>
					<Row>
						<Col>
							<div className="aboutIntro">
								<div className="aboutImage">
									<CollectionListItem
										{...exampleItem}
									/>
								</div>
								<blockquote className="aboutLead">
									<p>
										A thing of beauty is a joy forever
										<br />
										. . . it will never pass into nothingness.
									</p>
									<p className="quoteByline">
										&mdash; John Keats, "Endymion"
									</p>
								</blockquote>
							</div>
							<div className="aboutText">
								<p>
									Preserve the items in your archive, museum, or library digitially for the next generation.
								</p>
								<p>
									We partner with you to plan for the full lifetime of your digital collection, share it with who you want to share it with, and archive it for the perpetual future.
								</p>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}
