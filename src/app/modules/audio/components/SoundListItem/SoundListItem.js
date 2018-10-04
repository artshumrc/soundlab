import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import styles from './SoundListItem.scss'


class SoundListItem extends Component{

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
		const duration = _.findWhere(sound.post_meta, { meta_key: 'duration' });

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
	      <Link
					className={`${styles.soundListItem} ${isCurrentTrack ? styles.soundListItemIsCurrentTrack : ''}`}
					to={`/sounds/${sound.post_name}`}
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
				>

          <Col sm={12} className={styles.itemTrack}>
						<div className={styles.itemIndex}>
							<span className={styles.index}>
								{this.props.index + 1}
							</span>
						</div>
						<div className={styles.itemContent}>
	            <div className={styles.thumbnail}>
		            <div
									className={styles.thumbnailImage}
									style={thumbnailListImage}
								/>
								<div
									className={`${styles.playButton}
										${mouseOver || isCurrentTrack ? styles.playButtonHover : ''}
									`}
								>
									<div>
										<i className="mdi mdi-play" />
									</div>
								</div>
							</div>
							<div className={styles.itemText}>
								<h3 className={styles.title}>
									{sound.post_title}
								</h3>
								{byline &&
									<span className={styles.byline}>
										{byline.meta_value}
									</span>
								}
							</div>
							<div className={styles.durationColumn}>
								<span className={styles.duration}>
								{duration &&
									<span className={styles.byline}>
										{duration.meta_value}
									</span>
								}
								</span>
							</div>
						</div>

          </Col>

				</Link>
	    </Row>
    );
  }
}

SoundListItem.propTypes = {
  index: PropTypes.number,
  post: PropTypes.object,
};

const mapStateToProps = state => ({
	player: state.player,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchSetPlayerTrack: (track) => {
		dispatch(setPlayerTrack(track));
	},
	dispatchPausePlayer: () => {
		dispatch(pausePlayer());
	},
	dispatchResumePlayer: () => {
		dispatch(resumePlayer());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(SoundListItem);
