import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import PlaylistListItem from '../PlaylistListItem';
import FeaturedTrack from '../../../home/components/FeaturedTrack';

import './PlaylistList.css';

class PlaylistList extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	render () {
		const { loading, playlists, error, noPadding } = this.props;

		if (loading) {
			return (
				<div>
					{/* TODO: add loading component */}
				</div>
			);
		}

		return (
			<Grid className={`playlistList ${noPadding ? 'playlistListNoPadding' : ''}`}>
				<Row>
					<Col >
						<h1 className="title">
							Playlists
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

				{playlists.map((playlist, i) => (
					<PlaylistListItem
						key={`${playlist.id}-${i}`}
						playlist={playlist}
						index={i}
					/>
				))}
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
