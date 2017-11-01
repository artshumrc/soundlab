import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import _ from 'underscore';
import moment from 'moment';
import wpautop from 'wpautop';
import linkifyHtml from 'linkifyjs/html';

import FeaturedTrack from '../../../home/components/FeaturedTrack';

import styles from './Sound.scss';

class Sound extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: false,
		};
		autoBind(this);
	}

	toggleSearchDropdown() {
		this.setState({
			open: !this.state.open,
		});
	}

	goBack() {
		// TODO: use react router method for this
		window.history.back();
	}

	render () {
		const { loading, sound, error } = this.props;

		if (loading || !sound) {
			return (
				<div>
					{/* TODO: add loading component */}
				</div>
			);
		}

		const soundTitle = sound.post_title;
		const soundContent = sound.post_content.replace('\n', '<br /><br />');
		const soundLocation = _.findWhere(sound.post_meta, { meta_key: 'location' });

		return (
			<Grid className={styles.sound}>
				<span
					className={styles.backToPlaylist}
					onClick={this.goBack.bind(this)}
				>
					<i className="mdi mdi-chevron-left" />
					Back to playlist
				</span>
				<Row className={styles.waveCoverSection}>
					<Col >
						<FeaturedTrack
							track={sound}
							purple
						/>
					</Col>
				</Row>
				<div className={styles.soundBody}>
					<div
						className={styles.content}
						dangerouslySetInnerHTML={{ __html: linkifyHtml(wpautop(soundContent)) }}
					/>
				</div>
				{soundLocation && soundLocation.meta_value &&
					<Row className={styles.metaItem}>
						<Col md={2}>
							<label>
								Location
							</label>
						</Col>
						<Col md={10}>
							<p>
								{soundLocation.meta_value}
							</p>
						</Col>
					</Row>
				}
			</Grid>
		);
	}
}

Sound.propTypes = {
	sounds: PropTypes.array,
	error: PropTypes.object,
	loading: PropTypes.bool,
};

Sound.defaultProps = {
	sounds: [],
	activeCategory: 'everything',
};

export default Sound;
