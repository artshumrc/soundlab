import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
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
import styles from './Player.scss'

@CSSModules(styles, {allowMultiple: true})

class Player extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open:false
    }
  }

  componentDidMount() {
    const { index } = this.props
  }

  pauseTheSound(){
    this.props.dispatch(pausePlayer())
    soundManager.pause(this.props.player.id)
  }

  resumeTheSound(props){
    this.props.dispatch(resumePlayer())
    soundManager.play(this.props.player.id)
  }

  playNext(props) {
    soundManager.destroySound(this.props.player.id)
    this.props.dispatch(nextTrack(this.props.player.track))
  }

  playPrevious() {
//    soundManager.destroySound(this.props.playlist[this.props.ui.currentIndex].id)
    this.props.dispatch(previousTrack())
  }

  togglePlaylistDrawer() {
    this.setState({
      open:!this.state.open
    })
  }


  render() {

    const tracks = this.props.tracks || [];
    const playlist = []
    const playId = this.props.player.id;
    const playitemUrl = this.props.player.soundCloudLink;

		if (!tracks || !tracks.length) {
			// TODO: just hide instead of not displaying
			return null;
		}

		const currentTrack = tracks[0];

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
		const audioFile = _.findWhere(currentTrack.post_meta, { meta_key: 'audio_file' });

    const buttonStyles = {
      height: 22,
      width: 22,
    };

    const playButtonStyles = {
      height: 26,
      width: 26,
    };

		/*
		function playAudio(playlistId){
        // Default playlistId to 0 if not supplied
        playlistId = playlistId ? playlistId : 0;
        // If SoundManager object exists, get rid of it...
        if (playlist.nowPlaying){
          playlist.nowPlaying.destruct();
          // ...and reset array key if end reached
          if(playlistId == playlist.length){
              playlistId = 0;
        }
      }
    }
		*/

    soundManager.setup({

      onready: function() {

        playlist.nowPlaying = soundManager.createSound({
          id: currentTrack.post_name,
          url: audioFile.meta_value,
          autoPlay: false,
          autoLoad: true,
          whileplaying: function() {
          //document.getElementsBystyleName(('progressBar')[0].style.width =  25 + '%')
        },
         onfinish: function() {
          // document.getElementById('progressBar').style.width = '0'
           soundManager._writeDebug(this.id + ' finished playing')
          }
        })
      },

      ontimeout: function() {
        // Uh-oh. No HTML5 support, SWF missing, Flash blocked or other issue
      }
    })

    return (
      <div>
        <Row>
          <Col xsOffset={3} xs={6}>
            <div styleName="soundlabPlayer">
              <div styleName="soundlabPlayerContainer">
                <div styleName="playerMetaContainer">
                  <div styleName="currentPlayMeta" >
                    <div styleName="playerAvatar" style={thumbnailListImage} />
                    <div styleName="playerMeta">
                      <h6 styleName="playerMetaTitle">{currentTrack.post_title}</h6>
											{byline &&
	                      <h6 styleName="playerMetaCreator">{_s.prune(byline.meta_value, 120)}</h6>
											}
                    </div>
                  </div>
                </div>
                <div styleName="playerControls">
                  <div styleName="buttonWrapper">
                    <SkipPrevious
	                    style={buttonStyles}
	                    onClick={this.playPrevious.bind(this, playlist)}
                    />

                    {this.props.ui.isPlaying ?
                      <Pause
	                      style={buttonStyles}
	                      onClick={this.pauseTheSound.bind(this)}
											/>
                    :
                      <PlayArrow
	                      style={playButtonStyles}
	                      onClick={this.resumeTheSound.bind(this)}
											/>
                    }

                    <SkipNext
	                    style={buttonStyles}
	                    onClick={this.playNext.bind(this)}
										/>
                  </div>

                  <div styleName="playTimeWrapper">
	                  <span styleName="playTime">0:00 / 0:00</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
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
