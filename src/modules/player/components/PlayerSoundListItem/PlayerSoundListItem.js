import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import _ from 'underscore';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';

import { resumePlayer, pausePlayer, setPlayerTrack, setPlayerProgress, setPlaylist } from '../../../../actions/actions';
import { getPostThumbnailBySize } from '../../../../lib/thumbnails';
import { getAudioFileURL } from '../../../../lib/audioFiles';
import './PlayerSoundListItem.css'


class PlayerSoundListItem extends Component{

	constructor(props) {
		super(props);

		this.state = {
			mouseOver: false,
			status: '',
			trackWithSound: null,
			progress: 0,
		};
	}

	componentDidMount() {
		const self = this;
		const { sound } = this.props;

		// if there are tracks
		if (
				sound
			&& !this.state.trackWithSound
		) {

			// standardize naming for window.soundManager differentiation
			const track = sound;
			let trackWithSound;
			window.soundManager.setup({
				onready: () => {
					const audioFile = getAudioFileURL(track.audio_file);
					trackWithSound = {
						...track,
						sound: window.soundManager.createSound({
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

	componentWillReceiveProps(nextProps) {
		const self = this;
		const { sound } = nextProps;

		// if there are tracks
		if (
				sound
			&& !this.state.trackWithSound
		) {

			// standardize naming for window.soundManager differentiation
			const track = sound;
			let trackWithSound;
			window.soundManager.setup({
				onready: () => {
					const audioFile = getAudioFileURL(track.audio_file);
					trackWithSound = {
						...track,
						sound: window.soundManager.createSound({
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

	async handleClick(){
		const { status } = this.state;
		const { isPlaying } = this.props.player;

		if (isPlaying) {
			this.props.dispatchPausePlayer();
			window.soundManager.pause(this.props.player.currentTrack.sound.id);
		}

		if (status !== 'play') {
			await this.props.dispatchSetPlayerTrack(this.state.trackWithSound);

			window.soundManager.play(this.props.player.currentTrack.sound.id);
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

	pause(){
		this.props.dispatchPausePlayer();
		window.soundManager.pause(this.props.player.currentTrack.sound.id);
	}

	resume(){
		this.props.dispatchResumePlayer();
		window.soundManager.play(this.props.player.currentTrack.sound.id);
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
				<div
					className={`soundListItem ${isCurrentTrack ? 'soundListItemIsCurrentTrack' : ''}`}
					to={`/sounds/${sound.post_name}`}
					onMouseEnter={this.handleMouseEnter.bind(this)}
					onMouseLeave={this.handleMouseLeave.bind(this)}
					onClick={this.handleClick.bind(this)}
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
										${mouseOver || isCurrentTrack ? 'playButtonHover' : ''}
									`}
								>
									<div>
										<i className="mdi mdi-play" />
									</div>
								</div>
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
							<div className="durationColumn">
								<span className="duration">
									{duration &&
									<span className="byline">
									{duration.meta_value}
								</span>
								}
								</span>
							</div>
						</div>
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
)(PlayerSoundListItem);
