import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import _ from 'underscore';
import { connect } from 'react-redux';

import { resumePlayer, pausePlayer, setPlayerTrack, setPlayerProgress, setPlaylist } from '../../../../actions/actions';
import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import { getAudioFileURL } from '../../../../lib/audioFiles';

import styles from './FeaturedTrack.scss'

class FeaturedTrack extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			status: '',
			trackWithSound: null,
		};
	}

	componentDidMount() {
		const self = this;

		// if there are tracks
		if (
				this.props.track
			&& !this.state.trackWithSound
		) {
			const { track } = this.props;

			if (!track) {
				return null;
			}

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
							playNext: true,
							whileplaying: () => {
								self.props.dispatchSetPlayerProgress((this.position/this.duration) * 100);
							},
							onfinish: () => {
								self.playNext();
							}
						})
					};

					this.setState({
						trackWithSound,
					})
				},
				ontimeout: () => {
					// Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
				},
			});
		}
	}

	pause(){
		this.props.dispatchPausePlayer();
		soundManager.pause(this.props.player.currentTrack.sound.id);
	}

	resume(){
		this.props.dispatchResumePlayer();
		soundManager.play(this.props.player.currentTrack.sound.id);
	}


	async playNext() {
		const { tracks, currentTrack } = this.props.player;
		const currentIndex = tracks.map((x) => {return x.id; }).indexOf(currentTrack.id);

		// pause player
		this.pause();

		// loop through tracks
		let nextIndex = currentIndex + 1;
		if (nextIndex > tracks.length - 1) {
			nextIndex = 0;
		}

		// set the new player track
		await this.props.dispatchSetPlayerTrack(tracks[nextIndex]);

		// resume player player
		this.resume();
	}


	componentWillReceiveProps(nextProps) {
		const self = this;

		// if there are tracks
		if (
			!this.state.trackWithSound
		) {
			const { track } = nextProps;

			if (!track) {
				return null;
			}

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
								self.props.dispatchSetPlayerProgress((this.position/this.duration) * 100);
							},
							onfinish: () => {
								self.playNext();
							}
						})
					};

					this.setState({
						trackWithSound,
					})
				},
				ontimeout: () => {
					// Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
				},
			});
		}
	}

	handleMouseEnter(){
		const { status } = this.state;
		if (status !== 'play') {
			this.setState({
				status: 'hover',
			});
		}
	}

	handleMouseLeave(){
		const { status } = this.state;
		if (status !== 'play') {
			this.setState({
				status: '',
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

  render() {
		const { status } = this.state;
		const { track, purple, showFeaturedTrackLabel } = this.props;
		let postTitle = track ? track.post_title : '';
		let byline = '';
		let bylineMeta;

		if (track) {
			bylineMeta = _.findWhere(track.post_meta, { meta_key: 'byline' });
		}

		if (bylineMeta) {
			byline = bylineMeta.meta_value;
		}


    return (
      <div
				className={styles.featuredTrackComponent}
				onMouseEnter={this.handleMouseEnter.bind(this)}
				onMouseLeave={this.handleMouseLeave.bind(this)}
				onClick={this.handleClick.bind(this)}
			>
        <div
					className={styles.featuredTrackPlayerContainer}
				>
					<div className={styles.playerContainer}>
						<div
							className={`${styles.playerRow1}
								${purple ? styles.playerRowPurple : ''}
								${status.length ? styles.playerRow1Hover : ''}
							`}
						/>
						<div
							className={`${styles.playerRow2}
								${purple ? styles.playerRowPurple : ''}
							`}
						/>
						<div className={`${styles.playerRow3}
								${purple ? styles.playerRowPurple : ''}
							`}
						/>
						<div className={`${styles.playerRow4}
								${purple ? styles.playerRowPurple : ''}
							`}
						/>
						<div className={`${styles.playerRow5}
								${status.length ? styles.playerRow5Hover : ''}
							`}
						/>
						<div className={styles.playButtonContainer}>
							{status === 'play' ?
								<i className="mdi mdi-pause" />
							:
								<i className="mdi mdi-play" />
							}
						</div>
					</div>
        </div>
        <div className={styles.featuredTrackMetaContainer}>
					<div>
						{showFeaturedTrackLabel &&
		          <h6
								className={`${styles.featuredTrackTitle}
									${status.length ? styles.featuredTrackTitleHover : ''}
								`}
							>
								Featured Track
							</h6>
						}
					</div>
          <span className={styles.featuredTrackMetaItemTitle}>
						{postTitle}
					</span>
					{byline &&
	          <span className={styles.featuredTrackMetaItemAuthor}>
							{byline}
						</span>
					}
        </div>
      </div>
    );
  }
}

FeaturedTrack.propTypes = {
	track: PropTypes.object,
	player: PropTypes.object,
	purple: PropTypes.bool,
};

const mapStateToProps = state => ({
	player: state.player,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchSetPlayerTrack: (track) => {
		dispatch(setPlayerTrack(track));
	},
	dispatchSetPlayerProgress: (progress) => {
		dispatch(setPlayerProgress(progress));
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
)(FeaturedTrack);
