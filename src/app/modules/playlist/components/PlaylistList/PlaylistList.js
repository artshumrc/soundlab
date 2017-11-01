import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import PlaylistListItem from '../PlaylistListItem';
import FeaturedTrack from '../../../home/components/FeaturedTrack';

import styles from './PlaylistList.scss';

class PlaylistList extends React.Component {

	constructor(props) {
		super(props);

		autoBind(this);
	}

	render () {
		const { loading, playlists, error } = this.props;

		console.log("Playlists", playlists);

		if (loading) {
			return (
				<div>
					{/* TODO: add loading component */}
				</div>
			);
		}

		return (
			<Grid className={styles.playlistList}>
				<Row>
					<Col >
						<h1 className={styles.title}>
							Playlists
						</h1>
					</Col>
				</Row>
	      <Row className={styles.postsColumnSectionTitles}>
          <Col sm={1}>
						<span className={styles.sectionTitleNumber}>#</span>
					</Col>
          <Col sm={8}>
						<span className={styles.sectionTrackLabel}>Title</span>
					</Col>
					<Col sm={3}>
						<span className={styles.sectionTitleDuration}></span>
					</Col>
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
