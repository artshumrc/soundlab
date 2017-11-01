import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { Link } from 'react-router';

import SoundListItem from '../../../audio/components/SoundListItem';
import FeaturedTrack from '../../../home/components/FeaturedTrack';

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
		console.log("playlist", playlist);

		const sounds = [];

		return (
			<Grid className={styles.playlistList}>
				<Row className={styles.waveCoverSection}>
					<Col >
						<FeaturedTrack
							track={sounds[0]}
							purple
						/>
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

				{sounds.map((sound, i) => (
					<SoundListItem
						key={`${track.id}-${i}`}
						sound={sound}
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
