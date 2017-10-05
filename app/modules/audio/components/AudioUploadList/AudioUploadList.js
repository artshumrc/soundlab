import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

import AudioUploadItem from '../AudioUploadItem'
import styles from './AudioUploadList.scss'

@CSSModules(styles, {allowMultiple: true})


class AudioUploadList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: true
		};
	}

	static propTypes = {
		data: PropTypes.shape({
			loading: React.PropTypes.bool,
			error: React.PropTypes.object,
			posts: React.PropTypes.array,
		}).isRequired,
	}

	render () {
		if (this.props.data.loading) {
			return (<div>Loading</div>);
		}

		if (this.props.data.error) {
			console.log(this.props.data.error);
			return (<div>An unexpected error occurred</div>);
		}

		console.log(this.props.data.posts);

		if (this.props.data.posts) {
			return (
				<MuiThemeProvider>
					<div>
						<Row styleName="wave-cover-section">
							<Col xs={12} sm={12} md={12} lg={12}>
								<div styleName="featured-track-player-container">
									<div styleName="featured-track-player">

									</div>
								</div>
							</Col>
						</Row>

						<Row styleName="wave-search-filter-section">
							<Col xs={12} sm={12} md={8} lg={8} mdOffset={2} lgOffset={2}>
								<div>
									<span styleName="lets-listen">Let's listen to <span styleName="filter-title">Everything</span></span>
								</div>
								<div styleName="filter-container">
									<div styleName="filter-row-one">
										<FlatButton label="Everything" />
										<FlatButton label="Jazz" />
										<FlatButton label="R&B" />
										<FlatButton label="Podcasts" />
									</div>
									<div styleName="filter-row-two">
										<FlatButton label="Classical" />
										<FlatButton label="Electronic" />
										<FlatButton label="Acoustic" />
										<FlatButton label="Search" />
									</div>
								</div>
							</Col>
						</Row>

						<Row styleName="wave-audio-posts-section">
							<Col xs={12} sm={12} md={8} lg={8} mdOffset={2} lgOffset={2}>
								<div styleName="posts-column-section-titles">
									<div styleName="section-titles-left">
										<span styleName="section-title-number">#</span>
										<span>Track</span>
									</div>
									<div styleName="section-titles-right">
										<span styleName="section-title-duration">Duration</span>
									</div>

								</div>
								{this.props.data.posts.map((post, index) =>
									<AudioUploadItem key={post.id} post={post} track={index} />
								)}
							</Col>
						</Row>


					</div>
				</MuiThemeProvider>
			);
		}
	}
}

const AudioUploadQuery = gql`
	query AudioUploadQuery {
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

const AudioUploadListWithData = graphql(AudioUploadQuery)(AudioUploadList);

export default AudioUploadListWithData;
