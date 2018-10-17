import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Grid, Row, Col } from 'react-bootstrap';

import RecentSound from '../RecentSound';
import './Recent.css';


class Recent extends React.Component {

	render () {
		const { items } = this.props;

		return (
			<section styleName="recent-section">
				<Grid>
					<Row styleName="recent-section-title">
						<Col>
							<h3>
								Recent tracks
							</h3>
						</Col>
					</Row>
					<Row styleName="recent-sound-container">
						{items.map((item, i) => (
							<Col
								md={4}
								key={`${item.id}-${i}`}
							>
								<RecentSound
									post={item}
								/>
							</Col>
						))}
					</Row>
					<Row styleName="recent-section-title workshops">
						<Col>
							<h3>
							 Workshops
							</h3>
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}

Recent.PropTypes = {
	items: PropTypes.array,
};

Recent.defaultProps = {
	items: [],
};

export default Recent;
