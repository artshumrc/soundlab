import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import _ from 'underscore';

import FeaturedTrack from '../../../home/components/FeaturedTrack';
import PlaylistSounds from '../PlaylistSounds';

import styles from './PlaylistSingle.scss';

class PlaylistList extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	render () {
		const { loading, playlist, error } = this.props;

		if (loading || !playlist) {
			return (
				<div>
					{/* TODO: add loading component */}
				</div>
			);
		}

		return (
			<Grid className={styles.playlistSingle}>
				<Row>
					<Col >
						<h1 className={styles.title}>
							{playlist.post_title}
						</h1>
					</Col>
				</Row>
	      <Row className={styles.postsColumnSectionTitles}>
          <Col sm={1}>
						<span className={styles.sectionTitleNumber}>#</span>
					</Col>
          <Col sm={8}>
						<span className={styles.sectionTrackLabel}>Track</span>
					</Col>
					<Col sm={3}>
						<span className={styles.sectionTitleDuration}></span>
					</Col>
				</Row>
				<PlaylistSounds sounds={playlist.queue} />
			</Grid>
		);
	}
}

PlaylistList.propTypes = {
	playlists: PropTypes.array,
	error: PropTypes.object,
	loading: PropTypes.bool,
};

PlaylistList.defaultProps = {
	playlists: [],
	activeCategory: 'everything',
};

export default PlaylistList;
