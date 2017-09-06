import React, { Component, PropTypes } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RecentUploadItem from './RecentUploadItem'
//import MuiThemeProvider from '../../../node_modules/material-ui/styles/MuiThemeProvider'
import styles from './home.scss'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'

@CSSModules(styles, {allowMultiple: true})


class Recent extends React.Component {

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
        <div>
          <Row styleName="recent-section">
            <div styleName="tag-container">
              <span styleName="site-tag learn-tag">Recent tracks</span>
            </div>

          </Row>
          <Row styleName="recent-track-container">
          {this.props.data.posts.map((post) =>
            <RecentUploadItem key={post.id} post={post} />
          ).slice(0,3)}
          </Row>
        </div>

			);
		}
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
