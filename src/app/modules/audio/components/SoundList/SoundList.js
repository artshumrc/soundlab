import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';

import FeaturedTrack from '../../../home/components/FeaturedTrack';
import SoundItem from '../SoundListItem';
import styles from './SoundList.scss';

@CSSModules(styles, {allowMultiple: true})
class SoundList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			open: true
		};
	}

	render () {
		const { loading, sounds, error } = this.props;

		if (loading) {
			return (<div>Loading</div>);
		}

		return (
			<Grid>
				<Row styleName="wave-cover-section">
					<Col >
						<FeaturedTrack
							track={sounds[0]}
							purple
						/>
					</Col>
				</Row>

				<Row styleName="wave-search-filter-section">
					<Col >
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

				<Row styleName="wave-audio-posts-section">
					<Col >
						<div styleName="posts-column-section-titles">
							<div styleName="section-titles-left">
								<span styleName="section-title-number">#</span>
								<span>Track</span>
							</div>
							<div styleName="section-titles-right">
								<span styleName="section-title-duration">Duration</span>
							</div>

						</div>
						{sounds.map((post, index) =>
							<SoundItem key={post.id} post={post} track={index} />
						)}
					</Col>
				</Row>
			</Grid>
		);
	}
}

SoundList.PropTypes = {
	sounds: PropTypes.array,
	error: PropTypes.object,
	loading: PropTypes.boolean,
};

SoundList.defaultProps = {
	sounds: [],
};

export default SoundList;
