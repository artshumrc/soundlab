import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import { resumePlayer, pausePlayer, setPlayerTrack, setPlaylist } from '../../../../actions/actions';
import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import { getAudioFileURL } from '../../../../lib/audioFiles';
import styles from './PlayerSoundListItem.scss'


class PlayerSoundListItem extends Component{

	constructor(props) {
		super(props);

		this.state = {
			mouseOver: false,
			status: '',
			trackWithSound: null,
		};
	}

	componentDidMount() {
		const { sound } = this.props;

		// if there are tracks
		if (
				sound
			&& !this.state.trackWithSound
		) {

			// standardize naming for soundManager differentiation
			const track = sound;
			let trackWithSound;
			soundManager.setup({
				onready: () => {
					const audioFile = getAudioFileURL(track.audio_file);
					trackWithSound = {
						...track,
						sound: soundManager.createSound({
							id: `featured-${track.post_name}`,
							url: audioFile,
							autoPlay: false,
							autoLoad: true,
							whileplaying: () => {
								//document.getElementsBystyleName(('progressBar')[0].style.width =	25 + '%')
							},
							onfinish: function() {
								// document.getElementById('progressBar').style.width = '0'
								soundManager._writeDebug(this.id + ' finished playing')
							}
						})
					};

					this.setState({
						trackWithSound,
					})
				},
				ontimeout: function() {
					// Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
				},
			});
		}
	}

	componentWillReceiveProps(nextProps) {
		const { sound } = nextProps;

		// if there are tracks
		if (
				sound
			&& !this.state.trackWithSound
		) {

			// standardize naming for soundManager differentiation
			const track = sound;
			let trackWithSound;
			soundManager.setup({
				onready: () => {
					const audioFile = getAudioFileURL(track.audio_file);
					trackWithSound = {
						...track,
						sound: soundManager.createSound({
							id: `featured-${track.post_name}`,
							url: audioFile,
							autoPlay: false,
							autoLoad: true,
							whileplaying: () => {
								//document.getElementsBystyleName(('progressBar')[0].style.width =	25 + '%')
							},
							onfinish: function() {
								// document.getElementById('progressBar').style.width = '0'
								soundManager._writeDebug(this.id + ' finished playing')
							}
						})
					};

					this.setState({
						trackWithSound,
					})
				},
				ontimeout: function() {
					// Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
				},
			});
		}
	}

	async handleClick(){
		const { status } = this.state;
		const { isPlaying } = this.props.player;

		if (isPlaying) {
			this.props.dispatchPausePlayer();
			soundManager.pause(this.props.player.currentTrack.sound.id);
		}

		if (status !== 'play') {
			await this.props.dispatchSetPlayerTrack(this.state.trackWithSound);

			soundManager.play(this.props.player.currentTrack.sound.id);
			this.props.dispatchResumePlayer();
			this.setState({
				status: 'play',
			});

		} else {
			this.setState({
				status: '',
			});
		}
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
					className={`${styles.soundListItem} ${isCurrentTrack ? styles.soundListItemIsCurrentTrack : ''}`}
					to={`/sounds/${sound.post_name}`}
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
					onClick={this.handleClick.bind(this)}
				>
          <Col sm={1}>
            <span className={styles.index}>
							{this.props.index + 1}
						</span>
          </Col>
          <Col sm={8}>
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
						</div>
          </Col>
          <Col sm={3} className={styles.durationColumn}>
            <span className={styles.duration}>
						</span>
					</Col>
				</div>
	    </Row>
    );
  }
}

PlayerSoundListItem.propTypes = {
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
)(PlayerSoundListItem);
