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

	render () {
		const { loading, sound, error } = this.props;

		if (loading) {
			return (
				<div>
					{/* TODO: add loading component */}
				</div>
			);
		}

		let soundTitle = '';
		let soundContent = '';
		let soundDateMeta;
		let soundLocationMeta;

		if (sound) {
			soundTitle = sound.post_title;
			soundContent = sound.post_content.replace('\n', '<br /><br />');
			soundDateMeta = _.findWhere(sound.post_meta, { meta_key: 'date' });
			soundLocationMeta = _.findWhere(sound.post_meta, { meta_key: 'location' });
		}

		return (
			<Grid className={styles.sound}>
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
						dangerouslySetInnerHTML={{ __html: wpautop(soundContent) }}
					/>
				</div>
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
