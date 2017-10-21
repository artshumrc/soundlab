import React, { Component, PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import RecentUploadItem from '../RecentUploadItem';
import styles from './Recent.scss';


@CSSModules(styles, {allowMultiple: true})
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
	        <Row>
		        {items.map((item) => {

							console.log('item', item);
							return (
								<Col md={4}>
				          <RecentUploadItem
										key={item.id}
										post={item}
									/>
								</Col>
			        );
						})}
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
