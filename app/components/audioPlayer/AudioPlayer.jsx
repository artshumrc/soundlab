import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import PlayArrow from 'material-ui/svg-icons/av/play-arrow';
import Pause from 'material-ui/svg-icons/av/pause';
import SkipPrevious from 'material-ui/svg-icons/av/skip-previous';
import SkipNext from 'material-ui/svg-icons/av/skip-next';
import { Grid, Row, Col } from 'react-flexbox-grid-aphrodite';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

import PlaylistList from '../playlist/PlaylistList';
import soundmanager from '../../../node_modules/soundmanager2';
import styles from './audioPlayer.scss';

export default class AudioPlayer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// audio:[],
			isPlaying: false,
			playId: 'demoSound',
			playitemUrl: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/01-Under-the-Pressure.m4a',
			playIndex: 0,
			creator: 'War on Drugs',
			title: 'Under the Pressure',
			image: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/01-Under-the-Pressure-m4a-image.jpg',
			open: false,
		};
	}

	playTheSound() {

	}

	pausePlayer() {
		soundManager.pause(this.state.playId);
		this.setState({
			isPlaying: false,
		});
	}

	resumePlayer() {
		soundManager.play(this.state.playId);
		this.setState({
			isPlaying: true,
		});
	}

	showState() {

	}

	playNext(playlist) {
		soundManager.destroySound(this.state.playId);
		this.setState({
			playId: playlist[this.state.playIndex + 1].id,
			playitemUrl: playlist[this.state.playIndex + 1].url,
			playIndex: this.state.playIndex + 1,
			isPlaying: false,
			creator: playlist[this.state.playIndex + 1].creator,
			title: playlist[this.state.playIndex + 1].title,
			image: playlist[this.state.playIndex + 1].image
		});
	}

	playPrevious(playlist) {
		soundManager.destroySound(this.state.playId);
		this.setState({
			playId: playlist[this.state.playIndex - 1].id,
			playitemUrl: playlist[this.state.playIndex - 1].url,
			playIndex: this.state.playIndex - 1,
			isPlaying: false,
			creator: playlist[this.state.playIndex - 1].creator,
			title: playlist[this.state.playIndex - 1].title,
			image: playlist[this.state.playIndex - 1].image
		});
	}

	togglePlaylistDrawer() {
		this.setState({
			open: !this.state.open,
		});
	}

	playAudio(playlistId) {
		// Default playlistId to 0 if not supplied
		playlistId = playlistId || 0;

		// If SoundManager object exists, get rid of it...
		if (playlist.nowPlaying) {
			playlist.nowPlaying.destruct();
			// ...and reset array key if end reached
			if (playlistId === playlist.length) {
				playlistId = 0;
			}
		}
	}

	render() {

		const { playId, playitemUrl, title, image } = this.state;

			// Array of files you'd like played
		const playlist = [
			{
				id: 'demoSound',
				image: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/01-Under-the-Pressure-m4a-image.jpg',
				creator: 'War on Drugs',
				title: 'Under the Pressure',
				url: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/01-Under-the-Pressure.m4a',
			},
			{
				id: 'demoSound2',
				image: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/03-Im-Not-Calling-You-a-Liar-m4a-image.jpg',
				creator: 'Florence and the Machine',
				title: "I'm Not Calling You a Liar",
				url: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/03-Im-Not-Calling-You-a-Liar.m4a',
			},
			{
				id: 'demoSound3',
				image: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/02-The-Dress-Looks-Nice-On-You-m4a-image.jpg',
				creator: 'Sufjan Stevens',
				title: 'The Dress Looks Nice on You',
				url: 'http://admin.soundlab.archimedes.digital/wp-content/uploads/2017/06/02-The-Dress-Looks-Nice-On-You.m4a',
			}
		];

		const playButtonStyles = {
			height: 36,
			width: 36
		};


		// console.log(playId, playitemUrl, playlist);
		soundManager.setup({
			onready: (playlistId) => {
				playlist.nowPlaying = soundManager.createSound({
					id: playId,
					url: playitemUrl,
					creator: playlist[0].creator,
					title: playlist[0].title,
					autoPlay: false,
					autoLoad: true,
					whileplaying: () => {

					},
					onfinish: () => {
						soundManager._writeDebug(`${this.id} finished playing`);
					}
				});
			},
			ontimeout: () => {
				// Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
			}
		});

		return (
			<div>
				<row>
					<Col xsOffset={3} xs={6}>
						<div className={styles.soundlabPlayer}>
							<div className={styles.soundlabPlayerContainer}>
								<div className={styles.playerMetaContainer}>
									<div className={styles.playerAvatar}>
										<img src={this.state.image} alt={this.state.title}/>
									</div>
									<div className={styles.playerMeta}>
										<h6 className={styles.playerMetaCreator}>{this.state.creator}</h6>
										<h6 className={styles.playerMetaTitle}>{this.state.title}</h6>
									</div>
								</div>
								<div className={styles.playerTimeline}>
									<div className={styles.currentTrack}>
										<div className={styles.progressBar} ref={this.progressBar}></div>
									</div>

								</div>
								<div className={styles.playerControls}>
									<RaisedButton
										label="Playlist"
										onClick={this.togglePlaylistDrawer.bind(this)}
										className={styles.playlistButton}
									/>
									<Drawer
										width={400}
										open={this.state.open}
										containerClassName={styles.playlistDrawer}
										openSecondary
									>
										<PlaylistList />
									</Drawer>
									<div className={styles.buttonWrapper}>
										<SkipPrevious
											style={playButtonStyles}
											onClick={this.playPrevious.bind(this, playlist)}
										/>
										{this.state.isPlaying === true ?
											<Pause
												style={playButtonStyles}
												onClick={this.pausePlayer.bind(this, playlist)}
											/>
										:
											<PlayArrow
												style={playButtonStyles}
												onClick={this.resumePlayer.bind(this, playlist)}
											/>
										}
										<SkipNext
											style={playButtonStyles}
											onClick={this.playNext.bind(this, playlist)}
										/>
									</div>

								</div>
							</div>
						</div>
					</Col>
				</row>
			</div>
		)
	}
}

AudioPlayer.propTypes = {
	playlist: PropTypes.array
}
