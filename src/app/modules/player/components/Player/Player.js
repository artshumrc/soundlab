import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
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

import { resumePlayer, pausePlayer, nextTrack, previousTrack } from '../../../../actions/actions'
import FeaturedTrack from '../FeaturedTrack'
import PlaylistList from '../../../playlist/components/PlaylistList'
import Timer from '../Timer';

import styles from './Player.scss'


@CSSModules(styles, {allowMultiple: true})

class Player extends Component {

	constructor(props) {
		super(props)
		this.state = {
			open: false,
			tracksWithSounds: [],
			currentTrack: null,
		}
	}

	componentDidMount() {
		const { index } = this.props
	}

	componentWillReceiveProps(nextProps) {

		// if there are tracks
		if (
				!this.props.tracks
			&& nextProps.tracks
			&& nextProps.tracks.length
		) {

			const tracks = [{
				id: "63",
				post_title: "Example Sound 4",
				post_name: "example-sound-4",
				post_content: "Example sound from Archive.org: https://archive.org/details/Sitar96",
				post_meta: [{
					meta_key: "audio_file",
					meta_value: "http://admin.soundlab.local:8888/wp-content/uploads/2017/10/Sitar96_64kb.mp3",
					__typename: "Postmeta",
				}],
			}];


			const tracksWithSounds = [];
			soundManager.setup({
				onready: () => {
					tracks.forEach(track => {
						const audioFile = _.findWhere(track.post_meta, { meta_key: 'audio_file' });
						tracksWithSounds.push({
							...track,
							sound: soundManager.createSound({
								id: track.post_name,
								url: audioFile.meta_value,
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
						});
					});

					console.log(tracksWithSounds);

					this.setState({
						tracksWithSounds,
					});
				},
				ontimeout: function() {
					// Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
				},
			});
		}
	}

	pause(){
		this.props.dispatch(pausePlayer())
		const track = this.state.tracksWithSounds[0];
		soundManager.pause(track.sound.id)
		this.setState({
			currentTrack: null,
		});
	}

	resume(props){
		this.props.dispatch(resumePlayer())
		const track = this.state.tracksWithSounds[0];

		soundManager.play(track.sound.id);
		this.setState({
			currentTrack: track,
		});
	}

	playNext(props) {
		soundManager.destroySound(this.props.player.id)
		this.props.dispatch(nextTrack(this.props.player.track))
	}

	playPrevious() {
		// soundManager.destroySound(this.props.playlist[this.props.ui.currentIndex].id)
		this.props.dispatch(previousTrack())
	}

	togglePlaylistDrawer() {
		this.setState({
			open:!this.state.open
		})
	}


	render() {

		// TODO: move these to redux in the future
		let { tracksWithSounds, currentTrack } = this.state;

		if (!tracksWithSounds || !tracksWithSounds.length) {
			// TODO: just hide instead of not displaying
			return null;
		}

		if (!currentTrack) {
			currentTrack = tracksWithSounds[0];
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
			<div styleName="soundlabPlayer">
				<div styleName="soundlabPlayerContainer">
					<div styleName="playerProgressBar" />
					<div styleName="playerMetaContainer">
						<div styleName="currentPlayMeta" >
							<div styleName="playerAvatar" style={thumbnailListImage} />
							<div styleName="playerMeta">
								<h6 styleName="playerMetaTitle">
									{currentTrack.post_title}
								</h6>
								{byline &&
									<h6 styleName="playerMetaCreator">
										{_s.prune(byline.meta_value, 120)}
									</h6>
								}
							</div>
						</div>
					</div>
					<div styleName="playerControls">
						<div styleName="buttonWrapper">
							<SkipPrevious
								style={buttonStyles}
								onClick={this.playPrevious.bind(this, tracksWithSounds)}
							/>

							{this.props.ui.isPlaying ?
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
								onClick={this.playNext.bind(this, tracksWithSounds)}
							/>
						</div>

						{currentTrack && currentTrack.sound &&
							<Timer
								track={currentTrack}
							/>
						}
					</div>
				</div>
			</div>
		);
	}
}

Player.propTypes = {
	tracks: PropTypes.array
};

function mapStateToProps(state){
	return {
		playlist: state.playlist,
		player: state.player,
		ui: state.ui
	};
}

export default connect(mapStateToProps)(Player)
