import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import AudioUploadItem from './AudioUploadItem'
import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './audioUpload.scss'
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

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

						<Row>
							<Col xsOffset={3} xs={6}>
								{this.props.data.posts.map((post) =>
									<AudioUploadItem key={post.id} post={post} />
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
