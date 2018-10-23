import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Row, Col } from 'react-bootstrap';
import autoBind from 'react-autobind';
import { Link } from 'react-router';
import _ from 'underscore';
import moment from 'moment';
import wpautop from 'wpautop';
import linkifyHtml from 'linkifyjs/html';

import FeaturedTrack from '../../../home/components/FeaturedTrack';

import './Sound.css';

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
			<div className="sound">
				<span
					className="backToSound"
					onClick={this.goBack.bind(this)}
				>
					<i className="mdi mdi-chevron-left" />
					Back to playlist
				</span>
				<Row className="waveCoverSection">
					<Col >
						<FeaturedTrack
							track={sound}
							purple
						/>
					</Col>
				</Row>
				<div className="soundBody">
					<div
						className="content"
						dangerouslySetInnerHTML={{ __html: linkifyHtml(wpautop(soundContent)) }}
					/>
					{soundLocation && soundLocation.meta_value &&
						<div className="metaItem">

							<label>
									Location
							</label>
							<p>
								{soundLocation.meta_value}
							</p>

						</div>
					}
				</div>
			</div>
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
