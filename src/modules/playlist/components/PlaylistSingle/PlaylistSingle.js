import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import _ from 'underscore';

import FeaturedTrack from '../../../home/components/FeaturedTrack';
import PlaylistSounds from '../PlaylistSounds';

import './PlaylistSingle.css';

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
			<Grid className="playlistSingle">
				<Row>
					<Col >
						<h1 className="title">
							{playlist.post_title}
						</h1>
					</Col>
				</Row>
	      <Row className="postsColumnSectionTitles">
					<div className="sectionTitleNumberContainer">
						<span className="sectionTitleNumber">#</span>
					</div>
					<div className="sectionTrackLabelContainer">
						<span className="sectionTrackLabel">Track</span>
					</div>
					{/*
					<Col sm={3}>
						<span className="sectionTitleDuration"></span>
					</Col>
					*/}
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
