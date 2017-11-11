import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import autoBind from 'react-autobind';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PlayArrow from 'material-ui/svg-icons/av/play-arrow'
import Pause from 'material-ui/svg-icons/av/pause'
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous'
import SkipNext from 'material-ui/svg-icons/av/skip-next'
import RaisedButton from 'material-ui/RaisedButton'
import Drawer from 'material-ui/Drawer'
import soundmanager from 'soundmanager2'
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite'
import CSSModules from 'react-css-modules'
import _ from 'underscore';
import _s from 'underscore.string';

import PlayerSounds from '../PlayerSounds';
import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import { getAudioFileURL } from '../../../../lib/audioFiles';
import { resumePlayer, pausePlayer, setPlayerTrack, setPlayerProgress, setPlaylist } from '../../../../actions/actions';
import Timer from '../Timer';

import styles from './Player.scss'


@CSSModules(styles, {allowMultiple: true})

class Player extends Component {

	constructor(props) {
		super(props)

		this.state = {
			playlistVisible: true,
		}
		autoBind(this);
	}

	componentDidMount() {
		const { index } = this.props
	}

	componentWillReceiveProps(nextProps) {
		const self = this;

		// if there are tracks
		if (
				!this.props.tracks
			&& nextProps.tracks
			&& nextProps.tracks.length
		) {

			const tracksWithSounds = [];
			soundManager.setup({
				onready: () => {
					nextProps.tracks.forEach(track => {
						const audioFile = getAudioFileURL(track.audio_file);
						tracksWithSounds.push({
							...track,
							sound: soundManager.createSound({
								id: track.post_name,
								url: audioFile,
								autoPlay: false,
								autoLoad: true,
								playNext: true,
								whileplaying: function() {
									self.props.dispatchSetPlayerProgress((this.position/this.duration) * 100);
								},
								onfinish: function() {
									soundManager._writeDebug(this.id + ' finished playing')
									this.playNext();
								}
							})
						});
					});

					this.props.dispatchSetPlaylist(tracksWithSounds);
				},
				ontimeout: function() {
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

	async playPrevious() {
		const { tracks, currentTrack } = this.props.player;
		const currentIndex = tracks.map((x) => {return x.id; }).indexOf(currentTrack.id);

		// pause player
		this.pause();

		// loop through tracks
		let prevIndex = currentIndex - 1;
		if (prevIndex < 0) {
			prevIndex = tracks.length - 1;
		}

		// set the new player track
		await this.props.dispatchSetPlayerTrack(tracks[prevIndex]);

		// resume player player
		this.resume();
	}

	togglePlaylistVisibility() {
		this.setState({
			playlistVisible: !this.state.playlistVisible,
		});
	}

	render() {
		const { player } = this.props;
		const { playlistVisible } = this.state;
		let { tracks, currentTrack } = player;

		if (!tracks || !tracks.length) {
			// TODO: just hide instead of not displaying
			return null;
		}

		if (!currentTrack) {
			currentTrack = tracks[0];
		}

		const thumbnailListImage = {
			width: '60px',
			height: '60px',
			objectFit: 'cover',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center'
		};

		if (currentTrack.thumbnail) {
			thumbnailListImage.backgroundImage = `url("${getPostThumbnailBySize(currentTrack.thumbnail, 'thumbnail')}")`;
		} else {
			thumbnailListImage.backgroundImage = 'url("/images/default_sound.png")';
		}

		const byline = _.findWhere(currentTrack.post_meta, { meta_key: 'byline' });

		const buttonStyles = {
			height: 22,
			width: 22,
			cursor: "pointer",
		};

		const playButtonStyles = {
			height: 26,
			width: 26,
			cursor: "pointer",
		};

		return (
			<div className={`
				${styles.soundlabPlayer}
				${playlistVisible ? styles.soundlabPlayerPlaylistVisible : ''}
			`}>
				<div styleName="soundlabPlayerContainer">
					<div
						styleName="playerProgressBar"
						style={{
							width: `${player.progress}%`,
						}}
					/>
					<div styleName="playerOverlay">
						<div styleName="playerMetaContainer">
							<div styleName="currentPlayMeta" >
								<div styleName="playerAvatar" style={thumbnailListImage} />
								<div styleName="playerMeta">
									<h6 styleName="playerMetaTitle">
										{currentTrack.post_title}
									</h6>
									{byline &&
										<h6 styleName="playerMetaCreator">
											{_s.prune(byline.meta_value, 60)}
										</h6>
									}
								</div>
							</div>
						</div>
						<div styleName="playerControls">
							<div styleName="buttonWrapper">
								<SkipPrevious
									style={buttonStyles}
									onClick={this.playPrevious.bind(this)}
								/>

								{player.isPlaying ?
									<Pause
										style={buttonStyles}
										onClick={this.pause.bind(this)}
									/>
								:
									<PlayArrow
										style={playButtonStyles}
										onClick={this.resume.bind(this)}
									/>
								}

								<SkipNext
									style={buttonStyles}
									onClick={this.playNext.bind(this)}
								/>
							</div>

							<div styleName="playerRight">
								<div styleName="timerOuter">
									{currentTrack && currentTrack.sound &&
										<Timer
											track={currentTrack}
										/>
									}
								</div>
								<div
									styleName="playlistToggle"
									onClick={this.togglePlaylistVisibility.bind(this)}
								>
									{playlistVisible ?
										<i className="mdi mdi-chevron-down mdi-36px" />
									:
										<i className="mdi mdi-chevron-up mdi-36px" />
									}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div styleName="playlistDrawer">
					<PlayerSounds sounds={player.tracks} />
				</div>
			</div>
		);
	}
}

Player.propTypes = {
	tracks: PropTypes.array
};

const mapStateToProps = state => ({
	player: state.player,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
	dispatchSetPlaylist: (tracks) => {
		dispatch(setPlaylist(tracks));
	},
	dispatchSetPlayerProgress: (progress) => {
		dispatch(setPlayerProgress(progress));
	},
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
)(Player)
