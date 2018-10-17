import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import './UserSubmissionListItem.css'


class UserSubmissionListItem extends Component{

	constructor(props) {
		super(props);

		this.state = {
			mouseOver: false,
		};
	}

	handleClick() {
		// Start item on player

	}

	handleMouseEnter(){
		this.setState({
			mouseOver: true,
		});
	}

	handleMouseLeave(){
		this.setState({
			mouseOver: false,
		});
	}

	render() {
		const { sound, player } = this.props;
		const { mouseOver } = this.state;

		if (!sound) {
			return null;
		}

		const byline = _.findWhere(sound.post_meta, { meta_key: 'byline' });
		const duration = "0:00";

		const thumbnailListImage = {
			width: '70px',
			height: '70px',
			objectFit: 'cover',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		if (sound.thumbnail) {
			thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(sound.thumbnail, 'thumbnail')}")`;
		} else {
			thumbnailListImage.backgroundImage = 'url("/images/default_sound_600w600h.png")';
		}

		let isCurrentTrack = false;
		if (player && player.currentTrack && player.currentTrack.id === sound.id) {
			isCurrentTrack = true;
		}

		return (
			<Row >
				<div
					className={`soundListItem ${isCurrentTrack ? 'soundListItemIsCurrentTrack' : ''}`}
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
				>
					<Col sm={1}>
						<span className="index">
							{this.props.index + 1}
						</span>
					</Col>
					<Col sm={8}>
						<div className="itemContent">
							<div className="thumbnail">
								<div
									className="thumbnailImage"
									style={thumbnailListImage}
								/>
							</div>
							<div className="itemText">
								<h3 className="title">
									{sound.post_title}
								</h3>
								{byline &&
								<span className="byline">
									{byline.meta_value}
								</span>
								}
							</div>
						</div>
					</Col>
					<Col sm={3} className="durationColumn">
						<span className="duration">
						</span>
					</Col>
				</div>
			</Row>
		);
	}
}

UserSubmissionListItem.propTypes = {
	index: PropTypes.number,
	post: PropTypes.object,
};

const mapStateToProps = state => ({
	player: state.player,
});

export default connect(
	mapStateToProps,
)(UserSubmissionListItem);
