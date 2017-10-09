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
		const { data } = this.props;

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
		        {data && data.posts && data.posts.map((post) =>
							<Col md={4}>
			          <RecentUploadItem
									key={post.id}
									post={post}
								/>
							</Col>
		        ).slice(0,3)}
	        </Row>
				</Grid>
      </section>
		);
	}
}

const RecentQuery = gql`
	query RecentQuery {
		posts(post_type: "audio_upload") {
			id,
			post_title
			post_name
			post_content
			thumbnail
			byline {
				meta_value
			}
			date {
				meta_value
			}
			sound_cloud_link {
				meta_value
			}
		}
	}
`;

const RecentWithData = graphql(RecentQuery)(Recent);

export default RecentWithData;
