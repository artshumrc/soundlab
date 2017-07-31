import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import './ProjectCollections.css';
import FontAwesome from 'react-fontawesome';

export default class ProjectCollections extends React.Component {
	render() {
		return (
			<Grid>
				<Row>
					{[{}, {}, {}].map((collection, i) => {
						const cardImageUrl = {backgroundImage: `url(${collection.imageUrl})`};

						return (<Col lg={4} key={`${collection.name}.${i}`}>
							<div className="collectionCard">
								<div className="cardImage" style={cardImageUrl} />
								<div className="collectionBadge">{collection.category}</div>
								<div className="collectionDescription">
									<h4>{collection.name}</h4>
									<div className="location">
										<span className="collectionCountry">{collection.country} </span>
										<span className="collectionLocation">
                      | {collection.location}</span>
									</div>

								</div>
								<div className="collectionCardControls">
									<div className="control date">
										<FontAwesome name="clock-o" /> Mar'17
                  </div>
									<div className="control">
										<FontAwesome name="book" /> 127
                  </div>
									<div className="control comments">
										<FontAwesome name="comments-o" /> 127
                  </div>
								</div>
							</div>
						</Col>);
					})}
				</Row>
			</Grid>
		);
	}
}
