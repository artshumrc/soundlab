import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import autoBind from 'react-autobind';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import './PlaylistListItem.css'


class PlaylistListItem extends Component{

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
		const { playlist } = this.props;
		const { mouseOver } = this.state;

		if (!playlist) {
			return null;
		}

		const byline = _.findWhere(playlist.post_meta, { meta_key: 'byline' });
		const duration = "0:00";

		const thumbnailListImage = {
			width: '70px',
			height: '70px',
			objectFit: 'cover',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		if (playlist.thumbnail) {
			thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(playlist.thumbnail, 'thumbnail')}")`;
		} else {
			thumbnailListImage.backgroundImage = 'url("/images/default_sound_600w600h.png")';
		}

		return (
			<Row >
				<Link
					className="playlistListItem"
					to={`/playlists/${playlist.post_name}`}
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
				>
					<Col sm={12} className="itemTrack">
						<div className="itemIndex">
							<span className="index">
								{this.props.index + 1}
							</span>
						</div>
						<div className="itemContent">
							<div className="thumbnail">
								<div
									className="thumbnailImage"
									style={thumbnailListImage}
								/>
								<div
									className={`playButton
										${mouseOver ? 'playButtonHover' : ''}
									`}
								>
									<div>
										<i className="mdi mdi-play" />
									</div>
								</div>
							</div>
							<div className="itemText">
								<h3 className="title">
									{playlist.post_title}
								</h3>
								{byline &&
								<span className="byline">
									{byline.meta_value}
								</span>
								}
							</div>
							<div className="durationColumn">
								<span className="duration">
								</span>
							</div>
						</div>
					</Col>
				</Link>
			</Row>
		);
	}
}

PlaylistListItem.propTypes = {
	index: PropTypes.number,
	post: PropTypes.object,
};

export default PlaylistListItem;
